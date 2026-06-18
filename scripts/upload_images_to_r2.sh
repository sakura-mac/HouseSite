#!/bin/bash
# 批量上传本地图片到 Cloudflare R2
# 路径规则: house/{folderName}/{filename}, blogs/{folderName}/{filename}

set -e

BUCKET="swallow-homes-images"
HOUSE_DIR="public/house"
BLOGS_DIR="public/blogs"
count=0
fail=0

upload_file() {
  local file="$1"
  local r2_key="$2"
  local content_type="image/jpeg"
  case "${file##*.}" in
    webp|WEBP) content_type="image/webp" ;;
    png|PNG) content_type="image/png" ;;
    jpg|JPG|jpeg|JPEG) content_type="image/jpeg" ;;
    gif|GIF) content_type="image/gif" ;;
  esac

  if npx wrangler r2 object put "${BUCKET}/${r2_key}" --file="${file}" --content-type="${content_type}" --remote 2>/dev/null; then
    count=$((count + 1))
    if [ $((count % 20)) -eq 0 ]; then
      echo "  已上传 ${count} 张..."
    fi
  else
    fail=$((fail + 1))
    echo "  ❌ 失败: ${r2_key}"
  fi
}

echo "🚀 开始上传房源图片到 R2..."

# 上传房源图片
for folder in "$HOUSE_DIR"/*/; do
  folder_name=$(basename "$folder")
  # 跳过非目录
  [ -d "$folder" ] || continue
  for img in "$folder"*.jpg "$folder"*.jpeg "$folder"*.png "$folder"*.webp "$folder"*.JPG "$folder"*.PNG; do
    [ -f "$img" ] || continue
    filename=$(basename "$img")
    r2_key="house/${folder_name}/${filename}"
    upload_file "$img" "$r2_key"
  done
done

echo "🚀 开始上传博客图片到 R2..."

# 上传博客图片
for folder in "$BLOGS_DIR"/*/; do
  folder_name=$(basename "$folder")
  [ -d "$folder" ] || continue
  for img in "$folder"*.jpg "$folder"*.jpeg "$folder"*.png "$folder"*.webp "$folder"*.JPG "$folder"*.PNG; do
    [ -f "$img" ] || continue
    filename=$(basename "$img")
    r2_key="blogs/${folder_name}/${filename}"
    upload_file "$img" "$r2_key"
  done
done

echo ""
echo "✅ 完成！成功: ${count} 张, 失败: ${fail} 张"
