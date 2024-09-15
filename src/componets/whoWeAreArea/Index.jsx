import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboard, faDatabase,
   faFingerprint, faLaptopCode, faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row } from 'react-bootstrap';

class WhoWeAreArea extends React.Component {

    render() { 
        return ( 
          <div className="who-we-are-area pt-110 pb-120">
            <Container>
              <Row>
                <div
                  className="col-lg-5 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="section-title">
                    <span>关于我们</span>
                    <h2 className="title">
                      行业积累<br/>
                      经验沉淀
                    </h2>
                  </div>
                  {/* section title */}
                </div>
                <div
                  className="col-lg-6 offset-lg-1 wow fadeInRight"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <div className="section-title">
                    <p>
                      Swalloow Homes公司成立于2022年6月。公司创始团队具有3年经历和经验。

                      多年来，公司始终坚持专心、专业、专注日本房产解决方案，帮助客户提供理想房产，
                      开拓日本财产的经营理念，通过全体员工的共同努力，公司已成为日本房地产行业的优秀企业
                    </p>
                  </div>
                  {/* section title */}
                </div>
              </Row>
              <Row>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
                  data-wow-duration=".5s"
                  data-wow-delay="0s"
                >
                  <div className="what-we-do-item text-center mt-30">
                    <FontAwesomeIcon  icon={faLaptopCode} />
                    <h5 className="title">公司资质</h5>
                    <p> 资质全面，<br />证书齐全</p>
                    <Link to={"case-details"}>
                      <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </Link>
                  </div>
                  {/* what we do item */}
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="what-we-do-item text-center mt-30">
                    <FontAwesomeIcon icon={faFingerprint}  />
                    <h5 className="title">行业认可</h5>
                    <p><br/><br/></p>
                    <Link to={"case-details"}>
                      <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </Link>
                  </div>
                  {/* what we do item */}
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <div className="what-we-do-item text-center mt-30">
                    <FontAwesomeIcon icon={faChalkboard} />
                    <h5 className="title">流程规范</h5>
                    <p><br/><br/></p>
                    <Link to={"case-details"}>
                      <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </Link>
                  </div>
                  {/* what we do item */}
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0s"
                >
                  <div className="what-we-do-item text-center mt-30">
                    <FontAwesomeIcon icon={faDatabase} />
                    <h5 className="title">团队培养</h5>
                    <p>拥有高素质专业团队，全心全意服务</p>
                    <Link to={"case-details"}>
                      <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </Link>
                  </div>
                  {/* what we do item */}
                </div>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
            <div className="what-we-are-shape-1">
              <img src="/assets/images/what-we-are-shape-1.png" alt="shape" />
            </div>
          </div>
         );
    }
}
 
export default WhoWeAreArea;