
import React from 'react';
import PartialNav from './PartialNav';
import { Link } from "react-router-dom";
import SocialLink from './SocialLink';
import Logo from '../../../assets/images/logo-2.png';
import { Row, Col, Navbar } from 'react-bootstrap';


class Header extends React.Component {

    render() { 
        return (
            <>
          <header className="header-area-2">
            <div className="header-top pl-30 pr-30">
              <div className="container-fluid">
                <Row className="align-items-center">
                  <Col lg="6">
                    <div className="header-left-side text-center text-sm-left">
                      <ul>
                        <li><Link to={"/"}>Terms &amp; Conditions</Link></li>
                        <li><Link to={"/"}>Refund Policy</Link></li>
                      </ul>
                    </div>
                  </Col>
                  <div className="col-lg-6">
                    <div className="header-right-social text-center text-sm-right">
                    <SocialLink/>
                    </div>
                  </div>
                </Row>
              </div>
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
                    <Link className="main-btn" to={"/"}>Get A Quote</Link>
                  </div>
                  <div className="country-flag d-none d-lg-block">
                    <Link to={"/"}><img src="/assets/images/flag-1.jpg" alt="flag" /></Link>
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