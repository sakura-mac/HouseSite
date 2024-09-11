import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class TeamPart extends React.Component {

    render() { 
        return ( 
          <div className="team-area gray-bg pt-115">
            <Container>
              <Row className="justify-content-center">
                <Col lg="8">
                  <div className="section-title text-center">
                    <span>team</span>
                    <h2 className="title">Our Leadership</h2>
                  </div>
                  {/* section title */}
                </Col>
              </Row>
              {/* row */}
              <Row>
                <Col lg="3" md="4" sm="6">
                  <div className="single-team mt-30">
                    <div className="team-thumb">
                      <img src="/assets/images/team-1.png" alt="" />
                    </div>
                    <div className="team-content text-center">
                      <h5 className="title">Rosalina D. William</h5>
                      <span>Founder</span>
                    </div>
                  </div>
                  {/* single team */}
                </Col>
                <Col lg="3" md="4" sm="6">
                  <div className="single-team mt-30">
                    <div className="team-thumb">
                      <img src="assets/images/team-2.png" alt="" />
                    </div>
                    <div className="team-content text-center">
                      <h5 className="title">Kelian M. Bappe</h5>
                      <span>ceo</span>
                    </div>
                  </div>
                  {/* single team */}
                </Col>
                <Col lg="3" md="4" sm="6">
                  <div className="single-team mt-30">
                    <div className="team-thumb">
                      <img src="assets/images/team-3.png" alt="" />
                    </div>
                    <div className="team-content text-center">
                      <h5 className="title">Helix H. Hiliam</h5>
                      <span>designer</span>
                    </div>
                  </div>
                  {/* single team */}
                </Col>
                <Col lg="3" md="4" sm="6">
                  <div className="single-team mt-30">
                    <div className="team-thumb">
                      <img src="/assets/images/team-4.png" alt="" />
                    </div>
                    <div className="team-content text-center">
                      <h5 className="title">Kingopoli G. George</h5>
                      <span>developer</span>
                    </div>
                  </div>
                  {/* single team */}
                </Col>
                <Col lg="3" md="4" sm="6">
                  <div className="single-team mt-30">
                    <div className="team-thumb">
                      <img src="/assets/images/team-5.png" alt="" />
                    </div>
                    <div className="team-content text-center">
                      <h5 className="title">Romada U. Ubodobo</h5>
                      <span>game designer</span>
                    </div>
                  </div>
                  {/* single team */}
                </Col>
                <Col lg="3" md="4" sm="6">
                  <div className="single-team mt-30">
                    <div className="team-thumb">
                      <img src="/assets/images/team-6.png" alt="" />
                    </div>
                    <div className="team-content text-center">
                      <h5 className="title">Yellow Y. Yankee</h5>
                      <span>consultant</span>
                    </div>
                  </div>
                  {/* single team */}
                </Col>
                <Col lg="3" md="4" sm="6">
                  <div className="single-team mt-30">
                    <div className="team-thumb">
                      <img src="/assets/images/team-7.png" alt="" />
                    </div>
                    <div className="team-content text-center">
                      <h5 className="title">Daddy Yankee</h5>
                      <span>support manager</span>
                    </div>
                  </div>
                  {/* single team */}
                </Col>
                <Col lg="3" md="4" sm="6">
                  <div className="single-team mt-30">
                    <div className="team-thumb">
                      <img src="/assets/images/team-8.png" alt="" />
                    </div>
                    <div className="team-content text-center">
                      <h5 className="title">Limbo Re Limbo</h5>
                      <span>seo specialist</span>
                    </div>
                  </div>
                  {/* single team */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
         );
    }
}
 
export default TeamPart;