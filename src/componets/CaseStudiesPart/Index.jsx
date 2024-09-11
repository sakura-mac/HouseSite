import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class CaseStudiesPart extends Component {

    render() { 
        return ( 
          <div className="case-studies-area">
            <Container>
              <Row>
                <div className="col-lg-5">
                  <div className="section-title">
                    <span>Latest Case Studies</span>
                    <h2 className="title">Reads Our Recent Case Studies </h2>
                  </div>
                  {/* section title */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
            <div className="container-fluid pl-70 pr-70">
              <div className="row no-gutters case-studies-active">
                <div className="col-lg-3">
                  <div className="single-case-studies mt-30">
                    <img src="assets/images/case-studies-1.jpg" alt="case-studies" />
                    <div className="case-overlay">
                      <div className="item">
                        <span>IT / Solutions </span>
                        <h5 className="title">
                          How To Improve <br /> IT knowledge
                        </h5>
                      </div>
                      <Link  to={"case-details"}>
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  {/* single case studies */}
                </div>
                <div className="col-lg-3">
                  <div className="single-case-studies mt-30">
                    <img src="assets/images/case-studies-2.jpg" alt="case-studies" />
                    <div className="case-overlay">
                      <div className="item">
                        <span>Product Design</span>
                        <h5 className="title">
                          Develop Your IT <br /> Business Growth
                        </h5>
                      </div>
                      <Link  to={"case-details"}>
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  {/* single case studies */}
                </div>
                <div className="col-lg-3">
                  <div className="single-case-studies mt-30">
                    <img src="assets/images/case-studies-3.jpg" alt="case-studies" />
                    <div className="case-overlay">
                      <div className="item">
                        <span>Consulting</span>
                        <h5 className="title">
                          Management Your <br />
                          It Solutions System
                        </h5>
                      </div>
                      <Link  to={"case-details"}>
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  {/* single case studies */}
                </div>
                <div className="col-lg-3">
                  <div className="single-case-studies mt-30">
                    <img src="assets/images/case-studies-4.jpg" alt="case-studies" />
                    <div className="case-overlay">
                      <div className="item">
                        <span>Software Solutiona</span>
                        <h5 className="title">
                          How To Control <br />
                          Your IT Customer
                        </h5>
                      </div>
                      <Link  to={"case-details"}>
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  {/* single case studies */}
                </div>
                <div className="col-lg-3">
                  <div className="single-case-studies mt-30">
                    <img src="assets/images/case-studies-2.jpg" alt="case-studies" />
                    <div className="case-overlay">
                      <div className="item">
                        <span>Product Design</span>
                        <h5 className="title">
                          Develop Your IT <br /> Business Growth
                        </h5>
                      </div>
                      <Link  to={"case-details"}>
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  {/* single case studies */}
                </div>
              </div>
              {/* row */}
            </div>
            {/* containe fluid */}
          </div>
         );
    }
}
 
export default CaseStudiesPart;