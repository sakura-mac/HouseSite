import React from 'react';
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class AboutIntroPart extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal = event  => {
    this.setState({isOpen: true})
    event.preventDefault()
  }

    render() { 

        return ( 
          <div className="about-intro-area pt-120">
            <Container>
             <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='TdSA7gkVYU0' onClose={() => this.setState({isOpen: false})} />
              <Row>
                <Col lg="6">
                  <div className="intro-thumb">
                    <img src="/assets/images/about-intro-thumb.jpg" alt="" />
                    <Link className="video-popup" to="http://bit.ly/2VuPnrx" onClick={this.openModal}>
                      <i className="fas fa-play" />
                    </Link>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="intri-content">
                    <span>Intro Video</span>
                    <h2 className="title">
                      How we growth <br /> our business.
                    </h2>
                    <p className="text-1">
                      The introduction of cloud and mobile technologies into enterprise
                      software.
                    </p>
                    <p className="text-2">
                      hether you are building an enterprise web portal or a
                      state-of-the-art website, you always need the right modern tools.
                      Well-built and maintained PHP frameworks provide those tools in
                      abundance, allowing maintained PHP frameworks provide those tools in
                      abundance, allowing developers to save time, re-use code, and
                      streamline the back end. As software development tools continuously.
                    </p>
                    <Link
                      className="main-btn wow fadeInUp"
                      to={"/"}
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                    >
                      Learn More
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
         );
    }
}
 
export default AboutIntroPart;