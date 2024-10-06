import React from 'react';
import NewsPart from '../../componets/NewsPart/Index';
import Layout from '../../layouts';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LatestNewsPart from "../../componets/latestNewsPart/Index";

class CaseStudy extends React.Component {

    render() {
        return (
            <Layout>
                <div className="page-title-area">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="page-title-item text-center">
                                    <h2 className="title"><br/>房源速览</h2>
                                    <nav aria-label="breadcrumb">


                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link  to={"/"}>Home </Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Houses
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                                {/* page title */}
                            </Col>
                        </Row>
                        {/* row */}
                    </Container>
                    {/* container */}
                </div>
                {
                    /*====== PAGE TITLE PART ENDS ======*/
                }
                <NewsPart/>
                {/*<LatestNewsPart/>*/}
            </Layout>
        );
    }
}

export default CaseStudy;