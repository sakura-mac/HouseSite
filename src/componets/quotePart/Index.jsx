import React from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from 'react-bootstrap';

class QuotePart extends React.Component {

  formHandle = event => {
    toast.success("Thank you for submite quote!");
    event.preventDefault();
  }

  render() { 
    return ( 
      <div className="quote-area bg_cover"
        style={{ backgroundImage: "url(/assets/images/form-bg.jpg)" }}
      >
        <div className="quote-overlay">
          <Container>
            <Row className="justify-content-center">
              <Col lg="6">
                <div className="section-title-2 text-center pl-25 pr-25">
                  <h2 className="title">Get A Free Quote</h2>
                  <p>
                    Does any industry face a more complex audience journey and
                    marketing sales process than B2B technology.
                  </p>
                </div>
                {/* section title 2 */}
              </Col>
            </Row>
            {/* row */}
            <div className="quote-form">
              <form action="index" onSubmit={this.formHandle}>
                <Row>
                  <Col lg="6">
                    <div className="input-box mt-30">
                      <input type="text" placeholder="Enter your name" />
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="input-box mt-30">
                      <input type="email" placeholder="Enter your email" />
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className="input-box text-center mt-30">
                      <textarea
                        name="index"
                        id="index"
                        cols={30}
                        rows={10}
                        placeholder="Enter your subject"
                        defaultValue={""}
                      />
                      <button
                        className="main-btn wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                        type="submit"
                      >
                        Get A Free Quote
                      </button>
                      <FontAwesomeIcon icon={faEdit} />
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
            {/* quote form */}
          </Container>
          {/* container */}
        </div>
      </div>
    );
  }
}
 
export default QuotePart;