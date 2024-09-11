import React from 'react';
import Slider from "react-slick";
import { Row, Col } from 'react-bootstrap';

class Brand2Part extends React.Component {

    render() { 
      var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false
      };
        return ( 
          <div className="brand-2-area pb-120">
            <div>
              <Row>
                <Col lg="12">
                  <Slider className="brand-active" {...settings}>
                    <div className="brand-item">
                      <img src="assets/images/brand-item-1.png" alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src="assets/images/brand-item-2.png" alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src="assets/images/brand-item-3.png" alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src="assets/images/brand-item-4.png" alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src="assets/images/brand-item-5.png" alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src="assets/images/brand-item-6.png" alt="brand name" />
                    </div>
                    <div className="brand-item">
                      <img src="assets/images/brand-item-3.png" alt="brand name" />
                    </div>
                    </Slider>
                  {/* brand item */}
                </Col>
              </Row>
              {/* row */}
            </div>
            {/* container */}
          </div>
      );
    }
}
 
export default Brand2Part;