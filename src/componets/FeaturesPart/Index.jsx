import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalVideo from 'react-modal-video'
import { Container, Row, Col } from 'react-bootstrap';

class FeaturesPart extends React.Component {



  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal = event => {
    this.setState({isOpen: true});
    event.preventDefault();
  }

  formHandle = event => {
    toast.success("Thank you for subscrive us!");
    event.preventDefault();
  }


    render() { 
        return ( 
          <div className="features-area pt-120 pb-120">
            <Container>
            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='TdSA7gkVYU0' onClose={() => this.setState({isOpen: false})} />

              <Row>
                <Col lg="12">
                  <div className="features-item">
                    <strong>Core features</strong>
                    <h2 className="title">Get More Good Experience.</h2>
                    <span>Our knowledge of computers will help us</span>
                    <p>
                      Does any industry face a more complex audience journey and marketing
                      sales process than B2B technology? Consider the number of people who
                      influence a sale, the length of the decision-making cycle, the
                      competing interests of the people who purchase, implement, manage,
                      and use the technology. It’s a lot meaningful content here.
                    </p>
                    <ul>
                      <li>
                        <Link 
                          className="main-btn wow fadeInUp"
                          to={"about"}
                          data-wow-duration=".5s"
                          data-wow-delay=".4s"
                        >
                          Learn More
                        </Link>
                      </li>
                      <li>
                        <Link   onClick={this.openModal}
                          className="main-btn main-btn-2 wow fadeInUp"
                          to={"/"}
                          data-wow-duration="1s"
                          data-wow-delay=".6s"
                        >
                          
                          <i className="fal fa-video" />
                          Learn More
                        </Link>
                      </li>
                    </ul>
                    <img
                      className="d-none d-lg-block"
                      src="assets/images/features-thumb.jpg"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="4" md="6">
                  <div className="single-features mt-30">
                    <img src="assets/images/services-1.png" alt="" />
                    <h4 className="title">UI/UX Design</h4>
                    <p>
                      Many aspects of computing and technology and the term is more
                      recognizable than before.
                    </p>
                    <Link  to={"services-details"}>
                      <i className="fal fa-angle-right" /> Read More
                    </Link>
                  </div>
                </Col>
                <Col lg="4" md="6">
                  <div className="single-features mt-30">
                    <img src="assets/images/services-2.png" alt="" />
                    <h4 className="title">Digital Product</h4>
                    <p>
                      Many aspects of computing and technology and the term is more
                      recognizable than before.
                    </p>
                    <Link  to={"services-details"}>
                      <i className="fal fa-angle-right" /> Read More
                    </Link>
                  </div>
                </Col>
                <Col lg="4" md="6">
                  <div className="features-sub mt-30">
                    <h5 className="title">Subscribe Now</h5>
                    <p>
                      Many aspects of computing and technology and the term is more
                      recognizable than before.
                    </p>
                    <form action="index" onSubmit={this.formHandle}>
                      <div className="input-box">
                        <input type="text" placeholder="Enter your email...." />
                        <button type="submit" className="main-btn">Subscribe Now</button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
         );
    }
}
 
export default FeaturesPart;