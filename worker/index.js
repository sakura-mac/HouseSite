/**
 * Swallow Homes CMS API - Cloudflare Worker
 * Routes: /api/houses, /api/blogs, /api/upload, /api/i18n, /api/settings
 */

// ============ 路由 ============
const router = {
  // --- 房源 ---
  'GET /api/houses': getHouses,
  'GET /api/houses/:id': getHouse,
  'POST /api/houses': createHouse,
  'PUT /api/houses/:id': updateHouse,
  'DELETE /api/houses/:id': deleteHouse,

  // --- 博客 ---
  'GET /api/blogs': getBlogs,
  'GET /api/blogs/:id': getBlog,
  'POST /api/blogs': createBlog,
  'PUT /api/blogs/:id': updateBlog,
  'DELETE /api/blogs/:id': deleteBlog,

  // --- 签证 ---
  'GET /api/visas': getVisas,
  'GET /api/visas/:id': getVisa,
  'POST /api/visas': createVisa,
  'PUT /api/visas/:id': updateVisa,
  'DELETE /api/visas/:id': deleteVisa,

  // --- 图片上传 ---
  'POST /api/upload': uploadImage,

  // --- 翻译 ---
  'GET /api/i18n/:lang': getI18n,
  'PUT /api/i18n/:lang': updateI18n,

  // --- 站点设置 ---
  'GET /api/settings': getSettings,
  'PUT /api/settings': updateSettings,

  // --- 仪表盘 ---
  'GET /api/dashboard': getDashboard,
};

// ============ 入口 ============
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;
    const method = request.method;

    // CORS
    if (method === 'OPTIONS') return corsResponse();

    // 图片代理：R2 读取
    if (pathname.startsWith('/api/images/')) {
      const key = decodeURIComponent(pathname.replace('/api/images/', ''));
      const object = await env.BUCKET.get(key);
      if (!object) return new Response('Not Found', { status: 404 });
      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      headers.set('Access-Control-Allow-Origin', '*');
      return new Response(object.body, { headers });
    }

    // 路由匹配
    const handler = matchRoute(method, pathname);
    if (!handler) {
      return json({ error: 'Not Found' }, 404);
    }

    try {
      // 写操作需要鉴权（GET 不需要）
      if (method !== 'GET') {
        const auth = checkAuth(request, env);
        if (!auth.ok) return json({ error: auth.error }, 401);
      }
      return await handler(request, env, ctx);
    } catch (err) {
      console.error('API Error:', err);
      return json({ error: err.message || 'Internal Server Error' }, 500);
    }
  },
};

// ============ 路由匹配 ============
function matchRoute(method, pathname) {
  // 精确匹配
  const exact = `${method} ${pathname}`;
  if (router[exact]) return router[exact];

  // 参数匹配 :id
  for (const [route, handler] of Object.entries(router)) {
    const [rMethod, rPath] = route.split(' ');
    if (rMethod !== method) continue;
    const pattern = rPath.replace(/:id/g, '([^/]+)');
    const regex = new RegExp(`^${pattern}$`);
    if (regex.test(pathname)) return handler;
  }
  return null;
}

// 从 URL 提取 id 参数（URL 解码以支持中文 folder_name）
function getId(request) {
  const parts = new URL(request.url).pathname.split('/');
  return decodeURIComponent(parts[parts.length - 1]);
}

// ============ 鉴权 ============
function checkAuth(request, env) {
  // Cloudflare Access 模式：检查 CF-Access-Jwt-Assertion
  const cfJwt = request.headers.get('CF-Access-Jwt-Assertion');
  if (cfJwt) return { ok: true };

  // 备选：Bearer token
  const auth = request.headers.get('Authorization');
  if (auth && auth.startsWith('Bearer ')) {
    const token = auth.slice(7);
    if (token === env.ADMIN_TOKEN) return { ok: true };
  }

  return { ok: false, error: 'Unauthorized' };
}

// ============ 工具函数 ============
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders() },
  });
}

function corsResponse() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, CF-Access-Jwt-Assertion',
  };
}

// 解析请求体 JSON
async function parseBody(request) {
  const text = await request.text();
  try { return JSON.parse(text); } catch { return {}; }
}

// 生成 slug（folder_name）
function slugify(text) {
  return text
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff-]/g, '')
    .toLowerCase();
}

// 从正文 content 中提取所有 R2 图片 key（/api/images/xxx → xxx）
function extractContentImages(content) {
  if (!content) return [];
  const keys = [];
  const regex = /\/api\/images\/([^\s)"'\]]+)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys.push(match[1]);
  }
  return keys;
}

