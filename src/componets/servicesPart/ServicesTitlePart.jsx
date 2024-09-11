import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class ServicesTitlePart extends React.Component {

    render() { 
        return ( 
        <React.Fragment> 
          {/*====== SOLUTION PART START ======*/}
          <div
            className="solution-area bg_cover"
            style={{ backgroundImage: "url(assets/images/solution-bg.jpg)" }}
          >
            <div className="solution-overlay pt-120">
              <Container>
                <Row className="align-items-center">
                  <Col lg="8">
                    <div className="solution-box">
                      <div className="solution-content">
                        <h3 className="title">Get Better Solution For Your Business</h3>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                          accusantium doloremque laudantium totam rem aperiam eaque ipsa
                        </p>
                        <div className="solution-play text-right mr-30 d-block d-lg-none">
                          <Link  className="video-popup" to={"http://bit.ly/2VuPnrx"}>
                            <i className="fas fa-play" />
                          </Link>
                        </div>
                        {/* solution play */}
                      </div>
                    </div>
                    {/* solution box */}
                  </Col>
                  <Col lg="4">
                    <div className="solution-play text-right mr-30 d-none d-lg-block">
                      <Link  className="video-popup" to={"http://bit.ly/2VuPnrx"}>
                        <i className="fas fa-play" />
                      </Link>
                    </div>
                    {/* solution play */}
                  </Col>
                </Row>
                {/* row */}
              </Container>
              {/* container */}
            </div>
          </div>
          {/*====== SOLUTION PART ENDS ======*/}
          {/*====== SERVICES TITLE PART START ======*/}
          <div className="services-title-area">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <div className="services-title-item text-center">
                    <div className="ring-shape" />
                    <span>Our latest services</span>
                    <h3 className="title">
                      We Offer Better Soluation For Your IT Business
                    </h3>
                  </div>
                  {/* services title item */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
          {/*====== SERVICES TITLE PART ENDS ======*/}
        </React.Fragment>
        );
    }
}
 
export default ServicesTitlePart;