#!/usr/bin/env node
/**
 * 数据迁移脚本：将现有的 house-list.json + Markdown 导入 D1
 * 
 * 用法:
 *   npx wrangler d1 execute swallow-homes-db --local --file=worker/schema.sql
 *   node worker/migrate-data.js
 *
 * 前置条件:
 *   1. 已执行 schema.sql 创建表
 *   2. wrangler.toml 中 database_id 已填写
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const HOUSE_DIR = path.join(__dirname, '..', 'public', 'house');
const HOUSE_LIST = path.join(HOUSE_DIR, 'house-list.json');
const BLOG_DIR = path.join(__dirname, '..', 'public', 'blogs');
const BLOG_LIST = path.join(BLOG_DIR, 'blog-list.json');
const I18N_DIR = path.join(__dirname, '..', 'src', 'i18n', 'locales');

// 生成 SQL INSERT 语句
function escapeSQL(str) {
  if (!str) return "''";
  return "'" + String(str).replace(/'/g, "''") + "'";
}

function migrateHouses() {
  const list = JSON.parse(fs.readFileSync(HOUSE_LIST, 'utf-8'));
  const sql = [];

  for (const house of list) {
    const mdPath = path.join(HOUSE_DIR, house.folderName, 'index.md');
    let content = '';
    if (fs.existsSync(mdPath)) {
      const parsed = matter(fs.readFileSync(mdPath, 'utf-8'));
      content = parsed.content.trim();
    }

    sql.push(
      `INSERT INTO houses (folder_name, title, date, author, description, category, tags, content, cover, sort_order)
       VALUES (
         ${escapeSQL(house.folderName)},
         ${escapeSQL(house.title)},
         ${escapeSQL(house.date)},
         ${escapeSQL(house.author)},
         ${escapeSQL(house.description)},
         ${escapeSQL(house.category || '')},
         ${escapeSQL(JSON.stringify(house.tags || []))},
         ${escapeSQL(content)},
         ${escapeSQL(house.cover || '')},
         0
       );`
    );
  }

  return sql.join('\n');
}

function migrateBlogs() {
  if (!fs.existsSync(BLOG_LIST)) {
    console.log('No blog-list.json found, skipping blogs.');
    return '';
  }

  const list = JSON.parse(fs.readFileSync(BLOG_LIST, 'utf-8'));
  const sql = [];

  for (const blog of list) {
    const mdPath = path.join(BLOG_DIR, blog.folderName, 'index.md');
    let content = '';
    if (fs.existsSync(mdPath)) {
      const parsed = matter(fs.readFileSync(mdPath, 'utf-8'));
      content = parsed.content.trim();
    }

    sql.push(
      `INSERT INTO blogs (folder_name, title, date, author, description, category, tags, content, cover, sort_order)
       VALUES (
         ${escapeSQL(blog.folderName)},
         ${escapeSQL(blog.title)},
         ${escapeSQL(blog.date)},
         ${escapeSQL(blog.author)},
         ${escapeSQL(blog.description)},
         ${escapeSQL(blog.category || '')},
         ${escapeSQL(JSON.stringify(blog.tags || []))},
         ${escapeSQL(content)},
         ${escapeSQL(blog.cover || '')},
         0
       );`
    );
  }

  return sql.join('\n');
}

function migrateI18n() {
  const sql = [];
  const langs = ['zh', 'ja'];

  for (const lang of langs) {
    const filePath = path.join(I18N_DIR, `${lang}.json`);
    if (!fs.existsSync(filePath)) continue;

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const flat = flattenObject(data, '');

    for (const [key, value] of Object.entries(flat)) {
      const parts = key.split('.');
      const ns = parts.length > 1 ? parts.slice(0, -1).join('.') : '';
      const k = parts[parts.length - 1];
      sql.push(
        `INSERT INTO translations (lang, namespace, key, value) VALUES (
          ${escapeSQL(lang)},
          ${escapeSQL(ns)},
          ${escapeSQL(k)},
          ${escapeSQL(String(value))}
        );`
      );
    }
  }

  return sql.join('\n');
}

function flattenObject(obj, prefix) {
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

// 生成完整 SQL
const sql = `
-- Migrated at: ${new Date().toISOString()}

-- 房源数据
${migrateHouses()}

-- 博客数据
${migrateBlogs()}

-- 翻译数据
${migrateI18n()}
`;

const outputPath = path.join(__dirname, 'migrate-data.sql');
fs.writeFileSync(outputPath, sql, 'utf-8');
console.log(`✅ 迁移 SQL 已生成: ${outputPath}`);
console.log('   执行命令: npx wrangler d1 execute swallow-homes-db --local --file=worker/migrate-data.sql');