// ============ 房源 CRUD ============
async function getHouses(request, env) {
  const url = new URL(request.url);
  const tag = url.searchParams.get('tag');
  const limit = parseInt(url.searchParams.get('limit') || '0');

  let sql = 'SELECT * FROM houses ORDER BY sort_order DESC, date DESC';
  let params = [];

  if (tag) {
    // tag 存在 JSON 数组中，用 LIKE 粗匹配
    sql = 'SELECT * FROM houses WHERE tags LIKE ? ORDER BY sort_order DESC, date DESC';
    params = [`%"${tag}"%`];
  }

  if (limit > 0) {
    sql += ` LIMIT ${limit}`;
  }

  const result = await env.DB.prepare(sql).bind(...params).all();
  const houses = result.results.map(h => ({
    ...h,
    tags: JSON.parse(h.tags || '[]'),
  }));
  return json(houses);
}

async function getHouse(request, env) {
  const id = getId(request);
  // 支持 id 或 folder_name 查询
  const result = await env.DB.prepare(
    'SELECT * FROM houses WHERE id = ? OR folder_name = ?'
  ).bind(id, id).first();

  if (!result) return json({ error: 'Not found' }, 404);

  return json({ ...result, tags: JSON.parse(result.tags || '[]') });
}

async function createHouse(request, env) {
  const body = await parseBody(request);
  const folderName = body.folder_name || slugify(body.title || 'untitled');

  const result = await env.DB.prepare(
    `INSERT INTO houses (folder_name, title, date, author, description, category, tags, content, cover, sort_order)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    folderName,
    body.title || '',
    body.date || new Date().toISOString().slice(0, 10),
    body.author || '',
    body.description || '',
    body.category || '',
    JSON.stringify(body.tags || []),
    body.content || '',
    body.cover || '',
    body.sort_order || 0
  ).run();

  return json({ id: result.meta.last_row_id, folder_name: folderName }, 201);
}

async function updateHouse(request, env) {
  const id = getId(request);
  const body = await parseBody(request);

  const fields = ['folder_name', 'title', 'date', 'author', 'description', 'category', 'tags', 'content', 'cover', 'sort_order'];
  const updates = [];
  const values = [];

  for (const f of fields) {
    if (body[f] !== undefined) {
      updates.push(`${f} = ?`);
      values.push(f === 'tags' ? JSON.stringify(body[f]) : body[f]);
    }
  }

  if (updates.length === 0) return json({ error: 'No fields to update' }, 400);

  updates.push("updated_at = datetime('now')");
  values.push(id);

  await env.DB.prepare(
    `UPDATE houses SET ${updates.join(', ')} WHERE id = ?`
  ).bind(...values).run();

  return json({ success: true });
}

async function deleteHouse(request, env) {
  const id = getId(request);
  // 获取 cover 和 content 用于清理 R2
  const house = await env.DB.prepare('SELECT cover, content FROM houses WHERE id = ?').bind(id).first();
  if (house) {
    if (house.cover) { try { await env.BUCKET.delete(house.cover); } catch {} }
    for (const key of extractContentImages(house.content)) {
      try { await env.BUCKET.delete(key); } catch {}
    }
  }
  await env.DB.prepare('DELETE FROM houses WHERE id = ?').bind(id).run();
  return json({ success: true });
}

// ============ 博客 CRUD（与房源同理） ============
async function getBlogs(request, env) {
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get('limit') || '0');

  let sql = 'SELECT * FROM blogs ORDER BY date DESC';
  if (limit > 0) sql += ` LIMIT ${limit}`;

  const result = await env.DB.prepare(sql).all();
  const blogs = result.results.map(b => ({
    ...b,
    tags: JSON.parse(b.tags || '[]'),
  }));
  return json(blogs);
}

async function getBlog(request, env) {
  const id = getId(request);
  const result = await env.DB.prepare(
    'SELECT * FROM blogs WHERE id = ? OR folder_name = ?'
  ).bind(id, id).first();

  if (!result) return json({ error: 'Not found' }, 404);
  return json({ ...result, tags: JSON.parse(result.tags || '[]') });
}

async function createBlog(request, env) {
  const body = await parseBody(request);
  const folderName = body.folder_name || slugify(body.title || 'untitled');

  const result = await env.DB.prepare(
    `INSERT INTO blogs (folder_name, title, date, author, description, category, tags, content, cover, sort_order)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    folderName,
    body.title || '',
    body.date || new Date().toISOString().slice(0, 10),
    body.author || '',
    body.description || '',
    body.category || '',
    JSON.stringify(body.tags || []),
    body.content || '',
    body.cover || '',
    body.sort_order || 0
  ).run();

  return json({ id: result.meta.last_row_id, folder_name: folderName }, 201);
}

