import React, { useState, useEffect } from 'react';
import BlogDetailsSideBar from '../../componets/blog/BlogDetailsSideBar';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const BlogDetails = () => {
    const { folderName } = useParams(); // 从URL中获取folderName
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    // 移除 frontmatter 的函数
    const removeFrontmatter = (markdownContent) => {
        return markdownContent.replace(/^---[\s\S]+?---/, '').trim();
    };

    // 加载Markdown文件内容
    useEffect(() => {
        const filePath = `${process.env.PUBLIC_URL}/blogs/${folderName}/index.md`;
        console.log("Fetching:", filePath);  // 输出请求路径用于调试
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Blog not found");
                }
                return response.text();
            })
            .then(data => {
                const cleanContent = removeFrontmatter(data);
                setContent(cleanContent);
            })
            .catch(err => {
                setError(err.message);
            });
    }, [folderName]);

    // 样式对象
    const styles = {
        h1: {
            marginBottom: '30px',
            paddingBottom: '15px',
            borderBottom: '3px solid #e74c3c',
            fontSize: '2.5em',
            fontWeight: 'bold',
            color: '#333',
        },
        h2: {
            marginBottom: '25px',
            paddingBottom: '10px',
            // borderBottom: '2px solid #e74c3c',
            fontSize: '2em',
            color: '#444',
        },
        p: {
            lineHeight: '1.8',
            marginBottom: '20px',
            fontSize: '1.1em',
            color: '#555',
        },
        ul: {
            paddingLeft: '20px',
            marginBottom: '25px',
        },
        li: {
            marginBottom: '10px',
            listStyleType: 'disc',
            color: '#555',
            paddingLeft: '5px',
        },
        blockquote: {
            backgroundColor: '#f7f7f7',
            padding: '20px',
            borderLeft: '5px solid #e74c3c',
            marginBottom: '25px',
            fontStyle: 'italic',
            fontSize: '1.2em',
            color: '#555',
        },
        strong: {
            fontWeight: 'bold',
            color: '#e74c3c',
        },
        em: {
            color: '#3498db',
            fontStyle: 'italic',
        },
        hr: {
            border: 'none',
            height: '2px',
            backgroundColor: '#e74c3c',
            margin: '40px 0',
        },
        img: {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '30px',
        }
    };

    // 自定义 Markdown 元素渲染
    const components = {
        h1: ({ children }) => <h1 style={styles.h1}>{children}</h1>,
        h2: ({ children }) => <h2 style={styles.h2}>{children}</h2>,
        p: ({ children }) => <p style={styles.p}>{children}</p>,
        ul: ({ children }) => <ul style={styles.ul}>{children}</ul>,
        li: ({ children }) => <li style={styles.li}>{children}</li>,
        blockquote: ({ children }) => <blockquote style={styles.blockquote}>{children}</blockquote>,
        strong: ({ children }) => <strong style={styles.strong}>{children}</strong>,
        em: ({ children }) => <em style={styles.em}>{children}</em>,
        hr: () => <hr style={styles.hr} />,
        img: ({ node, ...props }) => {
            const src = `${process.env.PUBLIC_URL}/blogs/${folderName}/${props.src}`;
            return <img {...props} src={src} alt={props.alt} style={styles.img} />;
        },
    };

    return (
        <Layout>
            {/* 页面标题区域 */}
            <div className="page-title-area">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="page-title-item text-center">
                                <h2 className="title"><br />新闻中心</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to={"/"}>Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            News
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* 博客内容区域 */}
            <div className="blog-standard-area pt-90 pb-120">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12">
                            <div className="blog-standard">
                                <div className="single-blog-standard mt-30">
                                    <div className="blog-details-content blog-border">
                                        {error && <div>Error: {error}</div>}
                                        {!content && !error && <div>Loading...</div>}
                                        {content && (
                                            <div>
                                                {/* 渲染 Markdown 并确保图片路径处理 */}
                                                <ReactMarkdown components={components}>
                                                    {content}
                                                </ReactMarkdown>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default BlogDetails;
