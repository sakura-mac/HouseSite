import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

class AbotFaqPart extends React.Component {

    render() { 
        return ( 
          <div
            className="about-faq-area pb-100 bg_cover"
            style={{ backgroundImage: "url(assets/images/faq-bg.jpg)" }}
          >
            <Container>
              <Row>
                <Col lg="6">
                  <div className="about-faq-content">
                    <span>FAQ</span>
                    <h2 className="title">Get Every answer from here.</h2>
                  </div>

                  <div className="faq-accordion-3 mt-30">
                    <Accordion defaultActiveKey="0">
                    {[0, 1,2,3,4,5].map((key) => (
                    <Card
                      key={key}
                      className="card wow fadeInLeft"
                      data-wow-duration=".1.2s"
                      data-wow-delay=".2s"
                    >
                      <Card.Header>
                        <Accordion.Toggle 
                          as={Link}
                          eventKey={key}
                          data-wow-duration=".1.2s"
                          data-wow-delay=".2s"
                        >

                          <FontAwesomeIcon icon={faMagic} className="mr-2" />
                          Technical content may have persuasive objectives
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={key}>
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
                  ))}
                      
                    </Accordion>
                  </div>
                  {/* faq accordion */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
         );
    }
}
 
export default AbotFaqPart;