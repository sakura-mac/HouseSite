/**
 * Cloudflare Pages Function — API 代理
 * 
 * 将 swallowhomes.com/api/* 请求转发到 Worker API
 * 同时把 Cloudflare Access 的 CF_Authorization cookie
 * 转为 Worker 能识别的 CF-Access-Jwt-Assertion header
 *
 * 这样 admin 前端（同域）的 API 调用自带 Access 鉴权，
 * 无需手动 token，也无需跨域。
 */

const WORKER_ORIGIN = 'https://swallow-homes-api.perriersuda.workers.dev';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // 构建目标 URL（保留 path + query）
  const targetUrl = WORKER_ORIGIN + url.pathname + url.search;

  // 克隆请求头
  const headers = new Headers(request.headers);

  // 从 Cookie 中提取 CF_Authorization（Cloudflare Access 的 JWT）
  const cookie = headers.get('Cookie') || '';
  const match = cookie.match(/CF_Authorization=([^;]+)/);
  if (match) {
    // cookie 值可能被 URL 编码，解码后作为 header 传递
    headers.set('CF-Access-Jwt-Assertion', decodeURIComponent(match[1]));
  }

  // 移除原始 Cookie 头，避免 Worker 端混淆
  headers.delete('Cookie');

  // 构建代理请求
  const init = {
    method: request.method,
    headers,
    redirect: 'manual',
  };

  // GET/HEAD 不传 body，其余方法透传 body（支持 JSON 和 FormData）
  if (!['GET', 'HEAD'].includes(request.method)) {
    init.body = request.body;
  }

  // 转发到 Worker 并返回响应
  const response = await fetch(targetUrl, init);
  return response;
}
