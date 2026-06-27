#!/bin/bash
set -e

# Rita Hotel Namba 图片批量上传脚本
# 1. JPG → WebP 转换
# 2. wrangler r2 object put 上传到 R2
# 3. 输出 R2 key 列表供后续更新 cover 字段

SRC_DIR="$HOME/Downloads/swallowhomes/rita"
BUCKET="swallow-homes-images"
R2_PREFIX="houses/Rita Hotel Namba"
TMP_DIR="/tmp/rita-webp"

mkdir -p "$TMP_DIR"

echo "=== 1. 转换 JPG → WebP ==="
i=1
for f in "$SRC_DIR"/*.jpg; do
  [ -f "$f" ] || continue
  base=$(basename "$f" .jpg)
  out="$TMP_DIR/rita-${i}.webp"
  echo "  转换: $base → rita-${i}.webp"
  cwebp -q 85 -resize 1920 0 "$f" -o "$out" 2>/dev/null
  echo "    大小: $(du -h "$out" | cut -f1)"
  i=$((i+1))
done

echo ""
echo "=== 2. 上传到 R2 ==="
cd /Users/khalilfchen/With/20260617/yzke/HouseSite/worker
for f in "$TMP_DIR"/*.webp; do
  fname=$(basename "$f")
  r2key="${R2_PREFIX}/${fname}"
  echo "  上传: $fname → $r2key"
  wrangler r2 object put "$BUCKET/$r2key" --file "$f" --contentType "image/webp" 2>&1 | grep -v "^$\|remote\|⣿\|⠁\|⠉\|⠙\|⠹\|⠸\|⠼\|⠤\|⠦\|⠧\|⠇\|⠏"
done

echo ""
echo "=== 3. 完成 ==="
echo "R2 keys:"
for f in "$TMP_DIR"/*.webp; do
  fname=$(basename "$f")
  echo "  houses/Rita Hotel Namba/${fname}"
done