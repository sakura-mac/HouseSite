import React from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class ChoosePart extends React.Component {

  
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal = event  => {
    this.setState({isOpen: true});
    event.preventDefault();
  }

  render() { 
      return ( 
        <div className="choose-area">
          <Container>
            <Row>
              <Col lg="6">
                <div className="section-title">
                  <span>Who we are</span>
                  <h3 className="title">Why Choose Us</h3>
                </div>
                <div className="choose-cat">
                  <div
                    className="choose-cat-item mt-40 wow fadeInLeft"
                    data-wow-duration=".5s"
                    data-wow-delay=".4s"
                  >
                    <h4 className="title">Information Technology</h4>
                    <p>
                      Many aspects of computing and technology and the term is more
                      recognizable than before.
                    </p>
                    <i className="fal fa-check" />
                  </div>
                  <div
                    className="choose-cat-item mt-40 wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".6s"
                  >
                    <h4 className="title">Information Technology</h4>
                    <p>
                      Many aspects of computing and technology and the term is more
                      recognizable than before.
                    </p>
                    <i className="fal fa-check" />
                  </div>
                  <div
                    className="choose-cat-item mt-40 wow fadeInLeft"
                    data-wow-duration="1.5s"
                    data-wow-delay=".8s"
                  >
                    <h4 className="title">Information Technology</h4>
                    <p>
                      Many aspects of computing and technology and the term is more
                      recognizable than before.
                    </p>
                    <i className="fal fa-check" />
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="choose-thumb-area mt-30">
                  <div className="choose-thumb-1">
                    <img
                      className="item-1"
                      src="/assets/images/choose-thumb-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="choose-thumb-2">
                    <img
                      className="item-2"
                      src="/assets/images/choose-thumb-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <div className="choose-video-thumb mt-115">
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='TdSA7gkVYU0' onClose={() => this.setState({isOpen: false})} />
                  <img src="assets/images/choose-video-thumb.jpg" alt="" />
                  <Link  to={"/home-1"} onClick={this.openModal}>
                    <i className="fal fa-play" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        );
    }
}
 
export default ChoosePart;