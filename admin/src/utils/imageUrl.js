/**
 * 构建图片完整 URL
 * 
 * 生产环境中 VITE_API_URL=/api，WORKER_URL 为空，
 * 导致图片走 Pages Function 代理时日文路径编码异常。
 * 
 * 解决方案：图片直接走 Worker 域名，不经过 Pages Function 代理，
 * 并对路径中的非 ASCII 字符做 encodeURI 编码。
 */

const FALLBACK_WORKER_URL = 'https://swallow-homes-api.perriersuda.workers.dev';

export function getImageUrl(cover) {
  if (!cover) return '';
  
  // 从 VITE_API_URL 推导 Worker 域名，推导失败则用硬编码 fallback
  const VITE_API_URL = import.meta.env.VITE_API_URL || '';
  let workerUrl = VITE_API_URL ? VITE_API_URL.replace(/\/api$/, '') : '';
  if (!workerUrl) workerUrl = FALLBACK_WORKER_URL;
  
  // cover 可能是 /api/images/xxx 或纯 key（houses/xxx/cover.webp）
  let path;
  if (cover.startsWith('/api/')) {
    path = cover;
  } else if (cover.startsWith('http')) {
    // 已经是完整 URL，直接返回
    return cover;
  } else {
    path = `/api/images/${cover}`;
  }
  
  // 对路径中的非 ASCII 字符（如日文）做编码
  return `${workerUrl}${encodeURI(path)}`;
}
