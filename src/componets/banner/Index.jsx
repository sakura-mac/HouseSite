import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <span onClick={onClick} className="next slick-arrow" style={style}>
       <FontAwesomeIcon icon={faAngleRight}/>
    </span>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <span onClick={onClick} className="prev slick-arrow" style={style}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </span>
  );
}


class Banner extends React.Component {


    render() { 

      var settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        arrows: true,
        initialSlide: 0,
        dots: false,
        draggable: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1330,
                settings: {
                    arrows: false
                }
            }
        ],
      //  className: 'slick-slider-fade',
      };
  
      
        return ( 
            <React.Fragment>
            <Slider className="banner-active"  {...settings}>
              <div className="single-banner bg_cover bg_img_1 ">
                <img src="" alt=""/>
                <div className="banner-overlay">
                  <Container>
                    <Row>
                      <Col lg="9">
                        <div className="banner-content">
                          <span data-animation="fadeInLeft" data-delay="0.5s">
                            Estate Consultant
                          </span>
                          <h1
                            data-animation="fadeInLeft"
                            data-delay="0.9s"
                            className="title"
                          >
                            发现完美住所
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            在我们这里，每一处房产都拥有独特的魅力。<br />
                            通过个性化方案和精确定位，轻松实现舒适居住。
                          </p>
                          <Link
                            data-animation="fadeInUp"
                            data-delay="1.6s"
                            className="main-btn"
                            to={"/case-study"}
                          >
                            房源速览 <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        {/* banner content */}
                      </Col>
                    </Row>
                    {/* row */}
                  </Container>
                  {/* container */}
                </div>
              </div>

              <div className="single-banner bg_cover  bg_img_2">
                <div className="banner-overlay">
                  <Container>
                    <Row>
                      <Col lg="9">
                        <div className="banner-content">
                          <span data-animation="fadeInLeft" data-delay="0.5s">
                            Estate Consultant
                          </span>
                          <h1
                              data-animation="fadeInLeft"
                              data-delay="0.9s"
                              className="title"
                          >
                            发现完美住所
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            在我们这里，每一处房产都拥有独特的魅力。<br/>
                            通过个性化方案和精确定位，轻松实现舒适居住。
                          </p>
                          <Link
                              data-animation="fadeInUp"
                              data-delay="1.6s"
                              className="main-btn"
                              to={"/case-study"}
                          >
                            房源速览 <i className="fal fa-long-arrow-right"/>
                          </Link>
                        </div>
                        {/* banner content */}
                      </Col>
                    </Row>
                    {/* row */}
                  </Container>
                  {/* container */}
                </div>
              </div>


              <div className="single-banner bg_cover  bg_img_3">
                <div className="banner-overlay">
                  <Container>
                    <Row>
                      <Col lg="9">
                        <div className="banner-content">
                          <span data-animation="fadeInLeft" data-delay="0.5s">
                            Estate Consultant
                          </span>
                          <h1
                              data-animation="fadeInLeft"
                              data-delay="0.9s"
                              className="title"
                          >
                            发现完美住所
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            在我们这里，每一处房产都拥有独特的魅力。<br/>
                            通过个性化方案和精确定位，轻松实现舒适居住。
                          </p>
                          <Link
                              data-animation="fadeInUp"
                              data-delay="1.6s"
                              className="main-btn"
                              to={"/case-study"}
                          >
                            房源速览 <i className="fal fa-long-arrow-right"/>
                          </Link>
                        </div>
                        {/* banner content */}
                      </Col>
                    </Row>
                    {/* row */}
                  </Container>
                  {/* container */}
                </div>
              </div>

            </Slider>
            </React.Fragment>
        );
    }
}

export default Banner;