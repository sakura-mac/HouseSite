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
                console.log("Markdown content:", data);  // 输出加载的内容用于调试
                setContent(data);
            })
            .catch(err => {
                console.error("Error fetching blog content:", err);
                setError(err.message);
            });
    }, [folderName]);


    // 样式对象
    const styles = {
        h1: {
            // color: '#2c3e50',
            // fontFamily: 'Georgia, serif',
            marginBottom: '40px',
            borderBottom: '2px solid #e74c3c',
            paddingBottom: '40px'
        },
        p: {
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.8',
            marginBottom: '15px',
            color: '#555',
        },
        ul: {
            paddingLeft: '20px',
            marginBottom: '20px',
            fontFamily: 'Arial, sans-serif',
        },
        li: {
            marginBottom: '10px',
            listStyleType: 'none',
            position: 'relative',
            paddingLeft: '20px',
        },
        liBefore: {
            content: '"🔹"',
            position: 'absolute',
            left: '0',
        },
        blockquote: {
            backgroundColor: '#f9f9f9',
            padding: '15px',
            borderLeft: '5px solid #ccc',
            marginBottom: '20px',
            fontStyle: 'italic',
        },
        strong: {
            fontWeight: 'bold',
            // color: '#e74c3c',
        },
        em: {
            color: '#3498db',
            fontStyle: 'italic',
        },
        hr: {
            border: 'none',
            height: '2px',
            backgroundColor: '#e74c3c',
            margin: '30px 0',
        },
        img: {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '20px',
        }
    };

    // 自定义 Markdown 元素渲染
    const components = {
        h1: ({ children }) => <h1 style={styles.h1}>{children}</h1>,
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
                                    <div className="blog-dteails-content blog-border">
                                        {error && <div>Error: {error}</div>}
                                        {!content && !error && <div>Loading...</div>}
                                        {content && (
                                            <div>
                                                {/* 渲染 Markdown 并确保图片路径处理 */}
                                                <ReactMarkdown components={{
                                                    h1: ({ children }) => <h1 style={styles.h1}>{children}</h1>,
                                                    p: ({ children }) => <p style={styles.p}>{children}</p>,
                                                    ul: ({ children }) => <ul style={styles.ul}>{children}</ul>,
                                                    blockquote: ({ children }) => <blockquote style={styles.blockquote}>{children}</blockquote>,
                                                    strong: ({ children }) => <strong style={styles.strong}>{children}</strong>,
                                                }}>
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


// 使用 ReactMarkdown 时自定义样式

export default BlogDetails;
