# Swallow Homes 后台管理系统 — 部署指南

## 架构总览

```
前台网站 (Cloudflare Pages)  →  读取  →  Worker API  →  D1 数据库
后台管理 (Cloudflare Pages)  →  调用  →  Worker API  →  R2 图片存储
Cloudflare Access            →  保护  →  /admin 路径
```

## 一、创建 Cloudflare 资源

### 1. 创建 D1 数据库

```bash
# 安装 wrangler
npm install -g wrangler

# 登录
wrangler login

# 创建数据库
wrangler d1 create swallow-homes-db
```

创建后会输出 `database_id`，复制它填入 `worker/wrangler.toml`：

```toml
[[d1_databases]]
binding = "DB"
database_name = "swallow-homes-db"
database_id = "你的database_id"  ← 替换这里
```

### 2. 初始化数据库表

```bash
wrangler d1 execute swallow-homes-db --remote --file=worker/schema.sql
```

### 3. 迁移现有数据

```bash
# 生成迁移 SQL
node worker/migrate-data.js

# 执行迁移（先本地测试）
wrangler d1 execute swallow-homes-db --local --file=worker/migrate-data.sql

# 确认无误后，执行到远程
wrangler d1 execute swallow-homes-db --remote --file=worker/migrate-data.sql
```

### 4. 创建 R2 存储桶

```bash
wrangler r2 bucket create swallow-homes-images
```

### 5. 设置环境变量

```bash
# 设置管理密钥（备选方案，Cloudflare Access 开启后可不依赖）
wrangler secret put ADMIN_TOKEN
# 输入一个足够复杂的随机字符串
```

## 二、部署 Worker API

```bash
cd worker
wrangler deploy
```

部署后会得到一个 URL，如 `https://swallow-homes-api.your-account.workers.dev`。

## 三、配置 Cloudflare Access（邮箱验证码登录）

1. 进入 Cloudflare Dashboard → Zero Trust → Access → Applications
2. 点击 "Add Application" → "Self-hosted"
3. 填写：
   - Application name: `Swallow Homes Admin`
   - Session duration: `24 hours`
   - Application domain: `你的后台域名/admin/*`
4. 配置 Policy：
   - Policy name: `Admin Access`
   - Action: `Allow`
   - Include: `Emails` → 添加内容编辑员的邮箱
5. 配置 Identity Provider：
   - 选择 "One-time PIN"（邮箱验证码）
   - 保存

配好后，访问 `/admin` 会先跳到 Cloudflare 登录页，输入邮箱收到验证码后才能进入。

## 四、部署后台管理前端

### 本地开发

```bash
cd admin
npm install
npm run dev
# 访问 http://localhost:3001
```

### 部署到 Cloudflare Pages

1. 在 Cloudflare Dashboard → Pages → Create a project
2. 连接 GitHub 仓库
3. 配置构建：
   - Framework preset: `Vite`
   - Build command: `cd admin && npm install && npm run build`
   - Build output: `admin/dist`
   - Root directory: `/`
4. 环境变量：
   - `VITE_API_URL` = `https://swallow-homes-api.your-account.workers.dev`
5. 部署

## 五、前台对接 API

前台需要从本地 JSON 文件改为从 Worker API 读取数据。需要修改的文件：

### 1. NewsPart (房源列表)

```jsx
// 之前
const response = await fetch('/house/house-list.json');

// 之后
const response = await fetch(`${API_URL}/api/houses`);
```

### 2. 房源详情页

```jsx
// 之前
const filePath = `${process.env.PUBLIC_URL}/house/${folderName}/index.md`;
const response = await fetch(filePath);
const text = await response.text();

// 之后
const response = await fetch(`${API_URL}/api/houses/${folderName}`);
const data = await response.json();
setContent(data.content);
```

### 3. 图片路径

```jsx
// 之前
<img src={`/house/${house.folderName}/cover.webp`} />

// 之后
<img src={`${API_URL}/api/images/${house.cover}`} />
```

## 六、完整启动流程

### 本地开发（三个终端）

```bash
# 终端 1: 前台
npm start

# 终端 2: Worker API
cd worker && wrangler dev

# 终端 3: 后台管理
cd admin && npm run dev
```

### 生产部署

1. 前台：推送到 GitHub → Cloudflare Pages 自动构建
2. 后台管理：推送到 GitHub → Cloudflare Pages 自动构建
3. Worker API：`cd worker && wrangler deploy`

## 七、日常使用流程（内容编辑员）

1. 打开 `https://你的域名/admin`
2. 输入邮箱 → 收到验证码 → 填入登录
3. 点击「房源管理」→「新增房源」
4. 填写标题、描述、选择标签
5. 上传封面图
6. 在 Markdown 编辑器中写正文，拖拽图片直接插入
7. 点击「创建房源」
8. 前台立即更新，无需等待构建
