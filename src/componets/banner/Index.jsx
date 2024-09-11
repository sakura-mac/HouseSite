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
                            IT Business Consulting
                          </span>
                          <h1
                            data-animation="fadeInLeft"
                            data-delay="0.9s"
                            className="title"
                          >
                            Best IT Soluations <br />
                            Provider Agency
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremda tium totam rem aperiam eaque ipsa quae ab
                            illo inventore veritatis
                          </p>
                          <Link
                            data-animation="fadeInUp"
                            data-delay="1.6s"
                            className="main-btn"
                            to={"services"}
                          >
                            Our Services <i className="fal fa-long-arrow-right" />
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
                            IT Business Consulting
                          </span>
                          <h1
                            data-animation="fadeInLeft"
                            data-delay="0.9s"
                            className="title"
                          >
                            Best IT Soluations <br />
                            Provider Agency
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremda tium totam rem aperiam eaque ipsa quae ab
                            illo inventore veritatis
                          </p>
                          <Link
                            data-animation="fadeInUp"
                            data-delay="1.6s"
                            className="main-btn"
                            to={"services"}
                          >
                            Our Services <i className="fal fa-long-arrow-right" />
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


              <div className="single-banner bg_cover  bg_img_3" >
                <div className="banner-overlay">
                  <Container>
                    <Row>
                      <Col lg="9">
                        <div className="banner-content">
                          <span data-animation="fadeInLeft" data-delay="0.5s">
                            IT Business Consulting
                          </span>
                          <h1
                            data-animation="fadeInLeft"
                            data-delay="0.9s"
                            className="title"
                          >
                            Best IT Soluations <br />
                            Provider Agency
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremda tium totam rem aperiam eaque ipsa quae ab
                            illo inventore veritatis
                          </p>
                          <Link
                            data-animation="fadeInUp"
                            data-delay="1.6s"
                            className="main-btn"
                            to={"services"}
                          >
                            Our Services <i className="fal fa-long-arrow-right" />
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