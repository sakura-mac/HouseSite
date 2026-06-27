#!/usr/bin/env python3
"""
修复两个问题:
1. Rita Hotel Namba: content 中添加图片引用
2. 芦屋市親王塚町一戸建て: 修复换行排版 + 修复旧域名图片URL
"""

import json
import subprocess
import sys

# ============ 1. Rita Hotel Namba: 添加图片引用 ============
rita_content = """スワローホームズ株式会社の所有物件

Rita Hotel Nambaは、難波エリアに位置する物件です。詳細についてはお問い合わせください。

![画像1](/api/images/houses/Rita%20Hotel%20Namba/rita-1.webp)

![画像2](/api/images/houses/Rita%20Hotel%20Namba/rita-2.webp)

![画像3](/api/images/houses/Rita%20Hotel%20Namba/rita-3.webp)

![画像4](/api/images/houses/Rita%20Hotel%20Namba/rita-4.webp)

![画像5](/api/images/houses/Rita%20Hotel%20Namba/rita-5.webp)

![画像6](/api/images/houses/Rita%20Hotel%20Namba/rita-6.webp)
"""

# 转义 SQL 单引号
rita_content_escaped = rita_content.replace("'", "''")

rita_sql = f"UPDATE houses SET content='{rita_content_escaped}' WHERE folder_name='Rita Hotel Namba';"

print("=== Rita SQL ===")
print(rita_sql[:200] + "...")

# ============ 2. 芦屋市親王塚町一戸建て: 修复排版 + 图片URL ============

# 获取当前 content
result = subprocess.run(
    ["curl", "-s", "https://swallowhomes.com/api/houses/芦屋市親王塚町一戸建て"],
    capture_output=True, text=True
)
data = json.loads(result.stdout)
old_content = data['content']

# 修复1: 替换旧域名为相对路径
old_domain = "https://swallow-homes-api.perriersuda.workers.dev"
new_content = old_content.replace(old_domain, "")

# 修复2: 修复换行问题
# Markdown 中单 \n 不会渲染为换行，需要在行尾加两个空格（<br>）
# 但 🌟 开头的行应该各自独占一行
lines = new_content.split('\n')
fixed_lines = []
for i, line in enumerate(lines):
    stripped = line.rstrip()
    # 对非空行且不是图片行的，在末尾加两个空格（Markdown <br>）
    if stripped and not stripped.startswith('![') and i < len(lines) - 1:
        # 如果下一行不是空行，加两个空格强制换行
        next_line = lines[i + 1].strip() if i + 1 < len(lines) else ''
        if next_line and not next_line.startswith('!['):
            fixed_lines.append(stripped + '  ')
        else:
            fixed_lines.append(stripped)
    else:
        fixed_lines.append(stripped)

new_content = '\n'.join(fixed_lines)

print("\n=== 芦屋 修复后内容预览 ===")
print(new_content[:500])
print("...")
img_count = new_content.count('![')
print(f"\n旧域名替换数: {old_content.count(old_domain)}")
print(f"图片数量: {img_count}")

# 转义 SQL 单引号
new_content_escaped = new_content.replace("'", "''")
ashiya_sql = f"UPDATE houses SET content='{new_content_escaped}' WHERE folder_name='芦屋市親王塚町一戸建て';"

# ============ 执行 SQL ============
print("\n=== 执行 Rita 更新 ===")
result1 = subprocess.run(
    ["wrangler", "d1", "execute", "swallow-homes-db", "--remote", "--command", rita_sql],
    capture_output=True, text=True,
    cwd="/Users/khalilfchen/With/20260617/yzke/HouseSite/worker"
)
print(result1.stdout[-200:] if result1.stdout else result1.stderr[-200:])

print("\n=== 执行 芦屋 更新 ===")
result2 = subprocess.run(
    ["wrangler", "d1", "execute", "swallow-homes-db", "--remote", "--command", ashiya_sql],
    capture_output=True, text=True,
    cwd="/Users/khalilfchen/With/20260617/yzke/HouseSite/worker"
)
print(result2.stdout[-200:] if result2.stdout else result2.stderr[-200:])

print("\n=== 完成 ===")
