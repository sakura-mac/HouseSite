import React from 'react';
import './index.scss';
import Layout from '../../layouts';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';

class ProductPage extends React.Component {


  constructor(props) {
    super(props);
    this.state= {
      data: {  }
    }
  }

    render() {

        const elements = ['three', 'three', 'three', 'three',];

        const items = [];

        for (const [index, value] of elements.entries()) {
            items.push(
                <div key={index} className="product-group" data={value}>
                    <div className="product-content">
                        <div className="shop-thumb">
                            <img src="/assets/images/products/2.png" alt="" />
                            <div className="shop-overlay">
                                <ul>
                                    <li>
                                        <Link  to={"/shop"}>
                                            <i className="fal fa-shopping-cart" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  to={"/shop"}>
                                            <i className="fal fa-heart" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="image-popup"
                                            to={"assets/images/products/2.png"}
                                        >
                                            <i className="fal fa-eye" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`product-price`}>$69</div>
                        </div>



                        <div className="product-info">
                            <Link className="title" to={"/shop"}>
                                <h5>
                                    <strong>Troma</strong> - Creative Digital Agency WordPress Theme
                                </h5>
                            </Link>

                            <div className="vendor-info">
                                <i> by </i>
                                <Link className="R8zaM"  to={"product"}> kalathemes </Link><span> in </span>
                                <Link className="R8zaM" to={"product"}> Fashion </Link>
                            </div>

                            {/*<ul>*/}
                            {/*    <li>$45.99</li>*/}
                            {/*    <li>$30.99</li>*/}
                            {/*</ul>*/}
                            <div className="footer">
                                <Link to={'index'}>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <span> 649 sold</span>
                                </Link>
                                <Link to={'index'}>
                                    <FontAwesomeIcon icon={faHeart}  />
                                    <span>120</span>
                                </Link>
                                <Link to={'index'}>
                                    <span>WordPress</span>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return ( 
          <Layout>
      <div className="page-title-area">
        <Container>
          <Row>
            <Col lg="12">
              <div className="page-title-item text-center">
                <h2 className="title">Our latest Theme</h2>
              </div>
              {/* page title */}
            </Col>
          </Row>
          {/* row */}
        </Container>
        {/* container */}
      </div>
        {/* /*====== PAGE TITLE PART ENDS ======
        /*====== SHOP PART START ====== */}
      <div className="product">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row>
                  {items}

              </Row>
              <Row>
                <Col lg="12">
                  <nav className="mt-40" aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <Link 
                          className="page-link"
                          to={"/shop"}
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          <i className="fal fa-arrow-left" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link active" to={"/shop"}>
                          01
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link" to={"/shop"}>
                          02
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link" to={"/shop"}>
                          03
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link" to={"/shop"}>
                          ...
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link" to={"/shop"}>
                          10
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link  className="page-link" to={"/shop"}>
                          <i className="fal fa-arrow-right" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      </Layout>
      );
    }
}
 
export default ProductPage;