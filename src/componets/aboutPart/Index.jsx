import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
} from '@fortawesome/free-solid-svg-icons';
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from 'react-bootstrap';

class AboutPart extends React.Component {

    render() { 
        return ( 
            <React.Fragment>
{
  /*====== ABOUT PART START ======*/
}
<div className="about-area pt-90 pb-120">
  <Container>
    <Row className="align-items-center">
      <Col lg="6" md="12" className="order-2 order-lg-1">
        <div className="about-thumb mt-30">
          <img src="/assets/images/about-thumb.jpg" alt="" />
        </div>
        {/* about thumb */}
      </Col>
      <Col lg="6" md="12" className="order-1 order-lg-2">
        <div className="about-item mt-30">
          <span>About Us</span>
          <h3 className="title">You can't use up creativity.</h3>
          <p>
            Does any industry face a more complex audience journey and marketing
            sales process than B2B technology? Consider the number of people who
            influence a sale, the length of the decision-making cycle, the
            competing interests of the people who purchase, implement, manage,
            and use the technology. It’s a lot meaningful content here.
          </p>
          <div className="about-experience">
            <h3>30</h3>
            <span>
              Years Of <br /> Experience
            </span>
          </div>
          <ul>
            <li>
              <Link
                className="main-btn wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                to={"about"}
              >
                Learn More
              </Link>
            </li>
            <li>
              <Link
                className="main-btn main-btn-2 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".5s"
                to={"/"}
              >
                <FontAwesomeIcon icon={faVideo} className={`pr-1`}/>

                Intro Video
              </Link>
            </li>
          </ul>
        </div>
        {/* about item */}
      </Col>
    </Row>
    {/* row */}
  </Container>
  {/* container */}
</div>;
{
  /*====== ABOUT PART ENDS ======*/
}

            </React.Fragment>
         );
    }
}
 
export default AboutPart;