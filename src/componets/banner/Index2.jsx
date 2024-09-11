import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import bannerImg from '../../assets/images/banner-man.png';
import { Row, Col, Container } from 'react-bootstrap';


class Banner2 extends React.Component {

    render() { 
        return ( 
          <div className="banner-area">
            <Container className="position-relative">
              <Row className="row">
                <Col lg="7">
                  <div className="banner-content pt-100">
                    <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>Promote any poduct, service or online course.</span>
                    <h1 className="title wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".5s" style={{visibility: 'visible', animationDuration: '2s', animationDelay: '0.5s', animationName: 'fadeInLeft'}}>Get every it Services Here</h1>
                    <ul>
                      <li>
                          <Link className="fadeInUp wow" data-wow-duration="1s" data-wow-delay="1s" to={"services"}
                                style={{visibility: 'visible', animationDuration: '1s', animationDelay: '1s', animationName: 'fadeInUp'}}>
                              <span>
                          <FontAwesomeIcon icon={faGem} />
                      </span>
                          <p>IT Product</p>
                        </Link></li>
                      <li><Link className="btn-2 fadeInUp wow" data-wow-duration="1s" data-wow-delay="1.5s" to={"services"} style={{visibility: 'visible', animationDuration: '1s', animationDelay: '1.5s', animationName: 'fadeInUp'}}><span>
                           <FontAwesomeIcon icon={faGem} />
                      </span>
                          <p>IT Services</p>
                        </Link>
                      </li>
                    </ul>
                  </div> 
                </Col>
              </Row> 
              <div className="banner-shape d-none d-lg-block">
                <img src={bannerImg} alt="" />
              </div>
            </Container> 
          </div>
         );
    }
}
 
export default Banner2;