#!/usr/bin/env python3
"""
修复所有房源 content 中残留的旧域名图片URL
旧域名: https://swallow-homes-api.perriersuda.workers.dev
新路径: 相对路径 (去掉域名前缀)
"""
import json
import subprocess

OLD_DOMAIN = "https://swallow-homes-api.perriersuda.workers.dev"

# 获取所有房源
result = subprocess.run(
    ["curl", "-s", "https://swallowhomes.com/api/houses"],
    capture_output=True, text=True
)
houses = json.loads(result.stdout)

fixed_count = 0
for h in houses:
    content = h.get('content', '')
    if OLD_DOMAIN not in content:
        continue
    
    folder_name = h['folder_name']
    new_content = content.replace(OLD_DOMAIN, "")
    
    # 转义SQL单引号
    new_content_escaped = new_content.replace("'", "''")
    folder_escaped = folder_name.replace("'", "''")
    
    sql = f"UPDATE houses SET content='{new_content_escaped}' WHERE folder_name='{folder_escaped}';"
    
    print(f"修复: {folder_name}")
    
    result = subprocess.run(
        ["wrangler", "d1", "execute", "swallow-homes-db", "--remote", "--command", sql],
        capture_output=True, text=True,
        cwd="/Users/khalilfchen/With/20260617/yzke/HouseSite/worker"
    )
    
    if result.returncode == 0:
        fixed_count += 1
        print(f"  ✅ 成功")
    else:
        print(f"  ❌ 失败: {result.stderr[-100:]}")

print(f"\n共修复 {fixed_count} 个房源")
