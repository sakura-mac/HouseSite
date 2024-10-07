const fs = require('fs');
const path = require('path');

// 定义图片文件夹路径和 index.md 文件路径
const imageFolderPath = './'; // 图片文件夹路径
const indexFilePath = './index.md'; // index.md 文件路径

// 支持的图片文件扩展名
const supportedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];

fs.readdir(imageFolderPath, (err, files) => {
    if (err) {
        return console.error('Error reading directory:', err);
    }

    // 过滤出支持的图片文件
    const imageFiles = files.filter(file => supportedExtensions.includes(path.extname(file).toLowerCase()));

    if (imageFiles.length === 0) {
        return console.log('No image files found in the directory.');
    }

    // 准备要追加到 index.md 文件的内容
    const markdownLinks = imageFiles.map(file => `![${file}](./${file})`).join('\n');

    // 追加内容到 index.md
    fs.appendFile(indexFilePath, `\n${markdownLinks}\n`, (err) => {
        if (err) {
            return console.error('Error writing to index.md:', err);
        }
        console.log('Successfully appended image links to index.md');
    });
});