async function updateBlog(request, env) {
  const id = getId(request);
  const body = await parseBody(request);

  const fields = ['folder_name', 'title', 'date', 'author', 'description', 'category', 'tags', 'content', 'cover', 'sort_order'];
  const updates = [];
  const values = [];

  for (const f of fields) {
    if (body[f] !== undefined) {
      updates.push(`${f} = ?`);
      values.push(f === 'tags' ? JSON.stringify(body[f]) : body[f]);
    }
  }

  if (updates.length === 0) return json({ error: 'No fields to update' }, 400);
  updates.push("updated_at = datetime('now')");
  values.push(id);

  await env.DB.prepare(
    `UPDATE blogs SET ${updates.join(', ')} WHERE id = ?`
  ).bind(...values).run();
  return json({ success: true });
}

async function deleteBlog(request, env) {
  const id = getId(request);
  const blog = await env.DB.prepare('SELECT cover, content FROM blogs WHERE id = ?').bind(id).first();
  if (blog) {
    if (blog.cover) { try { await env.BUCKET.delete(blog.cover); } catch {} }
    for (const key of extractContentImages(blog.content)) {
      try { await env.BUCKET.delete(key); } catch {}
    }
  }
  await env.DB.prepare('DELETE FROM blogs WHERE id = ?').bind(id).run();
  return json({ success: true });
}

// ============ 签证 CRUD ============
async function getVisas(request, env) {
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get('limit') || '0');

  let sql = 'SELECT * FROM visas ORDER BY date DESC';
  if (limit > 0) sql += ` LIMIT ${limit}`;

  const result = await env.DB.prepare(sql).all();
  const visas = result.results.map(v => ({
    ...v,
    tags: JSON.parse(v.tags || '[]'),
  }));
  return json(visas);
}

async function getVisa(request, env) {
  const id = getId(request);
  const result = await env.DB.prepare(
    'SELECT * FROM visas WHERE id = ? OR folder_name = ?'
  ).bind(id, id).first();

  if (!result) return json({ error: 'Not found' }, 404);
  return json({ ...result, tags: JSON.parse(result.tags || '[]') });
}

