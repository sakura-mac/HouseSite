import { message } from 'antd';
import { uploadApi } from '../api';

/**
 * Markdown 编辑器拖拽 / 粘贴图片上传 Hook
 *
 * 流程：接受图片 → compressToWebP 压缩 → 上传到 R2 → 返回相对路径插入 Markdown
 *
 * 注意：插入 Markdown 正文时必须用相对路径 /api/images/...，
 * 这样前端网站和后台预览都能通过各自代理正确加载图片。
 *
 * @param {string} type - 'houses' | 'blogs' | 'visas'
 * @param {function} getFolderName - 获取当前 folder_name 的函数
 * @returns {{ handleDrop, handlePaste, uploadSingle }}
 */
export function useMarkdownUpload(type, getFolderName) {
  const uploadSingle = async (file) => {
    const folderName = getFolderName() || 'misc';
    const hide = message.loading('正在压缩并上传图片...', 0);
    try {
      const res = await uploadApi.upload(file, type, folderName);
      hide();
      message.success(`图片上传成功（WebP, ${(res.size / 1024).toFixed(0)}KB）`);
      return `/api/images/${encodeURI(res.key)}`;
    } catch (err) {
      hide();
      message.error(err.error || '图片上传失败');
      return null;
    }
  };

  /**
   * 拖拽上传：插入到 content 末尾
   * 用法：onDrop={(e) => handleDrop(e, content, setContent)}
   */
  const handleDrop = async (e, content, setContent) => {
    const files = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith('image/')
    );
    if (files.length === 0) return;

    e.preventDefault();
    e.stopPropagation();

    for (const file of files) {
      const url = await uploadSingle(file);
      if (url) {
        const markdown = `\n![${file.name.replace(/\.[^.]+$/, '')}](${url})\n`;
        setContent((prev) => prev + markdown);
      }
    }
  };

  /**
   * 粘贴上传：检测剪贴板中的图片
   * 用法：onPaste={(e) => handlePaste(e, content, setContent)}
   */
  const handlePaste = async (e, content, setContent) => {
    const items = Array.from(e.clipboardData?.items || []).filter((i) =>
      i.type.startsWith('image/')
    );
    if (items.length === 0) return;

    e.preventDefault();
    e.stopPropagation();

    for (const item of items) {
      const file = item.getAsFile();
      if (!file) continue;
      const url = await uploadSingle(file);
      if (url) {
        const markdown = `\n![图片](${url})\n`;
        setContent((prev) => prev + markdown);
      }
    }
  };

  return { handleDrop, handlePaste, uploadSingle };
}
