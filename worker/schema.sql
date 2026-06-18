-- D1 Schema for Swallow Homes CMS
-- Run: npx wrangler d1 execute swallow-homes-db --file=worker/schema.sql

-- 房源表
CREATE TABLE IF NOT EXISTS houses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  folder_name TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  author TEXT DEFAULT '',
  description TEXT DEFAULT '',
  category TEXT DEFAULT '',
  tags TEXT DEFAULT '[]',      -- JSON array, e.g. ["selling","owned"]
  content TEXT DEFAULT '',      -- Markdown body (without frontmatter)
  cover TEXT DEFAULT '',        -- R2 key for cover image, e.g. houses/xxx/cover.webp
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- 博客表
CREATE TABLE IF NOT EXISTS blogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  folder_name TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  author TEXT DEFAULT '',
  description TEXT DEFAULT '',
  category TEXT DEFAULT '',
  tags TEXT DEFAULT '[]',
  content TEXT DEFAULT '',
  cover TEXT DEFAULT '',
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- 翻译表
CREATE TABLE IF NOT EXISTS translations (
  lang TEXT NOT NULL,
  namespace TEXT NOT NULL DEFAULT '',
  key TEXT NOT NULL,
  value TEXT DEFAULT '',
  PRIMARY KEY (lang, namespace, key)
);

-- 站点设置表
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT DEFAULT ''
);

-- 管理员表（备用，Cloudflare Access 开启后可不依赖此表）
CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

-- 索引
CREATE INDEX IF NOT EXISTS idx_houses_tags ON houses(tags);
CREATE INDEX IF NOT EXISTS idx_houses_sort ON houses(sort_order DESC);
CREATE INDEX IF NOT EXISTS idx_blogs_sort ON blogs(sort_order DESC);
