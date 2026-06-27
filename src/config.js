// API 基础地址
// 开发环境可通过 REACT_APP_API_URL 覆盖
// 生产环境通过同域 Pages Function 代理（/api/*）
export const API_BASE =
  process.env.REACT_APP_API_URL || 'https://swallow-homes-api.perriersuda.workers.dev';

/**
 * 获取房源封面图 URL
 * - 旧数据（静态文件）：cover 字段为空，回退到 /house/{folder_name}/cover.webp
 * - 新数据（R2 上传）：cover 字段为 /api/images/... 路径，拼接 API_BASE
 */
export function getCoverUrl(item, type = 'house') {
  if (item.cover) {
    if (item.cover.startsWith('/api/')) return `${API_BASE}${item.cover}`;
    if (item.cover.startsWith('http')) return item.cover;
    // 纯 R2 key（如 houses/xxx/123.webp），拼接 /api/images/ 前缀
    return `${API_BASE}/api/images/${encodeURI(item.cover)}`;
  }
  const dirMap = { blog: 'blogs', visa: 'visas', house: 'house' };
  const dir = dirMap[type] || 'house';
  return `/${dir}/${item.folder_name}/cover.webp`;
}

/**
 * 获取详情页正文中的图片 URL
 * - 旧内容：相对路径 ./xxx.webp → /house/{folder_name}/xxx.webp
 * - 新内容：/api/images/... → 拼接 API_BASE
 */
export function getContentImageUrl(src, folderName, type = 'house') {
  if (!src) return src;
  if (src.startsWith('/api/')) return `${API_BASE}${src}`;
  if (src.startsWith('http')) return src;
  const dirMap = { blog: 'blogs', visa: 'visas', house: 'house' };
  const dir = dirMap[type] || 'house';
  // 去掉 ./
  const cleanSrc = src.replace(/^\.\//, '');
  return `/${dir}/${folderName}/${cleanSrc}`;
}
