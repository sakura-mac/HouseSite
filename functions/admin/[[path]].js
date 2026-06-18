/**
 * Cloudflare Pages Function — Admin SPA 路由
 *
 * 处理 /admin/* 下的所有非静态资源请求，
 * 统一返回 /admin/index.html，让 React Router 在前端处理路由。
 * 静态资源（js/css/图片等）直接由 ASSETS 绑定提供。
 */

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // 静态资源直接透传给 ASSETS
  if (path.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot|map)$/)) {
    return env.ASSETS.fetch(request);
  }

  // 其余 /admin/* 路径一律返回 index.html（SPA fallback）
  const newUrl = new URL(request.url);
  newUrl.pathname = '/admin/index.html';
  return env.ASSETS.fetch(new Request(newUrl, request));
}
