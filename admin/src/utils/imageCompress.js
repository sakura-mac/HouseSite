/**
 * 浏览器端图片压缩工具
 * 使用 Canvas API 将任意图片格式转为 WebP
 * 大幅减小文件体积，节省 R2 存储和读取带宽
 */

/**
 * 压缩图片为 WebP 格式
 * @param {File} file - 原始图片文件
 * @param {Object} options - 压缩选项
 * @param {number} options.maxWidth - 最大宽度(默认1920)
 * @param {number} options.maxHeight - 最大高度(默认1920)
 * @param {number} options.quality - 压缩质量0~1(默认0.85)
 * @returns {Promise<File>} 压缩后的 WebP File 对象
 */
export async function compressToWebP(file, options = {}) {
  const { maxWidth = 1920, maxHeight = 1920, quality = 0.85 } = options;

  // 已经是 WebP 且小于 500KB，不再压缩
  if (file.type === 'image/webp' && file.size < 500 * 1024) {
    return file;
  }

  // 读取图片
  const img = await loadImage(file);

  // 计算缩放尺寸
  let { width, height } = img;
  if (width > maxWidth || height > maxHeight) {
    const ratio = Math.min(maxWidth / width, maxHeight / height);
    width = Math.round(width * ratio);
    height = Math.round(height * ratio);
  }

  // Canvas 绘制并导出 WebP
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, width, height);

  const blob = await new Promise((resolve) => {
    canvas.toBlob(resolve, 'image/webp', quality);
  });

  // 生成文件名：去掉原扩展名，加 .webp
  const baseName = file.name.replace(/\.[^.]+$/, '');
  const webpFile = new File([blob], `${baseName}.webp`, {
    type: 'image/webp',
    lastModified: Date.now(),
  });

  return webpFile;
}

/**
 * 加载 File 为 HTMLImageElement
 */
function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = (e) => {
      URL.revokeObjectURL(url);
      reject(new Error('图片加载失败'));
    };
    img.src = url;
  });
}

/**
 * 获取文件大小的可读格式
 */
export function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}
