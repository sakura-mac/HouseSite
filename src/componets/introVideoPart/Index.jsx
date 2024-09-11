import React from 'react';
//import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
} from '@fortawesome/free-solid-svg-icons';
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from 'react-bootstrap';

class IntroVideoPart extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal (e) {
    e.preventDefault();
    this.setState({isOpen: true})
  }

  render() { 
  
      return ( 
        <div className="intro-video-area bg_cover"
          style={{ backgroundImage: "url(assets/images/intro-video-bg.jpg)" }}
        >
          <div className="intro-overlay">
            <Container>
              <Row>
                <Col lg="6">
                  <div className="intro-video-content mt-30">
                    <span>Intro Video</span>
                    <h2 className="title">How we growth our business.</h2>
                    <p className="text-1">
                      The introduction of cloud and mobile technologies into enterprise
                      software.
                    </p>
                    <p className="text-2">
                      hether you are building an enterprise web portal or a
                      state-of-the-art website, you always need the right modern tools.
                      Well-built and maintained PHP frameworks provide those tools in
                      abundance, allowing maintained PHP frameworks provide those tools
                      in abundance, allowing developers to save time, re-use code, and
                      streamline the back end. As software development tools
                      continuously.
                    </p>
                    <Link 
                      className="main-btn wow fadeInLeft"
                      data-wow-duration="1s"
                      data-wow-delay=".1s"
                      to={"/"}
                    >
                      Learn More
                    </Link>
                  </div>
                  {/* intro video content */}
                </Col>
                <Col lg="6">
                  <div className="intro-thumb mt-30">
                  <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                    <img src="assets/images/intro-thumb.jpg" alt="" />
                    <Link  className="video-popup" to={"http://bit.ly/2VuPnrx"}  onClick={this.openModal}>
                      <FontAwesomeIcon icon={faPlay} size={`3x`} className={`pl-2 pt-3`}/>
                    </Link>
                  </div>
                  {/* intro thumb */}
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
 
export default IntroVideoPart;