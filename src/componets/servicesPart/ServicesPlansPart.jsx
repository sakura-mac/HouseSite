import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class ServicesPlansPart extends React.Component {

    render() { 
        return ( 
          <div className="services-plans-area">
            <Container>
              <Row className="align-items-center">
                <Col lg="6" md="6">
                  <div className="services-title mb-50">
                    <span>plans</span>
                    <h2 className="title">Here is plans</h2>
                  </div>
                </Col>
                <Col lg="6" md="6">
                  <div className="plans-tab-btn d-flex justify-content-md-end justify-content-start">
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
                          Monthly
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
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <Row className="justify-content-center">
                    <Col lg="3" md="6" sm="8" className="mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{ backgroundImage: "url(assets/images/plans-thumb.jpg)" }}
                      >
                        <b>Early Birds</b>
                        <h3 className="title">
                          $ <span>9</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use a
                          product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </Col>
                    <Col lg="3" md="6" sm="8" className="mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{ backgroundImage: "url(assets/images/plans-thumb.jpg)" }}
                      >
                        <b>Team</b>
                        <h3 className="title">
                          $ <span>32</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use a
                          product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </Col>
                    <Col lg="3" md="6" sm="8" className="mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{ backgroundImage: "url(assets/images/plans-thumb.jpg)" }}
                      >
                        <b>Personal</b>
                        <h3 className="title">
                          $ <span>69</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use a
                          product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </Col>
                    <Col lg="3" md="6" sm="8" className="mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{ backgroundImage: "url(assets/images/plans-thumb.jpg)" }}
                      >
                        <b>Plutinum</b>
                        <h3 className="title">
                          $ <span>99</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use a
                          product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <Row className="justify-content-center">
                    <Col lg="3" md="6" sm="8" className="mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{ backgroundImage: "url(assets/images/plans-thumb.jpg)" }}
                      >
                        <b>Early Birds</b>
                        <h3 className="title">
                          $ <span>56</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use a
                          product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </Col>
                    <Col lg="3" md="6" sm="8" className="mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{ backgroundImage: "url(assets/images/plans-thumb.jpg)" }}
                      >
                        <b>Team</b>
                        <h3 className="title">
                          $ <span>99</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use a
                          product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </Col>
                    <Col lg="3" md="6" sm="8" className="mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{ backgroundImage: "url(assets/images/plans-thumb.jpg)" }}
                      >
                        <b>Personal</b>
                        <h3 className="title">
                          $ <span>133</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use a
                          product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </Col>
                    <Col lg="3" md="6" sm="8" className="mt-30">
                      <div
                        className="plans-item bg_cover text-center"
                        style={{ backgroundImage: "url(assets/images/plans-thumb.jpg)" }}
                      >
                        <b>Plutinum</b>
                        <h3 className="title">
                          $ <span>599</span>
                        </h3>
                        <span>Per Month</span>
                        <p>
                          The functional goal of technical content is to help people use a
                          product successfully.
                        </p>
                        <Link  className="main-btn main-btn-2" to={"/"}>
                          Purchase Now
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Container>
          </div>
         );
    }
}
 
export default ServicesPlansPart;