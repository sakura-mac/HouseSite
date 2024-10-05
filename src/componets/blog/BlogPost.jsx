// import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
//
// const BlogPost = ({ folderName }) => {
//     const [content, setContent] = useState('');
//
//     useEffect(() => {
//         // 假设所有博客的 Markdown 文件都放在 /public/blogs/{folderName}/index.md
//         fetch(`/blogs/${folderName}/index.md`)
//             .then((res) => res.text())
//             .then((data) => setContent(data))
//             .catch((error) => console.error("Error loading the blog post:", error));
//     }, [folderName]);
//
//     return (
//         <div>
//             <ReactMarkdown>{content}</ReactMarkdown>
//         </div>
//     );
// };
//
// export default BlogPost;
