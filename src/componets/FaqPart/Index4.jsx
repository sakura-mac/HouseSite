import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class FaqPart extends React.Component {

    render() { 
        return ( 
          <div className="faq-area faq-area-3 pt-115">
            <Container>
              <Row>
                <Col lg="6" className="order-2 order-lg-1 d-none d-sm-block">
                  <div className="faq-thumb">
                    <div className="faq-thumb-1 text-right">
                      <img src="/assets/images/faq-thumb-1.jpg" alt="" />
                    </div>
                    <div className="faq-thumb-2">
                      <img src="assets/images/faq-thumb-2.jpg" alt="" />
                    </div>
                  </div> 
                </Col>
                <div className="col-lg-6 order-1 order-lg-2">
                  <div className="section-title text-left">
                    <span>faq</span>
                    <h2 className="title">Get Every Single Answers Here.</h2>
                  </div> 
                  <div className="faq-accordion">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header id="headingOne">
                          <Accordion.Toggle as={Link} variant="link" eventKey="0">
                            Today, the term Information Technology
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real. </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Link} variant="link" eventKey="1">
                            Over the years, a wide range of developments
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real. </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Link} variant="link" eventKey="2">
                            As a result, most of us need to know
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real. </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Link} variant="link" eventKey="3">
                            Our knowledge of computers will help us
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            <p>Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real. </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div> 
                </div>
              </Row> 
            </Container> 
          </div>

         );
    }
}
 
export default FaqPart;