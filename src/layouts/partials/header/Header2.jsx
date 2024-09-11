import React from 'react';
import PartialNav from './PartialNav';
import { Link } from "react-router-dom";
import SocialLink from './SocialLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/images/logo-2.png';
import { Row, Col, Navbar } from 'react-bootstrap';


class Header extends React.Component {

    render() { 
        return (
            <>
          <header className="header-area header-area-2">
            <div className="header-top pl-30 pr-30">
              <Row className="align-items-center">
                <Col md="6" sm="7">
                  <div className="header-left-side text-center text-sm-left">
                    <ul>
                      <li>
                        <a  href="mailto:webmaster@example.com" target="__blank">
                          <FontAwesomeIcon icon={faEnvelope}   className="mr-1"/>
                        info@webmail.com
                        </a>
                      </li>
                      <li><a href="tel:786 875 864 75 7">
                        <FontAwesomeIcon icon={faPhone}   className="mr-1"/>
                        786 875 864 75 7</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <div className="col-md-6 col-sm-5">
                  <div className="header-right-social text-center text-sm-right">
                  <SocialLink/>
                  </div>
                </div>
              </Row>
            </div>
            <div className="header-nav">
              <div className="navigation">
                <Navbar expand="lg" className={`transparent-color`}>
                  <Navbar.Brand as={Link} to={'/'}>
                    <img src={Logo} alt="" />
                  </Navbar.Brand>

                  <Navbar.Toggle
                    aria-controls="navbarSupportedContent"
                    aria-label="Toggle navigation">
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </Navbar.Toggle> 

                  <Navbar.Collapse className="sub-menu-bar"  id="navbarSupportedContent">
                    <PartialNav/>
                  </Navbar.Collapse> 
                  <div className="navbar-btn mr-100">
                  <Link className="main-btn"  to={'/'}>Get A Quote</Link>
                  </div>
                </Navbar>
              </div> 
            </div>
          </header>
        </>
         );
    }
}
 
export default Header;