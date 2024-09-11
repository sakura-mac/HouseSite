import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

class ServicesPart extends React.Component {

    render() { 
        return ( 
          <div className="services-area pt-115 pb-120">
            <Container>
              <Row className="justify-content-center">
                <Col lg="8">
                  <div className="section-title text-center">
                    <span>services</span>
                    <h2 className="title">What We Do</h2>
                  </div>
                  {/* section title */}
                </Col>
              </Row>
              {/* row */}
              <Row className="justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
                  data-wow-duration=".1s"
                  data-wow-delay=".3s"
                >
                  <div className="single-services text-center mt-30">
                    <img src="assets/images/services-1.png" alt="" />
                    <h4 className="title">UI/UX Design</h4>
                    <p>
                      Many aspects of computing and technology and the term is more
                      recognizable than before.
                    </p>
                    <Link  to={"services-details"}>
                      <i className="fal fa-angle-right" />
                      <FontAwesomeIcon icon={faAngleRight}  className={`pr-1`} />
                      Read More
                    </Link>
                  </div>
                  {/* singke services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
                  data-wow-duration=".5s"
                  data-wow-delay=".4s"
                >
                  <div className="single-services single-services-2 text-center mt-30">
                    <img src="assets/images/services-2.png" alt="" />
                    <h4 className="title">Web Design</h4>
                    <p>
                      Many aspects of computing and technology and the term is more
                      recognizable than before.
                    </p>
                    <Link  to={"services-details"}>
                      <i className="fal fa-angle-right" />
                      <FontAwesomeIcon icon={faAngleRight}   className={`pr-1`} />

                      Read More
                    </Link>
                  </div>
                  {/* singke services */}
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".5s"
                >
                  <div className="single-services single-services-3 text-center mt-30">
                    <img src="assets/images/services-3.png" alt="" />
                    <h4 className="title">Digital Marketing</h4>
                    <p>
                      Many aspects of computing and technology and the term is more
                      recognizable than before.
                    </p>
                    <Link  to={"services-details"}>
                      <i className="fal fa-angle-right" />
                      <FontAwesomeIcon icon={faAngleRight}  className={`pr-1`}  />

                      Read More
                    </Link>
                  </div>
                  {/* singke services */}
                </div>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
         );
    }
}
 
export default ServicesPart;