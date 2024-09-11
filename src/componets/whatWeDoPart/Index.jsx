import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
} from '@fortawesome/free-solid-svg-icons';
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from 'react-bootstrap';

class WhatWeDoPart extends React.Component {

    render() { 
        return ( 
          <div className="what-we-do-area gray-bg pt-105 pb-120">
            <Container>
              <Row>
                <div className="col-lg-5 col-md-7">
                  <div className="section-title-2">
                    <h2 className="title">What We Do</h2>
                    <p>
                      Does any industry face a more complex audience journey and marketing
                      sales process than B2B technology.
                    </p>
                  </div>
                  {/* section title 2 */}
                </div>
              </Row>
              <Row>
                <Col lg="4" md="6">
                  <div className="what-we-do-item mt-30">
                    <Link  to={"services"}>
                      <h6>Web Element Research </h6>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                  </div>
                  {/* what we do item */}
                  
                </Col>
                <Col lg="4" md="6">
                  <div className="what-we-do-item mt-30">
                    <Link  to={"services"}>
                      <h6>Web Development </h6>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                  </div>
                  {/* what we do item */}
                </Col>
                <Col lg="4" md="6">
                  <div className="what-we-do-item mt-30">
                    <Link  to={"services"}>
                      <h6>SEO Service </h6>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                  </div>
                  {/* what we do item */}
                </Col>
                <Col lg="4" md="6">
                  <div className="what-we-do-item mt-30">
                    <Link  to={"services"}>
                      <h6>Power Redesign </h6>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                  </div>
                  {/* what we do item */}
                </Col>
                <Col lg="4" md="6">
                  <div className="what-we-do-item mt-30">
                    <Link  to={"services"}>
                      <h6>UX Design </h6>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                  </div>
                  {/* what we do item */}
                </Col>
                <Col lg="4" md="6">
                  <div className="what-we-do-item mt-30">
                    <Link  to={"services"}>
                      <h6>UI Design </h6>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                  </div>
                  {/* what we do item */}
                </Col>
                <Col lg="4" md="6">
                  <div className="what-we-do-item mt-30">
                    <Link  to={"services"}>
                      <h6>Web Design</h6>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                  </div>
                  {/* what we do item */}
                </Col>
                <Col lg="4" md="6">
                  <div className="what-we-do-item mt-30">
                    <Link  to={"services"}>
                      <h6>Game Design</h6>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                  </div>
                  {/* what we do item */}
                </Col>
                <Col lg="4" md="6">
                  <div className="what-we-do-item mt-30">
                    <Link  to={"services"}>
                      <h6>Mobile App Design </h6>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                  </div>
                  {/* what we do item */}
                </Col>
                <Col lg="4" md="6">
                  <div className="what-we-do-item mt-30">
                    <Link  to={"services"}>
                      <h6>Icon Design </h6>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                  </div>
                  {/* what we do item */}
                </Col>
                <Col lg="4" md="6">
                  <div className="what-we-do-item mt-30">
                    <Link  to={"services"}>
                      <h6>Domain &amp; Hosting </h6>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                  </div>
                  {/* what we do item */}
                </Col>
                <Col lg="4" md="6">
                  <div className="what-we-do-item mt-30">
                    <Link  to={"services"}>
                      <h6>Composer Develop </h6>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                  </div>
                  {/* what we do item */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
         );
    }
}
 
export default WhatWeDoPart;