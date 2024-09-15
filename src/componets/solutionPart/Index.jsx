import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import VideoModal from './VideoModal'; // 确保路径正确

class SolutionPart extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(event) {
    this.setState({ isOpen: true });
    event.preventDefault();
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
        <div className="solution-area bg_cover" style={{ backgroundImage: "url(/assets/images/solution-bg.jpg)" }}>
          <div className="solution-overlay pt-120">
            <Container>
              <Row className="align-items-center">
                <Col lg="8">
                  <div className="solution-box">
                    <div className="solution-content">
                      <h3 className="title">集团鸟瞰</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium totam rem aperiam eaque ipsa
                      </p>

                      {/* Solution play for mobile */}
                      <div className="solution-play text-right mr-30 d-block d-lg-none">
                        <Link to="#" className="video-popup" onClick={this.openModal}>
                          <FontAwesomeIcon icon={faPlay} />
                        </Link>
                      </div>
                      {/* solution play */}
                    </div>
                  </div>
                  {/* solution box */}
                </Col>
                <Col lg="4">
                  <div className="solution-play text-right mr-30 d-none d-lg-block">
                    <Link to="#" className="video-popup" onClick={this.openModal}>
                      <FontAwesomeIcon icon={faPlay} />
                    </Link>
                  </div>
                  {/* solution play */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
          <VideoModal isOpen={this.state.isOpen} onClose={this.closeModal} />
        </div>
    );
  }
}

export default SolutionPart;
