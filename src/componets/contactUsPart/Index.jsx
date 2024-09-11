import React from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faEdit, faEnvelopeOpen, faLongArrowAltRight, faPencilAlt, faPhone, faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

class ContactUsPart extends React.Component {

  formHandle = event => {
    toast.success("Thank you for contact with us!");
    event.preventDefault();
  }

    render() { 
      return ( 
        <div className="contact-us-area bg_cover"
          style={{ backgroundImage: "url(assets/images/contact-bg.jpg)" }}
        >
          <div className="contact-overlay">
            <Container>
              <Row className="justify-content-center">
                <Col lg="6">
                  <div className="section-title text-center">
                    <span>contact us</span>
                    <h2 className="title">Join Us To Get Free Consultations</h2>
                  </div>
                  {/* sevtion title */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
            <Container>
              <Row>
                <Col lg="12">
                  <div className="contact-details d-flex">
                    <div
                      className="contact-thumb wow slideInLeft"
                      data-wow-duration=".5s"
                      data-wow-delay="0s"
                    >
                      <img src="/assets/images/contact-man.jpg" alt="" />
                    </div>
                    <div className="contact-form-area">
                      <form action="" onSubmit={this.formHandle}>
                        <div className="input-title">
                          <h3 className="title">
                            Don't Hesitate To Contact With Us, Say Hello......
                          </h3>
                        </div>
                        {/* input title */}
                        <Row>
                          <Col lg="6">
                            <div className="input-box mt-30">
                              <input type="text" placeholder="Full Name Here" />

                              <FontAwesomeIcon icon={faUser} style={{ position: "absolute",
                                right: "0",
                                top: "15px",
                                color: "#0c59db"
                              }}/>
                            </div>
                            {/* input box */}
                          </Col>
                          <Col lg="6">
                            <div className="input-box mt-30">
                              <input type="email" placeholder="Email Here" />
                              <FontAwesomeIcon icon={faEnvelopeOpen} style={{ position: "absolute",
                                right: "0",
                                top: "15px",
                                color: "#0c59db"
                              }}/>
                            </div>
                            {/* input box */}
                          </Col>
                          <Col lg="6">
                            <div className="input-box mt-30">
                              <input type="text" placeholder="Phone No" />
                              <FontAwesomeIcon icon={faPhone} style={{ position: "absolute",
                                right: "0",
                                top: "15px",
                                color: "#0c59db"
                              }}/>
                            </div>
                            {/* input box */}
                          </Col>
                          <Col lg="6">
                            <div className="input-box mt-30">
                              <input type="text" placeholder="Subject" />
                              <FontAwesomeIcon icon={faEdit} style={{ position: "absolute",
                                right: "0",
                                top: "15px",
                                color: "#0c59db"
                              }}/>
                            </div>
                            {/* input box */}
                          </Col>
                          <Col lg="12">
                            <div className="input-box mt-30">
                              <textarea
                                name="index"
                                id="index"
                                cols={30}
                                rows={10}
                                placeholder="Message Us"
                                defaultValue={""}
                              />
                              <FontAwesomeIcon icon={faPencilAlt} style={{ position: "absolute",
                                right: "0",
                                top: "15px",
                                color: "#0c59db"
                              }}/>
                              <button
                                className="main-btn wow slideInUp"
                                data-wow-duration="1.5s"
                                data-wow-delay="0s"
                                type="submit"
                              >
                                Send Message
                                <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`} style={{ position: "absolute",
                                  right: "0",
                                  top: "15px",
                                  color: "#0c59db"
                                }}/>
                              </button>
                            </div>
                            {/* input box */}
                          </Col>
                        </Row>
                      </form>
                    </div>
                  </div>
                  {/* contact details */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
        </div>
        );
    }
}
 
export default ContactUsPart;