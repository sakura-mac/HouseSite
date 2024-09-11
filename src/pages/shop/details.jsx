import React from 'react';
import Layout from '../../layouts';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class ShopDetailsPage extends React.Component {

  // componentDidMount() {
	// 	setTimeout(function () {
	// 		document.querySelector(".preloader").style = "display: none";
	// 	}, 5000);
  // }
    render() { 
      var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      var settings2 = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };


    var sliderStyle2 = {
      minHeight: 160,
      minWidth: 160,
    };

      
        return ( 
          <Layout>
        <div className="page-title-area">
          <Container>
            <Row>
              <Col lg="12">
                <div className="page-title-item text-center">
                  <h2 className="title">Shop Details</h2>
                  <nav aria-label="breadcrumb">

                  
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link  to={"/"}>Home </Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                      Shop Details
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
        {
          /*====== SHOP DETAILS PART START ======*/
        }
        <div className="shop-details-area pt-120 pb-115 gray-bg">
          <Container>
            <Row>
              <Col lg="6">
                <div className="shop-product-area ml-30">
                  <Slider  className="shop-active" {...settings}>
                    <div className="shop-product-item">
                      <img src="assets/images/shop-product.jpg" alt="" />
                    </div>
                    <div className="shop-product-item">
                      <img src="assets/images/shop-product.jpg" alt="" />
                    </div>
                    <div className="shop-product-item">
                      <img src="assets/images/shop-product.jpg" alt="" />
                    </div>
                  </Slider>
                  <div className="shop-product-thumb mt-30">
                    <Slider  className="row shop-thumb-active" {...settings2}>

                      <Col lg="4">
                        <img src="assets/images/shop-product-4.jpg" style={sliderStyle2} alt="" />
                      </Col>
                      <Col lg="4">
                        <img src="assets/images/shop-product-1.jpg" style={sliderStyle2}  alt="" />
                      </Col>
                      <Col lg="4">
                        <img src="assets/images/shop-product-2.jpg" style={sliderStyle2}  alt="" />
                      </Col>
                      <Col lg="4">
                        <img src="assets/images/shop-product-3.jpg" style={sliderStyle2}  alt="" />
                      </Col>
                    </Slider>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="shop-details-content ml-30">
                  <div className="review">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>23 Reviews</span>
                      </li>
                    </ul>
                    <span>Accesssories</span>
                    <h4 className="title">Audio System Multiroom 360</h4>
                  </div>
                  <div className="price">
                    <ul>
                      <li>$460</li>
                      <li>$689</li>
                    </ul>
                  </div>
                  <div className="list d-flex">
                    <ul className="list-1">
                      <li>Brands:</li>
                      <li>Product Code:</li>
                      <li>Rewards Points:</li>
                      <li>Stock:</li>
                    </ul>
                    <ul className="list-2">
                      <li>Limonda</li>
                      <li>Likaoli D12 </li>
                      <li>100</li>
                      <li>In Stock</li>
                    </ul>
                  </div>
                  <div className="overview">
                    <h4 className="title">Overview</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip. Excepteur sint occaecat cupida...
                    </p>
                    <form action="index">
                      <div className="list-2 d-sm-flex d-block">
                        <div className="product-quantity d-flex" id="quantity">
                          <button type="button" id="sub" className="sub">
                            -
                          </button>
                          <input type="text" id={1} defaultValue={0} />
                          <button type="button" id="add" className="add">
                            +
                          </button>
                        </div>
                        <ul>
                          <li>
                            <Link  to={"/"}>
                              <i className="fas fa-heart" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/"}>
                              <i className="fas fa-location-arrow" />
                            </Link>
                          </li>
                          <li>
                            <Link  to={"/"}>
                              <i className="fas fa-share-square" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <button className="main-btn">Add to cart</button>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <div className="shop-tab mt-80 d-flex justify-content-center">
                  <img src="assets/images/shop-border.png" alt="" />
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <Link 
                        className="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        to={"#pills-home"}
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Item review
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link 
                        className="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        to={"#pills-profile"}
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Descriptions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link 
                        className="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        to={"#pills-contact"}
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Methods
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="shop-descriptions-area">
                      <h3 className="title">Technical Specifications</h3>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Brand</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Apple 18</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Item HeightItem Width</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Millimeters 31.4</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Screen Size</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Centimeters 3 Inches</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Item Weight</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>1.6 Kg </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Product Dimensions</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>21.9 x 31.4 x 1.8 cm </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Item model number</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>MF841HN/A </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Processor Brand</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Intel</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Processor Type</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Core i5 </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Processor Speed</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>2.9 GHz </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>RAM Size</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>8 GB</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Hard Drive Size</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>512 GB</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Hard Disk Technology</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Solid State </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list border-0 d-flex">
                        <ul className="shop-list-1">
                          <li>Graphics Coprocessor</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Drive Intel Integrated Graphics</li>
                        </ul>
                      </div>
                      <h3 className="title">Product Descriptions</h3>
                      <p className="pb-20">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English.
                      </p>
                      <p>
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for 'lorem
                        ipsum' will uncove many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the like)
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for 'lorem
                        ipsum will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the like)..
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="shop-descriptions-area">
                      <h3 className="title">Technical Specifications</h3>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Brand</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Apple 18</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Item HeightItem Width</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Millimeters 31.4</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Screen Size</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Centimeters 3 Inches</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Item Weight</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>1.6 Kg </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Product Dimensions</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>21.9 x 31.4 x 1.8 cm </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Item model number</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>MF841HN/A </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Processor Brand</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Intel</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Processor Type</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Core i5 </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Processor Speed</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>2.9 GHz </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>RAM Size</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>8 GB</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Hard Drive Size</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>512 GB</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Hard Disk Technology</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Solid State </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list border-0 d-flex">
                        <ul className="shop-list-1">
                          <li>Graphics Coprocessor</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Drive Intel Integrated Graphics</li>
                        </ul>
                      </div>
                      <h3 className="title">Product Descriptions</h3>
                      <p className="pb-20">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English.
                      </p>
                      <p>
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for 'lorem
                        ipsum' will uncove many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the like)
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for 'lorem
                        ipsum will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the like)..
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="shop-descriptions-area">
                      <h3 className="title">Technical Specifications</h3>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Brand</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Apple 18</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Item HeightItem Width</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Millimeters 31.4</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Screen Size</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Centimeters 3 Inches</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Item Weight</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>1.6 Kg </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Product Dimensions</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>21.9 x 31.4 x 1.8 cm </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Item model number</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>MF841HN/A </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Processor Brand</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Intel</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Processor Type</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Core i5 </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Processor Speed</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>2.9 GHz </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>RAM Size</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>8 GB</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Hard Drive Size</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>512 GB</li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list d-flex">
                        <ul className="shop-list-1">
                          <li>Hard Disk Technology</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Solid State </li>
                        </ul>
                      </div>
                      <div className="shop-descriptions-list border-0 d-flex">
                        <ul className="shop-list-1">
                          <li>Graphics Coprocessor</li>
                        </ul>
                        <ul className="shop-list-2">
                          <li>Drive Intel Integrated Graphics</li>
                        </ul>
                      </div>
                      <h3 className="title">Product Descriptions</h3>
                      <p className="pb-20">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English.
                      </p>
                      <p>
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for 'lorem
                        ipsum' will uncove many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the like)
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for 'lorem
                        ipsum will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the like)..
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        </Layout>
      );
    }
}
 
export default ShopDetailsPage;