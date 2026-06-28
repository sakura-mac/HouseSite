import React from 'react';

/**
 * 自定义 MDEditor 命令：上传图片按钮
 * 点击后打开文件选择器，选中的图片自动压缩为 WebP 上传到 R2，
 * 然后将 Markdown 图片语法插入到编辑器光标位置。
 *
 * @param {function} uploadSingle - 上传单张图片，返回 URL
 * @param {function} setContent   - MDEditor 的 setContent 状态更新函数
 */
export function createUploadImageCommand({ uploadSingle, setContent }) {
  return {
    name: 'uploadImage',
    keyCommand: 'uploadImage',
    buttonProps: {
      'aria-label': '上传图片',
      title: '上传图片（自动转 WebP）',
    },
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    execute: (state, api) => {
      const pos = state.selection.start;
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.multiple = true;
      input.onchange = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;
        let allMarkdown = '';
        for (const file of files) {
          const url = await uploadSingle(file);
          if (url) {
            const name = file.name.replace(/\.[^.]+$/, '');
            allMarkdown += `\n![${name}](${url})\n`;
          }
        }
        if (allMarkdown) {
          setContent((prev) => prev.slice(0, pos) + allMarkdown + prev.slice(pos));
        }
      };
      input.click();
    },
  };
}
