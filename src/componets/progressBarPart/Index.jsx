import React from 'react';
import { Container, Row } from 'react-bootstrap';

class ProgressBarPart extends React.Component {

    render() { 
        return ( 
          <div className="Progress-bar-area mt-150 mb-95">
            <Container>
              <Row className="justify-content-center">
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-duration=".5s"
                  data-wow-delay=".1s"
                >
                  <div className="Progress-bar-item mt-30" id="circle1">
                    <div className="Progress-bar-content text-center">
                      <i className="fal fa-map" />
                      <h3 className="title">
                        <span className="counter">280</span>
                      </h3>
                    </div>
                  </div>
                  {/* Progress bar item */}
                </div>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <div className="Progress-bar-item mt-30" id="circle2">
                    <div className="Progress-bar-content text-center">
                      <i className="fal fa-chart-bar" />
                      <h3 className="title">
                        <span className="counter">782</span>
                      </h3>
                    </div>
                  </div>
                  {/* Progress bar item */}
                </div>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay=".6s"
                >
                  <div className="Progress-bar-item mt-30" id="circle3">
                    <div className="Progress-bar-content text-center">
                      <i className="fal fa-chart-pie" />
                      <h3 className="title">
                        <span className="counter">9</span>m
                      </h3>
                    </div>
                  </div>
                  {/* Progress bar item */}
                </div>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".9s"
                >
                  <div className="Progress-bar-item mt-30" id="circle4">
                    <div className="Progress-bar-content text-center">
                      <i className="fal fa-user-friends" />
                      <h3 className="title">
                        <span className="counter">100</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Progress bar item */}
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
         );
    }
}
 
export default ProgressBarPart;