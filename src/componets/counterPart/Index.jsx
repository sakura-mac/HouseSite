import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class CounterPart extends React.Component {

    render() { 
      return ( 
        <div className="counter-area bg_cover pt-80 pb-115"
          style={{ backgroundImage: "url(assets/images/video-bg.jpg)" }}
        >
          <Container>
            <Row>
              <Col lg="3" md="6" sm="6">
                <div className="counter-item mt-30">
                  <h3 className="title">
                    <span className="counter">869</span>+
                  </h3>
                  <p>Project We Have Done</p>
                  <i className="fal fa-box" />
                </div>
              </Col>
              <Col lg="3" md="6" sm="6">
                <div className="counter-item mt-30">
                  <h3 className="title">
                    <span className="counter">100</span>+
                  </h3>
                  <p>People Involved With Us</p>
                  <i className="fal fa-users" />
                </div>
              </Col>
              <Col lg="3" md="6" sm="6">
                <div className="counter-item mt-30">
                  <h3 className="title">
                    <span className="counter">50</span>+
                  </h3>
                  <p>We Are Worldwide</p>
                  <i className="fal fa-globe" />
                </div>
              </Col>
              <Col lg="3" md="6" sm="6">
                <div className="counter-item mt-30">
                  <h3 className="title">
                    <span className="counter">10</span>+
                  </h3>
                  <p>We Got Too Much Awards</p>
                  <i className="fal fa-award" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        );
    }
}
 
export default CounterPart;