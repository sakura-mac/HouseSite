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
                    <span>who we are</span>
                    <h2 className="title">
                      We Work Hard Play Hard Explore Creative Mmind
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
                      Perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      dolorem-quelaudantium, totam rem aperiam eaque ipsa quae ab illo
                      inventore veritatis et quasi architecto beatae vitae dicta sunt
                      explicabo. Nemo enim ipsam voluptatem quiavoluptas sit aspernatur
                      aut odit aut fugit, sed quia quuntur magni dolores eos ratione
                      voluptatem sequi nesciunt eque porroe.
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
                    <h5 className="title">IT Soluations</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
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
                    <h5 className="title">Security System</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
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
                    <h5 className="title">Web Development</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
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
                    <h5 className="title">Database Security</h5>
                    <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
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
            <div className="what-we-are-shape-2">
              <img src="/assets/images/what-we-are-shape-2.png" alt="shape" />
            </div>
          </div>
         );
    }
}
 
export default WhoWeAreArea;