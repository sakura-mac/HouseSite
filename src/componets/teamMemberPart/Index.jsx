import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faBehance,
  faDribbble,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function LeamSocialLink() {
  return (
      <ul>
        <li>
          <Link  to={"/"}>
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
        </li>
        <li>
          <Link  to={"/"}>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </li>
        <li>
          <Link  to={"/"}>
            <FontAwesomeIcon icon={faBehance} />
          </Link>
        </li>
        <li>
          <Link  to={"/"}>
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </li>
        <li>
          <Link  to={"/"}>
            <FontAwesomeIcon icon={faDribbble} />
          </Link>
        </li>
      </ul>
  );
}


class TeamMemberPart extends React.Component {


    render() {
        return ( 
          <div className="team-member-area">
            <Container>
              <Row className="justify-content-center">
                <Col lg="6">
                  <div className="section-title text-center">
                    <span>our team member</span>
                    <h2 className="title">Meet Our Exclusive Leadership</h2>
                  </div>
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
            <div className="container-fluid">
              <Row>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="single-team-member mt-30">
                    <img src="/assets/images/team-member-1.jpg" alt="team-member" />
                    <div className="team-member-overlay">
                      <LeamSocialLink/>
                      <h4 className="title">David Jhon Korla</h4>
                      <span>IT Consultant</span>
                    </div>
                  </div>
                  {/* single team member */}
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="single-team-member mt-30">
                    <img src="assets/images/team-member-2.jpg" alt="team-member" />
                    <div className="team-member-overlay">
                      <LeamSocialLink/>

                      <h4 className="title">David Jhon Korla</h4>
                      <span>IT Consultant</span>
                    </div>
                  </div>
                  {/* single team member */}
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="single-team-member mt-30">
                    <img src="assets/images/team-member-3.jpg" alt="team-member" />
                    <div className="team-member-overlay">
                      <LeamSocialLink/>

                      <h4 className="title">David Jhon Korla</h4>
                      <span>IT Consultant</span>
                    </div>
                  </div>
                  {/* single team member */}
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="single-team-member mt-30">
                    <img src="assets/images/team-member-4.jpg" alt="team-member" />
                    <div className="team-member-overlay">
                      <LeamSocialLink/>

                      <h4 className="title">David Jhon Korla</h4>
                      <span>IT Consultant</span>
                    </div>
                  </div>
                  {/* single team member */}
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="single-team-member mt-30">
                    <img src="assets/images/team-member-5.jpg" alt="team-member" />
                    <div className="team-member-overlay">
                      <LeamSocialLink/>

                      <h4 className="title">David Jhon Korla</h4>
                      <span>IT Consultant</span>
                    </div>
                  </div>
                  {/* single team member */}
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="single-team-member mt-30">
                    <img src="assets/images/team-member-6.jpg" alt="team-member" />
                    <div className="team-member-overlay">
                      <LeamSocialLink/>

                      <h4 className="title">David Jhon Korla</h4>
                      <span>IT Consultant</span>
                    </div>
                  </div>
                  {/* single team member */}
                </div>
              </Row>
              {/* row */}
            </div>
            {/* container fluid */}
          </div>
         );
    }
}
 
export default TeamMemberPart;