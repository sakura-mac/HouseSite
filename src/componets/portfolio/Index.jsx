import React from 'react';
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from 'react-bootstrap';

class PortfolioPart extends React.Component {
      
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
          <React.Fragment>
            <div
            className="video-area bg_cover"
            style={{ backgroundImage: "url(assets/images/video-bg.jpg)" }}
          >
            <Container>
              <Row className="justify-content-center">
                <Col lg="8">
                  <div className="video-item">
                  <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='TdSA7gkVYU0' onClose={() => this.setState({isOpen: false})} />
                    <Link  className="video-popup" to={"http://bit.ly/2VuPnrx"} onClick={this.openModal}>
                      <FontAwesomeIcon icon={faPlay} />

                    </Link>
                    <br />
                    <span>Portfolio</span>
                    <h3 className="title">We Have Done So Much Stuffs</h3>
                  </div>
                  {/* video item */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
            <div className="video-thumb-1">
              <img src="/assets/images/video-item-1.png" alt="" />
            </div>
            <div className="video-thumb-2">
              <img src="/assets/images/video-item-2.png" alt="" />
            </div>
          </div>
         
          <div className="portfolio-area">
            <Container>
              <div className="row portfolio-active">
                
                <Col lg="4">
                  <div className="single-portfolio mb-30">
                    <div className="portfolio-thumb">
                      <img src="/assets/images/portfolio-1.jpg" alt="" />
                    </div>
                    <div className="portfolio-content">
                      <span>Digital Computing</span>
                      <h5 className="title">
                        Aspects of computing and technology and the term
                      </h5>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass many aspects of computing
                      </p>
                    </div>
                  </div>
                  {/* single portfolio */}
                </Col>
                <Col lg="4">
                  <div className="single-portfolio mb-30">
                    <div className="portfolio-thumb">
                      <img src="assets/images/portfolio-2.jpg" alt="" />
                    </div>
                    <div className="portfolio-content">
                      <span>it consultant</span>
                      <h5 className="title">
                        Today, the term Inform tion Technology (IT)
                      </h5>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass many aspects of computing
                      </p>
                    </div>
                  </div>
                  {/* single portfolio */}
                </Col>
                <Col lg="4">
                  <div className="single-portfolio mb-30">
                    <div className="portfolio-thumb">
                      <img src="assets/images/portfolio-3.jpg" alt="" />
                    </div>
                    <div className="portfolio-content">
                      <span>design &amp; development</span>
                      <h5 className="title">Has ballooned to encomp ass many aspects</h5>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass many aspects of computing
                      </p>
                    </div>
                  </div>
                  {/* single portfolio */}
                </Col>
              </div>
              {/* row */}
            </Container>
            {/* container */}
          </div>
          </React.Fragment>
         );
    }
}
 
export default PortfolioPart;