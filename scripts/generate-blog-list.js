const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 定义博客和房产文件夹路径
const blogDir = './public/blogs/';
const houseDir = './public/house/';
const blogList = [];
const houseList = [];

// 生成2023年随机日期的函数
function getRandomDateIn2023() {
    const start = new Date(2023, 0, 1);  // 2023年1月1日
    const end = new Date(2023, 11, 31);  // 2023年12月31日
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];  // 格式化为 'YYYY-MM-DD'
}

// 提取Markdown元数据并生成列表的函数
function generateList(dirPath, list, categoryDefault) {
    fs.readdirSync(dirPath).forEach(folder => {
        const filePath = path.join(dirPath, folder, 'index.md');

        if (fs.existsSync(filePath)) {
            // 读取Markdown文件的内容
            const fileContent = fs.readFileSync(filePath, 'utf-8');

            // 使用gray-matter提取frontmatter数据和正文内容
            const { data, content } = matter(fileContent);

            // 将提取的数据添加到列表中
            list.push({
                folderName: folder,  // 保存文件夹名称
                title: data.title || folder,
                date: data.date || getRandomDateIn2023(),
                author: data.author || '李 小燕',
                tags: data.tags || [],
                category: data.category || categoryDefault,
                description: data.description || content.slice(0, 100), // 如果没有描述，用内容前100字符作为摘要
                url: `/${dirPath.split('/').slice(-2, -1)}/${folder}/index.md` // 根据传入的路径生成URL
            });
        }
    });
}

// 生成博客列表
generateList(blogDir, blogList, 'Blog');

// 生成房产列表
generateList(houseDir, houseList, 'House');

// 将列表排序，按日期降序排列
blogList.sort((a, b) => new Date(b.date) - new Date(a.date));
houseList.sort((a, b) => new Date(b.date) - new Date(a.date));

// 将生成的博客和房产列表写入JSON文件
fs.writeFileSync('./public/blogs/blog-list.json', JSON.stringify(blogList, null, 2));
fs.writeFileSync('./public/house/house-list.json', JSON.stringify(houseList, null, 2));

console.log('博客和房产元数据已成功提取并生成至 blog-list.json 和 house-list.json');
