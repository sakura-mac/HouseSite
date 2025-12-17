import React from 'react';
import BlogSideBar from '../../componets/blog/BlogSideBar';
import { Link } from 'react-router-dom';
import Layout from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';
import { withI18n } from '../../i18n/i18n';

class BlogStandard extends React.Component {
    render() {
        const { t } = this.props.i18n || {};
        return (
            <Layout>
                <div className="page-title-area">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="page-title-item text-center">
                                    <h2 className="title"><br/>{t('blog.title')}</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to={"/"}>{t('header.nav.home')}</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                {t('blog.title')}
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

export default withI18n(BlogStandard);
