#!/usr/bin/env node
/**
 * 交互式添加房源脚本
 * 用法: npm run add-house
 * 会自动完成: 建文件夹 → 生成 index.md → 注册到 house-list.json → 压缩图片
 */
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

const HOUSE_DIR = path.join(__dirname, '..', 'public', 'house');
const LIST_FILE = path.join(HOUSE_DIR, 'house-list.json');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const question = (q) => new Promise((resolve) => rl.question(q, resolve));

const TAG_OPTIONS = [
  { key: 'selling', label: '在售房源 / 販売中' },
  { key: 'managed', label: '在管房源 / 管理物件' },
  { key: 'sold', label: '成交案例 / 成約実績' },
  { key: 'owned', label: '自有房源 / 所有物件' },
];

async function main() {
  console.log('\n🏠 添加新房源\n');

  // 1. 基本信息
  const title = (await question('房源标题: ')).trim();
  if (!title) { console.log('标题不能为空'); rl.close(); return; }

  const author = (await question('作者 (默认: 李 小燕): ')).trim() || '李 小燕';

  const description = (await question('一句话描述: ')).trim();

  // 2. 选 tags
  console.log('\n选择标签 (输入序号，逗号分隔，如 1,4):');
  TAG_OPTIONS.forEach((t, i) => console.log(`  ${i + 1}. ${t.label}`));
  const tagInput = (await question('选择: ')).trim();
  const selectedTags = tagInput
    .split(/[,，\s]+/)
    .map((s) => parseInt(s, 10))
    .filter((n) => n >= 1 && n <= TAG_OPTIONS.length)
    .map((n) => TAG_OPTIONS[n - 1].key);

  // 默认加 owned
  if (!selectedTags.includes('owned')) {
    selectedTags.push('owned');
  }

  // 3. 图片文件夹
  const imgPath = (await question('\n图片所在文件夹路径 (拖入终端即可，留空则跳过): ')).trim().replace(/['"]/g, '');

  // 4. folderName
  const folderName = (await question(`文件夹名 (默认: ${title}): `)).trim() || title;

  const houseDir = path.join(HOUSE_DIR, folderName);

  // 检查是否已存在
  if (fs.existsSync(houseDir)) {
    console.log(`\n⚠️  文件夹已存在: ${houseDir}`);
    const overwrite = (await question('覆盖? (y/N): ')).trim().toLowerCase();
    if (overwrite !== 'y') { console.log('已取消'); rl.close(); return; }
    fs.rmSync(houseDir, { recursive: true, force: true });
  }

  // 5. 创建文件夹
  fs.mkdirSync(houseDir, { recursive: true });

  // 6. 复制图片
  let coverName = 'cover.jpg';
  if (imgPath && fs.existsSync(imgPath)) {
    const files = fs.readdirSync(imgPath).filter((f) => /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(f));
    if (files.length > 0) {
      // 第一张作为 cover
      coverName = `cover${path.extname(files[0])}`;
      files.forEach((f) => {
        fs.copyFileSync(path.join(imgPath, f), path.join(houseDir, f));
      });
      // 重命名第一张为 cover
      const firstExt = path.extname(files[0]);
      const coverSrc = path.join(houseDir, files[0]);
      const coverDst = path.join(houseDir, `cover${firstExt}`);
      if (files[0] !== `cover${firstExt}`) {
        fs.renameSync(coverSrc, coverDst);
      }
      coverName = `cover${firstExt}`;
      console.log(`  ✅ 复制了 ${files.length} 张图片`);
    }
  }

  // 7. 生成 index.md
  const date = new Date().toISOString().slice(0, 10);
  const otherImages = imgPath && fs.existsSync(imgPath)
    ? fs.readdirSync(houseDir)
        .filter((f) => /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(f) && f !== coverName)
    : [];

  const mdContent = `---
title: "${title}"
date: "${date}"
author: "${author}"
category: ""
tags: ${JSON.stringify(selectedTags.filter((t) => !['selling', 'managed', 'sold', 'owned'].includes(t)))}
description: "${description}"
---

# ${title}

![](./${coverName})

${description}

${otherImages.map((f) => `![](./${f})`).join('\n\n')}
`;

  fs.writeFileSync(path.join(houseDir, 'index.md'), mdContent, 'utf-8');
  console.log('  ✅ 生成 index.md');

  // 8. 注册到 house-list.json
  const list = JSON.parse(fs.readFileSync(LIST_FILE, 'utf-8'));
  list.unshift({
    folderName,
    title,
    date,
    author,
    tags: selectedTags,
    category: '',
    description,
    url: `/house/${folderName}/index.md`,
  });
  fs.writeFileSync(LIST_FILE, JSON.stringify(list, null, 2) + '\n', 'utf-8');
  console.log('  ✅ 注册到 house-list.json');

  // 9. 压缩图片
  if (imgPath) {
    console.log('\n  🔄 压缩图片为 WebP...');
    try {
      execSync('bash scripts/compress_images.sh', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
    } catch (e) {
      console.log('  ⚠️  压缩失败，可稍后手动运行: bash scripts/compress_images.sh');
    }
  }

  console.log(`\n🎉 完成！房源「${title}」已添加。`);
  console.log(`   文件夹: public/house/${folderName}/`);
  console.log(`   预览: http://localhost:3000/house-details/${folderName}`);
  rl.close();
}

main().catch((err) => { console.error(err); rl.close(); });
