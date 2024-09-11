import React from 'react';
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

class SolutionPart extends React.Component {

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
          <div className="solution-area bg_cover"
            style={{ backgroundImage: "url(/assets/images/solution-bg.jpg)" }}
          >
            <div className="solution-overlay pt-120">
              <Container>
                <Row className="align-items-center">
                  <Col lg="8">
                    <div className="solution-box">
                      <div className="solution-content">
                        <h3 className="title">Get Better Solution For Your Business</h3>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                          accusantium doloremque laudantium totam rem aperiam eaque ipsa
                        </p>

                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='TdSA7gkVYU0' onClose={() => this.setState({isOpen: false})} />

                        <div className="solution-play text-right mr-30 d-block d-lg-none">
                          <Link  to={"http://bit.ly/2VuPnrx"} className="video-popup" onClick={this.openModal}>
                            <FontAwesomeIcon icon={faPlay}/>
                          </Link>
                        </div>
                        {/* solution play */}
                      </div>
                    </div>
                    {/* solution box */}
                  </Col>
                  <Col lg="4">
                    <div className="solution-play text-right mr-30 d-none d-lg-block">
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='TdSA7gkVYU0' onClose={() => this.setState({isOpen: false})} />

                      <Link  className="video-popup" to={"http://bit.ly/2VuPnrx"}  onClick={this.openModal}>
                        <FontAwesomeIcon icon={faPlay}/>
                      </Link>
                    </div>
                    {/* solution play */}
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
 
export default SolutionPart;