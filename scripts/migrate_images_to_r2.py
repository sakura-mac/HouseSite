#!/usr/bin/env python3
"""
批量迁移本地图片到 R2 + 更新 D1 数据库
1. 遍历所有房源/博客文件夹
2. 非 webp 图片用 cwebp 转换
3. 上传 webp 到 R2
4. 更新 D1: cover 字段 + content 中的图片路径
"""

import json
import os
import re
import subprocess
import sys
import time
import urllib.request
import urllib.parse

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HOUSE_DIR = os.path.join(BASE, 'public', 'house')
BLOGS_DIR = os.path.join(BASE, 'public', 'blogs')
BUCKET = 'swallow-homes-images'
API_URL = 'https://swallow-homes-api.perriersuda.workers.dev'
ADMIN_TOKEN = 'Sw@ll0w2026!Admin'
IMAGE_EXTS = {'.jpg', '.jpeg', '.png', '.webp', '.gif'}

stats = {'uploaded': 0, 'converted': 0, 'failed': 0, 'skipped': 0}
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
}


def log(msg):
    print(msg, flush=True)


def convert_to_webp(src_path):
    """用 cwebp 将图片转为 webp，返回 webp 文件路径"""
    webp_path = re.sub(r'\.[^.]+$', '.webp', src_path)
    if os.path.exists(webp_path) and src_path.endswith('.webp'):
        return webp_path  # 已经是 webp

    if src_path.endswith('.webp'):
        return src_path

    # 用 cwebp 转换
    result = subprocess.run(
        ['cwebp', '-q', '85', '-resize', '1920', '0', src_path, '-o', webp_path],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        log(f"  ⚠️ cwebp 转换失败: {src_path}: {result.stderr[:100]}")
        return None

    stats['converted'] += 1
    return webp_path


def upload_to_r2(local_path, r2_key):
    """用 wrangler 上传文件到 R2"""
    content_type = 'image/webp'
    result = subprocess.run(
        ['npx', 'wrangler', 'r2', 'object', 'put', f'{BUCKET}/{r2_key}',
         '--file', local_path, '--content-type', content_type, '--remote'],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        log(f"  ❌ 上传失败: {r2_key}: {result.stderr[:100]}")
        stats['failed'] += 1
        return False
    stats['uploaded'] += 1
    return True


def update_d1(table, record_id, data):
    """通过 API 更新 D1 记录"""
    url = f'{API_URL}/api/{table}/{record_id}'
    req = urllib.request.Request(
        url,
        data=json.dumps(data).encode('utf-8'),
        headers={
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {ADMIN_TOKEN}',
            **HEADERS,
        },
        method='PUT'
    )
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.status == 200
    except Exception as e:
        log(f"  ❌ D1 更新失败 (id={record_id}): {e}")
        return False


def process_folder(folder_path, folder_name, content_type_prefix, table, record_id):
    """处理一个文件夹：转换+上传图片，返回 cover key 和更新后的 content"""
    images = []
    cover_key = None

    for f in sorted(os.listdir(folder_path)):
        ext = os.path.splitext(f)[1].lower()
        if ext not in IMAGE_EXTS:
            continue
        if f == 'index.md':
            continue
        images.append(f)

    # 处理每张图片
    for img_name in images:
        src = os.path.join(folder_path, img_name)
        webp_path = convert_to_webp(src)
        if not webp_path:
            continue

        r2_key = f'{content_type_prefix}/{folder_name}/{os.path.basename(webp_path)}'
        if upload_to_r2(webp_path, r2_key):
            # 第一张图作为 cover
            if cover_key is None:
                cover_key = r2_key
                log(f"  📸 cover: {r2_key}")

    return cover_key


def update_content_images(content, folder_name, content_type_prefix):
    """将 content 中的 ![](./xxx.jpg) 替换为 ![](/api/images/houses/folderName/xxx.webp)"""
    if not content:
        return content

    # 匹配 ![alt](./filename.ext) 或 ![](filename.ext)
    pattern = r'!\[([^\]]*)\]\(\.?/?(.+?)\)'

    def replacer(m):
        alt = m.group(1)
        filename = m.group(2)
        # 去掉查询参数
        filename = filename.split('?')[0]
        # 转为 webp 扩展名
        base = re.sub(r'\.[^.]+$', '', filename)
        webp_filename = f'{base}.webp'
        r2_url = f'/api/images/{content_type_prefix}/{folder_name}/{webp_filename}'
        return f'![{alt}]({r2_url})'

    return re.sub(pattern, replacer, content)


def main():
    log("🚀 开始批量迁移图片到 R2...\n")

    # === 房源 ===
    with open(os.path.join(HOUSE_DIR, 'house-list.json')) as f:
        houses = json.load(f)

    log(f"📦 房源: {len(houses)} 套")

    # 获取 D1 中的房源列表（拿到 id）
    req = urllib.request.Request(f'{API_URL}/api/houses', headers=HEADERS)
    with urllib.request.urlopen(req) as resp:
        d1_houses = json.loads(resp.read())

    for house in houses:
        folder_name = house['folderName']
        folder_path = os.path.join(HOUSE_DIR, folder_name)
        if not os.path.isdir(folder_path):
            log(f"  ⚠️ 跳过(目录不存在): {folder_name}")
            continue

        log(f"\n🏠 [{folder_name}]")

        # 找到对应的 D1 记录
        d1_record = next((h for h in d1_houses if h['folder_name'] == folder_name), None)
        if not d1_record:
            log(f"  ⚠️ D1 中未找到对应记录")
            continue

        cover_key = process_folder(folder_path, folder_name, 'houses', 'houses', d1_record['id'])

        # 更新 D1: cover + content
        content = house.get('content', '')
        if not content:
            # 从 index.md 读取
            md_path = os.path.join(folder_path, 'index.md')
            if os.path.exists(md_path):
                with open(md_path, 'r') as f:
                    md = f.read()
                # 去掉 front matter
                content = re.sub(r'^---\n.*?\n---\n', '', md, flags=re.DOTALL)

        updated_content = update_content_images(content, folder_name, 'houses')

        update_data = {'content': updated_content}
        if cover_key:
            update_data['cover'] = cover_key

        if update_d1('houses', d1_record['id'], update_data):
            log(f"  ✅ D1 已更新 (cover={cover_key or '无'})")

    # === 博客 ===
    with open(os.path.join(BLOGS_DIR, 'blog-list.json')) as f:
        blogs = json.load(f)

    log(f"\n\n📦 博客: {len(blogs)} 篇")

    req = urllib.request.Request(f'{API_URL}/api/blogs', headers=HEADERS)
    with urllib.request.urlopen(req) as resp:
        d1_blogs = json.loads(resp.read())

    for blog in blogs:
        folder_name = blog['folderName']
        folder_path = os.path.join(BLOGS_DIR, folder_name)
        if not os.path.isdir(folder_path):
            log(f"  ⚠️ 跳过(目录不存在): {folder_name}")
            continue

        log(f"\n📝 [{folder_name}]")

        d1_record = next((b for b in d1_blogs if b['folder_name'] == folder_name), None)
        if not d1_record:
            log(f"  ⚠️ D1 中未找到对应记录")
            continue

        cover_key = process_folder(folder_path, folder_name, 'blogs', 'blogs', d1_record['id'])

        content = blog.get('content', '')
        if not content:
            md_path = os.path.join(folder_path, 'index.md')
            if os.path.exists(md_path):
                with open(md_path, 'r') as f:
                    md = f.read()
                content = re.sub(r'^---\n.*?\n---\n', '', md, flags=re.DOTALL)

        updated_content = update_content_images(content, folder_name, 'blogs')

        update_data = {'content': updated_content}
        if cover_key:
            update_data['cover'] = cover_key

        if update_d1('blogs', d1_record['id'], update_data):
            log(f"  ✅ D1 已更新 (cover={cover_key or '无'})")

    # === 汇总 ===
    log(f"\n{'='*50}")
    log(f"✅ 迁移完成！")
    log(f"  上传成功: {stats['uploaded']} 张")
    log(f"  格式转换: {stats['converted']} 张")
    log(f"  失败: {stats['failed']} 张")
    log(f"{'='*50}")


if __name__ == '__main__':
    main()
