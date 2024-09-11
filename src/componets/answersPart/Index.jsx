import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

class AnswersPart extends React.Component {

  render() { 
        return ( 
            <React.Fragment>
            {
              /*====== ANSWERS PART START ======*/
            }
            <div className="asnwers-area pt-105 pb-100 gray-bg">
              <Container>
                <Row>
                  <Col lg="6">
                    <div className="section-title-2">
                      <h2 className="title">Get Single Answers</h2>
                      <p>
                        Does any industry face a more complex audience journey and marketing
                        sales process than B2B technology.
                      </p>
                    </div>
                    {/* section title 2 */}
                    <div className="faq-accordion-2 mt-30">
                      <Accordion defaultActiveKey="0">
                        <Card
                          className="wow fadeInLeft"
                          data-wow-duration=".5s"
                          data-wow-delay=".3s"
                        >
                          <Card.Header>
                            <Accordion.Toggle as={Link} eventKey="0">
                              Does any industry a more audience journey?
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
                        {/* card */}
                        <Card
                          className="wow fadeInLeft"
                          data-wow-duration=".6s"
                          data-wow-delay=".4s"
                        >
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
                        {/* card */}
                        <Card
                          className="wow fadeInLeft"
                          data-wow-duration=".7s"
                          data-wow-delay=".5s"
                        >
                          <Card.Header id="headingThree">
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
                        {/* card */}
                        <Card
                          className="wow fadeInLeft"
                          data-wow-duration=".8s"
                          data-wow-delay=".6s"
                        >
                          <Card.Header id="headingFour">
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
                        {/* card */}
                        <Card
                          className="wow fadeInLeft"
                          data-wow-duration=".9s"
                          data-wow-delay=".7s"
                        >
                          <Card.Header id="headingFive">
                            <Accordion.Toggle as={Link} eventKey="4">
                              Our knowledge of computers will help us
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="4">
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
                        {/* card */}
                      </Accordion>
                    </div>
                    {/* faq accordion */}
                  </Col>
                  <Col lg="6">
                    <div className="answers-thumb">
                      <div className="answers-thumb-1 text-right">
                        <img src="assets/images/answers-thumb-1.jpg" alt="" />
                      </div>
                      <div className="answers-thumb-2">
                        <img src="assets/images/answers-thumb-2.jpg" alt="" />
                      </div>
                    </div>
                    {/* answers thumb */}
                  </Col>
                </Row>
                {/* row */}
              </Container>
              {/* containter */}
            </div>;
            {
              /*====== ANSWERS PART ENDS ======*/
            }
            </React.Fragment>
         );
    }
}
 
export default AnswersPart;