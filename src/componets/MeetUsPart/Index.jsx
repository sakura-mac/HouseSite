import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class MeetUsPart extends React.Component {

  render() { 
    return ( 
      <div className="meet-us-area">
        <Container>
          <Row>
            <Col lg="12">
              <div
                className="meet-us-item bg_cover d-flex align-items-center justify-content-between"
                style={{ backgroundImage: "url(/assets/images/meet-us-bg.jpg)" }}
              >
                <h2 className="title">
                  Preparing For Your <br /> Business Success
                </h2>
                <Link className="main-btn" to={"contact"}>
                  Meet With Us <i className="fal fa-long-arrow-right" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default MeetUsPart;