import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faComments,

} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

class ActionPart extends React.Component {

    render() { 
        return ( 
            <React.Fragment>
            {
              /*====== ACTION PART START ======*/
            }
            <div className="action-area">
              <div
                className="action-overlay bg_cover"
                style={{ backgroundImage: "url(assets/images/action-pattern.png)" }}
              >
                <Container>
                  <div className="action-bg">
                    <Row className="align-items-center">
                      <Col lg="8">
                        <div className="action-content">
                          <span>Call To action</span>
                          <h3 className="title">Let’s Discuss With Us Your Estimate.</h3>
                        </div>
                        {/* action content */}
                      </Col>
                      <Col lg="4">
                        <div className="action-btn text-left text-lg-right">
                          <Link className="main-btn" to={"contact"}>
                            <i className="fal fa-comments" />
                              <FontAwesomeIcon icon={faComments} className={`pr-1`} />

                              Contact Us
                          </Link>
                        </div>
                        {/* action btn */}
                      </Col>
                    </Row>
                  </div>
                  {/* row */}
                </Container>
                {/* container */}
              </div>
            </div>;
            {
              /*====== ACTION PART ENDS ======*/
            }

            </React.Fragment>
         );
    }
}
 
export default ActionPart;