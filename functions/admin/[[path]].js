/**
 * Cloudflare Pages Function — Admin SPA 路由
 *
 * 处理 /admin/* 下的所有非静态资源请求，
 * 统一返回 /admin/index.html，让 React Router 在前端处理路由。
 *
 * 关键修复（对比上次 308 死循环）：
 * 1. 使用 redirect: 'follow' 让 ASSETS 内部重定向在 Worker 内解决，不返回给浏览器
 * 2. 始终返回 new Response(status: 200)，浏览器永远不会看到 308
 * 3. env.ASSETS.fetch 绕过 Functions 路由层，不会再次触发本 Function
 */

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // 静态资源直接透传给 ASSETS
  if (/\.(js|css|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot|map|json)$/.test(path)) {
    return env.ASSETS.fetch(request);
  }

  // SPA fallback：获取 /admin/index.html 内容
  // redirect: 'follow' 确保 ASSETS 的内部 308 在 Worker 内被跟随
  const assetResponse = await env.ASSETS.fetch(
    new Request(new URL('/admin/index.html', url.origin), {
      method: 'GET',
      redirect: 'follow',
    })
  );

  // 始终返回 200，浏览器不会看到任何重定向
  return new Response(assetResponse.body, {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}