async function createVisa(request, env) {
  const body = await parseBody(request);
  const folderName = body.folder_name || slugify(body.title || 'untitled');

  const result = await env.DB.prepare(
    `INSERT INTO visas (folder_name, title, date, author, description, category, tags, content, cover, sort_order)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    folderName,
    body.title || '',
    body.date || new Date().toISOString().slice(0, 10),
    body.author || '',
    body.description || '',
    body.category || '',
    JSON.stringify(body.tags || []),
    body.content || '',
    body.cover || '',
    body.sort_order || 0
  ).run();

  return json({ id: result.meta.last_row_id, folder_name: folderName }, 201);
}

async function updateVisa(request, env) {
  const id = getId(request);
  const body = await parseBody(request);

  const fields = ['folder_name', 'title', 'date', 'author', 'description', 'category', 'tags', 'content', 'cover', 'sort_order'];
  const updates = [];
  const values = [];

  for (const f of fields) {
    if (body[f] !== undefined) {
      updates.push(`${f} = ?`);
      values.push(f === 'tags' ? JSON.stringify(body[f]) : body[f]);
    }
  }

  if (updates.length === 0) return json({ error: 'No fields to update' }, 400);
  updates.push("updated_at = datetime('now')");
  values.push(id);

  await env.DB.prepare(
    `UPDATE visas SET ${updates.join(', ')} WHERE id = ?`
  ).bind(...values).run();
  return json({ success: true });
}

async function deleteVisa(request, env) {
  const id = getId(request);
  const visa = await env.DB.prepare('SELECT cover, content FROM visas WHERE id = ?').bind(id).first();
  if (visa) {
    if (visa.cover) { try { await env.BUCKET.delete(visa.cover); } catch {} }
    for (const key of extractContentImages(visa.content)) {
      try { await env.BUCKET.delete(key); } catch {}
    }
  }
  await env.DB.prepare('DELETE FROM visas WHERE id = ?').bind(id).run();
  return json({ success: true });
}

// ============ 图片上传 ============
// 限制：仅接受 WebP 格式，最大 10MB
// 前端已通过 Canvas 压缩为 WebP，此处做二次校验拦截
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB

async function uploadImage(request, env) {
  const formData = await request.formData();
  const file = formData.get('file');
  const type = formData.get('type') || 'houses'; // houses | blogs
  const folderName = formData.get('folder_name') || 'misc';

  if (!file) return json({ error: 'No file provided' }, 400);

  // 格式校验：只接受 image/webp
  if (file.type !== 'image/webp') {
    return json({
      error: '仅支持 WebP 格式，前端已自动转换，请勿绕过前端直接调用 API',
    }, 400);
  }

  // 大小校验：限制 10MB
  if (file.size > MAX_IMAGE_SIZE) {
    return json({
      error: `图片过大(${(file.size / 1024 / 1024).toFixed(1)}MB)，请上传 10MB 以内的图片`,
    }, 400);
  }

  // 生成 R2 key: houses/xxx/image-1234.webp
  const ext = 'webp';
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^\w\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff.-]/g, '_');
  const r2Key = `${type}/${folderName}/${timestamp}-${safeName}`;

  await env.BUCKET.put(r2Key, file.stream(), {
    httpMetadata: { contentType: 'image/webp' },
    customMetadata: { originalSize: String(file.size) },
  });

  // 返回公网访问 URL（通过 Worker 代理）
  const publicUrl = `/api/images/${r2Key}`;

  return json({ url: publicUrl, key: r2Key, size: file.size }, 201);
}

// ============ 图片代理（R2 读取） ============
// 在 fetch 入口添加 /api/images/ 路由处理
// 此函数会在 matchRoute 之前处理
export async function handleImageProxy(request, env) {
  const url = new URL(request.url);
  if (!url.pathname.startsWith('/api/images/')) return null;

  const key = url.pathname.replace('/api/images/', '');
  const object = await env.BUCKET.get(key);

  if (!object) return new Response('Not Found', { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');

  return new Response(object.body, { headers });
}

// ============ 翻译 ============
async function getI18n(request, env) {
  const lang = getId(request);

  const result = await env.DB.prepare(
    'SELECT namespace, key, value FROM translations WHERE lang = ?'
  ).bind(lang).all();

  // 组装成嵌套对象
  const translations = {};
  for (const row of result.results) {
    const fullPath = row.namespace ? `${row.namespace}.${row.key}` : row.key;
    setNestedValue(translations, fullPath, row.value);
  }

  return json(translations);
}

async function updateI18n(request, env) {
  const lang = getId(request);
  const body = await parseBody(request);

  // 先删除旧数据
  await env.DB.prepare('DELETE FROM translations WHERE lang = ?').bind(lang).run();

  // 扁平化写入
  const flat = flattenObject(body);
  for (const [key, value] of Object.entries(flat)) {
    const parts = key.split('.');
    const ns = parts.length > 1 ? parts.slice(0, -1).join('.') : '';
    const k = parts[parts.length - 1];
    await env.DB.prepare(
      'INSERT INTO translations (lang, namespace, key, value) VALUES (?, ?, ?, ?)'
    ).bind(lang, ns, k, String(value)).run();
  }

  return json({ success: true });
}

// ============ 站点设置 ============
async function getSettings(request, env) {
  const result = await env.DB.prepare('SELECT key, value FROM settings').all();
  const settings = {};
  for (const row of result.results) {
    settings[row.key] = row.value;
  }
  return json(settings);
}

async function updateSettings(request, env) {
  const body = await parseBody(request);
  for (const [key, value] of Object.entries(body)) {
    await env.DB.prepare(
      'INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)'
    ).bind(key, String(value)).run();
  }
  return json({ success: true });
}

// ============ 仪表盘 ============
async function getDashboard(request, env) {
  const houses = await env.DB.prepare('SELECT COUNT(*) as count FROM houses').first();
  const blogs = await env.DB.prepare('SELECT COUNT(*) as count FROM blogs').first();
  const visas = await env.DB.prepare('SELECT COUNT(*) as count FROM visas').first();

  // 各标签数量
  const tagStats = await env.DB.prepare(
    `SELECT tags FROM houses`
  ).all();

  const tagCounts = {};
  for (const row of tagStats.results) {
    const tags = JSON.parse(row.tags || '[]');
    for (const t of tags) {
      tagCounts[t] = (tagCounts[t] || 0) + 1;
    }
  }

  // 最近更新
  const recent = await env.DB.prepare(
    'SELECT id, title, updated_at FROM houses ORDER BY updated_at DESC LIMIT 5'
  ).all();

  return json({
    houseCount: houses.count,
    blogCount: blogs.count,
    visaCount: visas.count,
    tagCounts,
    recentHouses: recent.results,
  });
}

// ============ 工具：对象扁平化/嵌套化 ============
function flattenObject(obj, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(result, flattenObject(value, path));
    } else {
      result[path] = Array.isArray(value) ? JSON.stringify(value) : value;
    }
  }
  return result;
}

function setNestedValue(obj, path, value) {
  const parts = path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}
