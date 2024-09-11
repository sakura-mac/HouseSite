import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

class FaqPart extends React.Component {

  render() { 
      return ( 
        <div className="faq-area">
          <Container>
            <Row>
              <Col lg="6">
                <div className="section-title text-left">
                  <span>faq</span>
                  <h2 className="title">Get Every Single Answers Here.</h2>
                </div>
              

                {/* section title */}
                <div className="faq-accordion">
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} eventKey="0">
                          Today, the term Information Technology
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <p>
                            Today, the term Information Technology (IT) has ballooned to
                            encompass is real. Today, the term Information Technology
                            (IT) has ballooned to encompass is real.Today, the term
                            Information Technology (IT) has ballooned to encompass is
                            real.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} eventKey="1">
                          Over the years, a wide range of developments
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <p>
                            Today, the term Information Technology (IT) has ballooned to
                            encompass is real. Today, the term Information Technology
                            (IT) has ballooned to encompass is real.Today, the term
                            Information Technology (IT) has ballooned to encompass is
                            real.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} eventKey="2">
                          As a result, most of us need to know
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <p>
                            Today, the term Information Technology (IT) has ballooned to
                            encompass is real. Today, the term Information Technology
                            (IT) has ballooned to encompass is real.Today, the term
                            Information Technology (IT) has ballooned to encompass is
                            real.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} eventKey="3">
                          Our knowledge of computers will help us
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>
                          <p>
                            Today, the term Information Technology (IT) has ballooned to
                            encompass is real. Today, the term Information Technology
                            (IT) has ballooned to encompass is real.Today, the term
                            Information Technology (IT) has ballooned to encompass is
                            real.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                {/* faq accordion */}
              </Col>
              <div className="col-lg-6 mt-5">
                <Row>
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-duration=".5s"
                    data-wow-delay=".2s"
                  >
                    <div className="single-faq">
                      <h3 className="title">
                        <span className="counter">869 </span>+
                      </h3>
                      <span>Project We Have Done</span>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass is real.
                      </p>
                      <i className="fal fa-archive" />
                    </div>
                    {/* single faq */}
                  </div>
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <div className="single-faq mt-20">
                      <h3 className="title">
                        <span className="counter">100 </span>+
                      </h3>
                      <span>Project We Have Done</span>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass is real.
                      </p>
                      <i className="fal fa-user" />
                    </div>
                    {/* single faq */}
                  </div>
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                  >
                    <div className="single-faq mt-10">
                      <h3 className="title">
                        <span className="counter">50 </span>+
                      </h3>
                      <span>Project We Have Done</span>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass is real.
                      </p>
                      <i className="fal fa-globe" />
                    </div>
                    {/* single faq */}
                  </div>
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay=".5s"
                  >
                    <div className="single-faq mt-30">
                      <h3 className="title">
                        <span className="counter">10 </span>+
                      </h3>
                      <span>Project We Have Done</span>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass is real.
                      </p>
                      <i className="fal fa-award" />
                    </div>
                    {/* single faq */}
                  </div>
                </Row>
              </div>
            </Row>
            {/* row */}
          </Container>
          {/* container */}
        </div>
        );
  }
}
 
export default FaqPart;