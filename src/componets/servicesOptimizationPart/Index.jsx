import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class ServicesOptimizationPart extends React.Component {

    render() { 
        return ( 
          <div className="services-optimization-area pt-80 pb-120">
            <Container>
              <Row className="align-items-center">
                <Col lg="4" md="6">
                  <div className="services-optimization-thumb mt-40">
                    <img src="assets/images/services-op-1.jpg" alt="" />
                  </div>
                  <div className="services-optimization-thumb-2">
                    <img src="assets/images/services-op-2.jpg" alt="" />
                  </div>
                </Col>
                <Col lg="6" className="order-lg-2 order-1">
                  <div className="services-optimization-content mt-40">
                    <span>Search Enging Optimization</span>
                    <h3 className="title">Nothing to do anything.</h3>
                    <p>
                      Does any industry face a more complex audience journey and marketing
                      sales process than B2B technology? Consider the number of people who
                      influence a sale, the length of the decision-making cycle, the
                      competing interests of the people who purchase, implement, manage,
                      and use the technology. It’s a lot meaningful content here.
                    </p>
                    <div className="action-support-item">
                      <p>Make A Call</p>
                      <span>897 876 76 56 4</span>
                      <i className="fal fa-phone" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
         );
    }
}
 
export default ServicesOptimizationPart;