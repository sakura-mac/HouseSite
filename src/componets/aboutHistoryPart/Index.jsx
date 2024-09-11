import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class AboutHistoryPart extends React.Component {

    render() { 
        return ( 
          <div className="about-history-area">
            <Container>
              <Row className="justify-content-center">
                <Col lg="6" md="8">
                  <div className="section-title text-center">
                    <h2 className="title">Our History</h2>
                    <p>
                      Does any industry face a more complex audience journey and marketing
                      sales process than B2B technology.
                    </p>
                  </div>
                  {/* section title */}
                </Col>
              </Row>
              {/* row */}
              <Row>
                <Col lg="6" md="6">
                  <div className="history-item  pt-240">
                    <div
                      className="history-thumb wow fadeInUp"
                      data-wow-duration=".8s"
                      data-wow-delay=".1s"
                    >
                      <img src="/assets/images/history-1.jpg" alt="history" />
                    </div>
                    <div
                      className="history-content wow fadeInUp"
                      data-wow-duration=".8s"
                      data-wow-delay=".1s"
                    >
                      <span>1990 - Startup</span>
                      <h4 className="title">
                        Technical content may have per suasive objectives.
                      </h4>
                    </div>
                    <div className="number-box">
                      <span>02</span>
                    </div>
                  </div>
                  {/* history item */}
                  <div className="history-item">
                    <div
                      className="history-thumb wow fadeInUp"
                      data-wow-duration=".1s"
                      data-wow-delay=".2s"
                    >
                      <img src="/assets/images/history-2.jpg" alt="history" />
                    </div>
                    <div
                      className="history-content wow fadeInUp"
                      data-wow-duration=".1s"
                      data-wow-delay=".2s"
                    >
                      <span>1990 - Startup</span>
                      <h4 className="title">
                        Technical content may have per suasive objectives.
                      </h4>
                    </div>
                    <div className="number-box">
                      <span>04</span>
                    </div>
                    <div className="number-box-2">
                      <i className="fal fa-plus" />
                    </div>
                  </div>
                  {/* history item */}
                </Col>
                <Col lg="6" md="6">
                  <div className="history-item history-item-2">
                    <div
                      className="history-thumb wow fadeInUp"
                      data-wow-duration=".8s"
                      data-wow-delay=".1s"
                    >
                      <img src="/assets/images/history-3.jpg" alt="history" />
                    </div>
                    <div
                      className="history-content wow fadeInUp"
                      data-wow-duration=".8s"
                      data-wow-delay=".1s"
                    >
                      <span>1990 - Startup</span>
                      <h4 className="title">
                        Technical content may have per suasive objectives.
                      </h4>
                    </div>
                    <div className="number-box">
                      <span>01</span>
                    </div>
                  </div>
                  {/* history item */}
                  <div className="history-item history-item-2">
                    <div
                      className="history-thumb wow fadeInUp"
                      data-wow-duration=".1s"
                      data-wow-delay=".2s"
                    >
                      <img src="/assets/images/history-4.jpg" alt="history" />
                    </div>
                    <div
                      className="history-content wow fadeInUp"
                      data-wow-duration=".1s"
                      data-wow-delay=".2s"
                    >
                      <span>1990 - Startup</span>
                      <h4 className="title">
                        Technical content may have per suasive objectives.
                      </h4>
                    </div>
                    <div className="number-box">
                      <span>03</span>
                    </div>
                  </div>
                  {/* history item */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
         );
    }
}
 
export default AboutHistoryPart;