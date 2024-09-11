import React from 'react';
import './index.scss'
import './sideBar.scss';
import Layout from '../../layouts';
import SideBar from './sidebar';
import ProductSlider from "./productSlider";
import ProductHeader from "./header";
import { Container, Row, Col } from 'react-bootstrap';

class ProductDetailPage extends React.Component {

    render() {

        return (
            <Layout>
                <ProductHeader/>
                <div className="shop-area gray-bg  pb-120">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <div className={`product-preview`}>
                                    <div className="product-slider">
                                        <ProductSlider/>
                                    </div>
                                </div>
                            </Col>
                            <SideBar/>
                        </Row>
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default ProductDetailPage;