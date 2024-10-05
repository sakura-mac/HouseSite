import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const LatestNewsPart = () => {
    const [latestBlogs, setLatestBlogs] = useState([]);

    useEffect(() => {
        // 加载最新的博客数据
        fetch('/blogs/blog-list.json')
            .then(response => response.json())
            .then(data => {
                // 获取最新的三篇博客（按日期排序后提取前三条）
                const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setLatestBlogs(sortedBlogs.slice(0, 3)); // 只取前三条
            })
            .catch(error => console.error('Error loading blog list:', error));
    }, []);

    return (
        <div className="latest-news-area gray-bg">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="6">
                        <div className="section-title text-center">
                            <span>latest news</span>
                            <h2 className="title">新闻中心</h2>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="letast-news-grid white-bg ml-40 mr-40">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="latest-news">
                                <Row>
                                    {latestBlogs.map((blog, index) => (
                                        <div
                                            className="col-lg-4 col-md-6 wow slideInUp"
                                            data-wow-duration={`${0.5 * (index + 1)}s`}
                                            key={index}
                                        >
                                            <div className="letest-news-item mt-30" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                                <div>
                                                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                                                    <h4 className="title">
                                                        <Link to={`/blog-details/${blog.folderName}`}>
                                                            {blog.title}
                                                        </Link>
                                                    </h4>
                                                    <p>{blog.description}</p>
                                                </div>
                                                <div style={{ marginTop: 'auto' }}>
                                                    <Link to={`/blog-details/${blog.folderName}`} className="main-btn">
                                                        了解更多
                                                        <FontAwesomeIcon icon={faLongArrowAltRight} className="pl-1" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default LatestNewsPart;
