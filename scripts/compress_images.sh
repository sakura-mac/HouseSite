#!/bin/bash
# Compress all house images and large banner images to WebP
set -e

echo "=== Compressing house images ==="
find public/house -name "*.jpg" -o -name "*.JPG" -o -name "*.png" -o -name "*.jpeg" | while read img; do
  webp="${img%.*}.webp"
  # Skip if webp already exists and is newer
  if [ -f "$webp" ] && [ "$webp" -nt "$img" ]; then
    continue
  fi
  cwebp -quiet -q 80 -resize 1920 0 "$img" -o "$webp" 2>/dev/null && echo "  OK: $webp" || echo "  SKIP: $img"
done

echo "=== Compressing banner images ==="
for img in public/assets/images/banner1.png public/assets/images/banner1.jpg; do
  if [ -f "$img" ]; then
    webp="${img%.*}.webp"
    cwebp -quiet -q 80 -resize 1920 0 "$img" -o "$webp" 2>/dev/null && echo "  OK: $webp" || echo "  SKIP: $img"
  fi
done

echo "=== Compressing other large images ==="
find public/assets/images -name "*.jpg" -o -name "*.JPG" -o -name "*.png" | while read img; do
  webp="${img%.*}.webp"
  if [ -f "$webp" ] && [ "$webp" -nt "$img" ]; then
    continue
  fi
  cwebp -quiet -q 80 -resize 1920 0 "$img" -o "$webp" 2>/dev/null && echo "  OK: $webp" || echo "  SKIP: $img"
done

echo "=== Done ==="
