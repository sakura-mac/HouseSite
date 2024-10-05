const fs = require('fs');
const path = require('path');

const blogsDir = path.join(__dirname, '../public/blogs');

// 生成博客列表的 JSON 文件
const generateBlogList = () => {
    fs.readdir(blogsDir, (err, folders) => {
        if (err) {
            console.error('Failed to read blogs directory:', err);
            return;
        }

        const blogList = folders.filter(folder => folder !== 'blog-list.json').map((folder) => {
            const content = fs.readFileSync(path.join(blogsDir, folder, 'index.md'), 'utf-8');

            // 提取标题
            const titleMatch = content.match(/^#\s+(.+)/);  // 获取Markdown文件中的标题（假设标题在第一行的#后面）

            // 拆分文件为行，通过逐行读取找到第一个有效段落
            const lines = content.split('\n');
            let excerpt = '';

            for (let line of lines) {
                // 排除空行和标题行
                if (line.trim() && !line.startsWith('#')) {
                    excerpt = line.trim();  // 获取第一个有效段落
                    break;
                }
            }

            return {
                folderName: folder,
                title: titleMatch ? titleMatch[1] : 'Untitled',
                excerpt: excerpt ? excerpt.slice(0, 100) + '...' : 'No excerpt available'
            };
        });

        // 将结果写入 JSON 文件
        fs.writeFileSync(path.join(blogsDir, 'blog-list.json'), JSON.stringify(blogList, null, 2));
        console.log('Blog list generated successfully!');
    });
};

generateBlogList();
