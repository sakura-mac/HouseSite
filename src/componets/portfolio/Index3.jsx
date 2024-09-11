import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class Portfolio3Part extends React.Component {

    render() { 
        return ( 
          <div className="portfolio-3-area pt-115 pb-120">
            <Container>
              <Row className="justify-content-center">
                <Col lg="8">
                  <div className="section-title text-center">
                    <span>Portfolio</span>
                    <h2 className="title">We Have Done So Much Stuffs</h2>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <div className="single-portfolio mt-30">
                    <div className="portfolio-thumb">
                      <img src="/assets/images/portfolio-thumb-1.jpg" alt="" />
                    </div>
                    <div className="portfolio-content">
                      <span>Digital Computing</span>
                      <Link  to={"case-details"}>
                        <h4 className="title">
                          Aspects of computing and technology and the term
                        </h4>
                      </Link>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass many aspects of computing
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay=".4s"
                >
                  <div className="single-portfolio mt-30">
                    <div className="portfolio-thumb">
                      <img src="assets/images/portfolio-thumb-2.jpg" alt="" />
                    </div>
                    <div className="portfolio-content">
                      <span>it consultant</span>
                      <Link  to={"case-details"}>
                        <h4 className="title">
                          Today, the term Informati on Technology (IT)
                        </h4>
                      </Link>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass many aspects of computing
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="1.4s"
                  data-wow-delay=".6s"
                >
                  <div className="single-portfolio mt-30">
                    <div className="portfolio-thumb">
                      <img src="assets/images/portfolio-thumb-3.jpg" alt="" />
                    </div>
                    <div className="portfolio-content">
                      <span>design &amp; development</span>
                      <Link  to={"case-details"}>
                        <h4 className="title">
                          Has ballooned to encomp ass many aspects
                        </h4>
                      </Link>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass many aspects of computing
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="1.6s"
                  data-wow-delay=".8s"
                >
                  <div className="single-portfolio mt-30">
                    <div className="portfolio-thumb">
                      <img src="assets/images/portfolio-thumb-4.jpg" alt="" />
                    </div>
                    <div className="portfolio-content">
                      <span>ui/ux</span>
                      <Link  to={"case-details"}>
                        <h4 className="title">
                          Aspects of computing and technology and the term
                        </h4>
                      </Link>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass many aspects of computing
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="1.8s"
                  data-wow-delay="1s"
                >
                  <div className="single-portfolio mt-30">
                    <div className="portfolio-thumb">
                      <img src="assets/images/portfolio-thumb-5.jpg" alt="" />
                    </div>
                    <div className="portfolio-content">
                      <span>game design</span>
                      <Link  to={"case-details"}>
                        <h4 className="title">
                          Today, the term Informati on Technology (IT)
                        </h4>
                      </Link>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass many aspects of computing
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="1.2s"
                >
                  <div className="single-portfolio mt-30">
                    <div className="portfolio-thumb">
                      <img src="assets/images/portfolio-thumb-6.jpg" alt="" />
                    </div>
                    <div className="portfolio-content">
                      <span>interior design</span>
                      <Link  to={"case-details"}>
                        <h4 className="title">
                          Has ballooned to encomp ass many aspects
                        </h4>
                      </Link>
                      <p>
                        Today, the term Information Technology (IT) has ballooned to
                        encompass many aspects of computing
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </div>
         );
    }
}
 
export default Portfolio3Part;