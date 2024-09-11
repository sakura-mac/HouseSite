import React from 'react';
import { toast } from 'react-toastify';
import { Container, Row, Col } from 'react-bootstrap';

class GetInTouchPart extends React.Component {

 
  formHandle = event => {
    toast.success("Thank you for contact with us!");
    event.preventDefault();
  }

    render() { 
        return ( 
          <div className="get-in-touch-area">
            <Container>

              <Row>
                <Col lg="6">
                  <div className="section-title text-left">
                    <span>Get In Touch</span>
                    <h2 className="title">Estimate For Your Projects.</h2>
                  </div>
                  {/* section title */}
                  <div className="form-area">
                    <form action="index" onSubmit={this.formHandle}>
                      <div
                        className="input-box pt-45 wow fadeInLeft"
                        data-wow-duration="1s"
                        data-wow-delay=".2s"
                      >
                        <input type="text" placeholder="Enter your name" />
                      </div>
                      <div
                        className="input-box mt-20 wow fadeInLeft"
                        data-wow-duration="1.2s"
                        data-wow-delay=".4s"
                      >
                        <input type="email" placeholder="Enter your email" />
                      </div>
                      <div
                        className="input-box mt-20 wow fadeInLeft"
                        data-wow-duration="1.4s"
                        data-wow-delay=".6s"
                      >
                        <textarea
                          name="index"
                          id="index"
                          cols={30}
                          rows={10}
                          placeholder="Enter your message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="input-box mt-20">
                        <button
                          className="main-btn wow fadeInUp"
                          data-wow-duration="1.6s"
                          data-wow-delay=".2s"
                          type="submit"
                        >
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="get-map d-none d-lg-block">
                    <iframe
                      src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993207.564767118!2d-77.9807899414373!3d42.92219345357043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1569310771254!5m2!1sen!2sbd"
                      style={{ border: 0 }}
                      allowFullScreen
                      width={600}
                      height={450}
                      title="Our Location"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
         );
    }
}
 
export default GetInTouchPart;