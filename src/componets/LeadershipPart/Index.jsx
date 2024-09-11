import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLongArrowAltLeft,
    faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <span onClick={onClick} className="next slick-arrow" style={style}>
      <i className="fal fa-long-arrow-right" />
      <FontAwesomeIcon icon={faLongArrowAltRight}/>
    </span>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <span onClick={onClick} className="prev slick-arrow" style={style}>
      <FontAwesomeIcon icon={faLongArrowAltLeft}/>
    </span>
  );

}

class LeadershipPart extends React.Component {

  render() { 
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
        }
      ]


    };

    return ( 
      <div className="leadership-area gray-bg pt-105 pb-160">
        <Container>
          <Row className="justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-title-2 text-center pl-25 pr-25">
                <h2 className="title">Our Leadership</h2>
                <p>
                  Does any industry face a more complex audience journey and marketing
                  sales process than B2B technology.
                </p>
              </div>
              {/* section title 2 */}
            </div>
          </Row>
          {/* row */}
          <Slider className="row leadership-active" {...settings}>
            <Col lg="4">
              <div className="leadership-item mt-30">
                <img src="/assets/images/leadership-1.jpg" alt="" />
                <div className="leadership-content">
                  <h5 className="title">Rosalina Devid</h5>
                  <span>Founder</span>
                </div>
              </div>
              {/* leadership item */}
            </Col>
            <Col lg="4">
              <div className="leadership-item mt-30">
                <img src="/assets/images/leadership-2.jpg" alt="" />
                <div className="leadership-content">
                  <h5 className="title">Kemina Dvlin</h5>
                  <span>CEO</span>
                </div>
              </div>
              {/* leadership item */}
            </Col>
            <Col lg="4">
              <div className="leadership-item mt-30">
                <img src="/assets/images/leadership-3.jpg" alt="" />
                <div className="leadership-content">
                  <h5 className="title">Yellow D. Ballow</h5>
                  <span>Marketer</span>
                </div>
              </div>
              {/* leadership item */}
            </Col>
            <Col lg="4">
              <div className="leadership-item mt-30">
                <img src="/assets/images/leadership-2.jpg" alt="" />
                <div className="leadership-content">
                  <h5 className="title">Yellow D. Ballow</h5>
                  <span>Marketer</span>
                </div>
              </div>
              {/* leadership item */}
            </Col>
          </Slider>
          {/* row */}
        </Container>
        {/* container */}
      </div>
      );
  }
}
 
export default LeadershipPart;