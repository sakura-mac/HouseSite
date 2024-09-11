import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

class LatestNewsPart extends React.Component {

    render() { 
        return ( 
          <div className="latest-news-area gray-bg">
            <Container>
              <Row className="justify-content-center">
                <Col lg="6">
                  <div className="section-title text-center">
                    <span>latest news</span>
                    <h2 className="title">Read Our Latest News &amp; Blog</h2>
                  </div>
                  {/* sction title */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
            <div className="letast-news-grid white-bg  ml-40 mr-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <div className="latest-news">
                      <Row>
                        <div
                          className="col-lg-4 col-md-6 wow slideInUp"
                          data-wow-duration=".5s"
                          data-wow-delay="0s"
                        >
                          <div className="letest-news-item mt-30">
                            <span>By Admin, 05 Aug 2019</span>
                            <h4 className="title">
                              <Link to={"blog-details"}>
                                Monthly Web Development Update Design Ethics &amp; Clarity
                                Over Solution System
                              </Link>
                            </h4>
                            <p>
                              Nemo enim ipsam voluptatem quia voluptas sip erntur aut odit
                              aut fugit, sed quia consequunturm agni dolores eos qui
                              ratione voluptatem
                            </p>
                            <Link to={"blog-details"} className="main-btn">
                              Read More
                              <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`} />
                            </Link>
                          </div>
                          {/* lesast news item */}
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow slideInUp"
                          data-wow-duration="1s"
                          data-wow-delay="0s"
                        >
                          <div className="letest-news-item mt-30">
                            <span>By Admin, 05 Aug 2019</span>
                            <h4 className="title">
                            <Link to={"blog-details"}>
                                Design System: What It Is And How To Create One Using
                                Indigo Design Sence
                              </Link>
                            </h4>
                            <p>
                              Nemo enim ipsam voluptatem quia voluptas sip erntur aut odit
                              aut fugit, sed quia consequunturm agni dolores eos qui
                              ratione voluptatem
                            </p>
                            <Link to={"blog-details"} className="main-btn" >
                              Read More
                              <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`} />
                            </Link>
                          </div>
                          {/* lesast news item */}
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow slideInUp"
                          data-wow-duration="1.5s"
                          data-wow-delay="0s"
                        >
                          <div className="letest-news-item mt-30">
                            <span>By Admin, 05 Aug 2019</span>
                            <h4 className="title">
                            <Link to={"blog-details"}>
                                How We Used WebAssembly To Speed Up Our Web App By 20X
                                (Case Study)
                              </Link>
                            </h4>
                            <p>
                              Nemo enim ipsam voluptatem quia voluptas sip erntur aut odit
                              aut fugit, sed quia consequunturm agni dolores eos qui
                              ratione voluptatem
                            </p>
                            <Link to={"blog-details"} className="main-btn" >
                              Read More
                              <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`} />
                            </Link>
                          </div>
                          {/* lesast news item */}
                        </div>
                      </Row>
                    </div>
                    {/* latest news */}
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
 
export default LatestNewsPart;