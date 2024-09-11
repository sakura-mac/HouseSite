import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card,Accordion } from 'react-bootstrap';

class OueChoosePart extends React.Component {

    render() { 
        return ( 
          <div className="our-choose-area">
            <Container>
              <Row>
                <Col lg="6">
                  <div className="section-title mt-30">
                    <span>Best agecy for you</span>
                    <h2 className="title">Why Choose Our Solutions</h2>
                  </div>
                  {/* section title */}
                  <Accordion defaultActiveKey="0">
                  <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} to="#be" variant="link" eventKey="0">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          We Provide Professional Service
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro quisquam
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} to="#be" variant="link" eventKey="1">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          We Provide Professional Service
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro quisquam
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} to="#be" variant="link" eventKey="2">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          We Provide Professional Service
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro quisquam
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} to="#be" variant="link" eventKey="3">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          We Provide Professional Service
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro quisquam
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  
                  </Accordion>
                  {/* accordion */}
                </Col>
                <Col lg="6">
                  <div className="our-choose-counter-area mt-30">
                    <Row>
                      <div className="col-md-6 col-sm-6">
                        <div
                          className="our-choose-counter wow slideInUp"
                          data-wow-duration=".5s"
                          data-wow-delay="0s"
                        >
                          <sub>
                            <span className="counter">569</span> <sup>+</sup>
                          </sub>
                          <span>Projct Complate</span>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptsantium doloremque laudantium
                          </p>
                        </div>
                        <div
                          className="our-choose-counter wow slideInUp mt-55"
                          data-wow-duration="1s"
                          data-wow-delay="0s"
                        >
                          <sub>
                            <span className="counter">783</span> <sup>+</sup>
                          </sub>
                          <span>Business Partners</span>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptsantium doloremque laudantium
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div
                          className="our-choose-counter wow slideInUp"
                          data-wow-duration="1.5s"
                          data-wow-delay="0s"
                        >
                          <sub>
                            <span className="counter">356</span> <sup>+</sup>
                          </sub>
                          <span>Happy Clients</span>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptsantium doloremque laudantium
                          </p>
                        </div>
                        <div
                          className="our-choose-counter wow slideInUp mt-55"
                          data-wow-duration="2s"
                          data-wow-delay="0s"
                        >
                          <sub>
                            <span className="counter">894</span> <sup>+</sup>
                          </sub>
                          <span>IT Consultant</span>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptsantium doloremque laudantium
                          </p>
                        </div>
                      </div>
                      {/* our choose counter */}
                    </Row>
                    {/* row */}
                  </div>
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
         );
    }
}
 
export default OueChoosePart;