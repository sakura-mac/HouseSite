import React from 'react';
import BlogSideBar from '../../componets/blog/BlogSideBar';
import { Link } from 'react-router-dom';
import Layout from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';

class BlogStandard extends React.Component {
    render() {
        return (
            <Layout>
                <div className="page-title-area">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="page-title-item text-center">
                                    <h2 className="title"><br/>新闻中心</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to={"/"}>Home </Link>
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
                <div>
                    <BlogSideBar /> {/* 加载侧边栏，集成了博客列表和分页 */}
                </div>
            </Layout>
        );
    }
}

export default BlogStandard;
