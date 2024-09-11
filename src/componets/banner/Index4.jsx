import React from 'react';
import Slider from "react-slick";
import bannerImg from '../../assets/images/banner-bg-3.jpg';
import { Container, Row, Col } from 'react-bootstrap';

class Banner extends React.Component {

  render() { 
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false
    };

    return ( 
      <React.Fragment>
      <div className="banner-area-3 bg_cover" style={{backgroundImage: `url(${process.env.PUBLIC_URL}'/'${bannerImg})`}}>
        <div className="banner-overlay">
          <img className="item-1" src="assets/images/banner-shape-1.png" alt="" />
          <img className="item-2" src="assets/images/banner-shape-2.png" alt="" />
          <Container>
            <Row className="align-items-center">
              <Col lg="12">
                <div className="banner-content text-center">
                  <span>Get Quality Item &amp; Goods</span>
                  <h1 className="title">IT Solutions</h1>
                  <p>Make your products with good &amp; professionals</p>
                </div> 
              </Col>
            </Row> 
          </Container> 
        </div>
      </div>

      <Slider  className="brand-area brand-active" {...settings}>
      <div className="brand-item">
        <img src="assets/images/brand-1.png" alt="" />
      </div>
      {/* brand item */}
      <div className="brand-item">
        <img src="assets/images/brand-2.png" alt="" />
      </div>
      {/* brand item */}
      <div className="brand-item">
        <img src="assets/images/brand-5.png" alt="" />
      </div>
      {/* brand item */}
      <div className="brand-item">
        <img src="assets/images/brand-4.png" alt="" />
      </div>
      {/* brand item */}
      <div className="brand-item">
        <img src="assets/images/brand-5.png" alt="" />
      </div>
      {/* brand item */}
      <div className="brand-item">
        <img src="assets/images/brand-4.png" alt="" />
      </div>
      {/* brand item */}
      <div className="brand-item">
        <img src="assets/images/brand-1.png" alt="" />
      </div>
      {/* brand item */}
      <div className="brand-item">
        <img src="assets/images/brand-2.png" alt="" />
      </div>
      {/* brand item */}
      </Slider>
    </React.Fragment>
    );
  }
}
 
export default Banner;