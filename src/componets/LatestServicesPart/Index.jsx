import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

class LatestServicesPart extends React.Component {

    render() { 
        return ( 
          <React.Fragment>
          <div className="services-title-area">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <div className="services-title-item text-center">
                    <div className="ring-shape" />
                    <span>Our latest services</span>
                    <h3 className="title">We Offer Better Soluation For Your IT Business</h3>
                  </div> 
                </Col>
              </Row> 
            </Container> 
          </div>
          <div className="latest-services-area">
            <Container>
              <Row className="justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration=".5s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="/assets/images/services-4.1.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">Desktop Computing</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantiuto-tam rem aperiam eaque ipsa quae
                        inventore
                      </p>
                      <Link to={"services-details"}>
                        Read More
                        <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="assets/images/services-4.2.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">Infrastructure Planning</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantiuto-tam rem aperiam eaque ipsa quae
                        inventore
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="assets/images/services-4.3.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">Big Data &amp; Analytics</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantiuto-tam rem aperiam eaque ipsa quae
                        inventore
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="/assets/images/services-4.4.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">It Management System</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantiuto-tam rem aperiam eaque ipsa quae
                        inventore
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="2.5s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="/assets/images/services-4.5.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">Web Development</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantiuto-tam rem aperiam eaque ipsa quae
                        inventore
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="3s"
                  data-wow-delay="0s"
                >
                  <div className="single-services mt-30 mb-55">
                    <div className="services-thumb">
                      <img src="/assets/images/services-4.6.jpg" alt="" />
                    </div>
                    <div className="services-content">
                      <h4 className="title">Dedicated IT Solution</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantiuto-tam rem aperiam eaque ipsa quae
                        inventore
                      </p>
                      <Link to={"services-details"}>
                        Read More <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`}/>
                      </Link>
                    </div>
                  </div>
                  {/* single services */}
                </div>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
          </React.Fragment>
         );
    }
}
 
export default LatestServicesPart;