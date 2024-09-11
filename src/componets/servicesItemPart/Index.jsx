import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class ServicesItemPart extends React.Component {

    render() { 
        return ( 
          <div className="services-item-area pt-90 pb-120">
            <Container>
              <Row className="justify-content-center">
                <Col lg="4" md="6" sm="8">
                  <div className="single-services-item mt-30">
                    <img src="assets/images/services-thumb-1.jpg" alt="" />
                    <div className="services-overlay">
                      <i className="fal fa-eye-dropper" />
                      <h4 className="title">UI/UX Design</h4>
                      <p>
                        The functional goal of technical content is to help people use a
                        product successfully. The business goal must tie the content.
                      </p>
                    </div>
                  </div>
                  {/* single services */}
                </Col>
                <Col lg="4" md="6" sm="8">
                  <div className="single-services-item mt-30">
                    <img src="assets/images/services-thumb-2.jpg" alt="" />
                    <div className="services-overlay">
                      <i className="fal fa-gavel" />
                      <h4 className="title">IT Consultancy</h4>
                      <p>
                        The functional goal of technical content is to help people use a
                        product successfully. The business goal must tie the content.
                      </p>
                    </div>
                  </div>
                  {/* single services */}
                </Col>
                <Col lg="4" md="6" sm="8">
                  <div className="single-services-item mt-30">
                    <img src="assets/images/services-thumb-3.jpg" alt="" />
                    <div className="services-overlay">
                      <i className="fal fa-map-marked-alt" />
                      <h4 className="title">Technology Prof.</h4>
                      <p>
                        The functional goal of technical content is to help people use a
                        product successfully. The business goal must tie the content.
                      </p>
                    </div>
                  </div>
                  {/* single services */}
                </Col>
                <Col lg="4" md="6" sm="8">
                  <div className="single-services-item mt-30">
                    <img src="assets/images/services-thumb-5.jpg" alt="" />
                    <div className="services-overlay">
                      <i className="fal fa-hurricane" />
                      <h4 className="title">Web Development</h4>
                      <p>
                        The functional goal of technical content is to help people use a
                        product successfully. The business goal must tie the content.
                      </p>
                    </div>
                  </div>
                  {/* single services */}
                </Col>
                <Col lg="4" md="6" sm="8">
                  <div className="single-services-item mt-30">
                    <img src="assets/images/services-thumb-4.jpg" alt="" />
                    <div className="services-overlay">
                      <i className="fal fa-bezier-curve" />
                      <h4 className="title">App Development</h4>
                      <p>
                        The functional goal of technical content is to help people use a
                        product successfully. The business goal must tie the content.
                      </p>
                    </div>
                  </div>
                  {/* single services */}
                </Col>
                <Col lg="4" md="6" sm="8">
                  <div className="single-services-item mt-30">
                    <img src="assets/images/services-thumb-6.jpg" alt="" />
                    <div className="services-overlay">
                      <i className="fal fa-umbrella" />
                      <h4 className="title">Game Design</h4>
                      <p>
                        The functional goal of technical content is to help people use a
                        product successfully. The business goal must tie the content.
                      </p>
                    </div>
                  </div>
                  {/* single services */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
         );
    }
}
 
export default ServicesItemPart;