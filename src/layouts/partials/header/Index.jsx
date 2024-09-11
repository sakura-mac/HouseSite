import React from 'react';
import PartialNav from './PartialNav';
import { Link } from "react-router-dom";
import SocialLink from './SocialLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faLongArrowAltRight,
  faSearch,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import Logo1 from '../../../assets/images/logo-2.png';
import { Row, Col , Navbar } from 'react-bootstrap';
import { FiMail, FiPhone } from "react-icons/fi";


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      isTop: true,
      menuShowHideToggle: false,
      menuShowHideToggleClass: ' collapse'
    };
  }

  componentDidMount() {

    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }

  render() {

        return (
            <React.Fragment>
          <header className="header-area header-area-2 header-area-4">
            <div className="header-top pl-30 pr-30 white-bg">
              <Row className="align-items-center">
                <Col md="6" sm="7">
                  <div className="header-left-side text-center text-sm-left">
                    <ul>
                      <li>
                        <a  href="mailto:webmaster@example.com" target="__blank">
                          <FiMail size="1.4em"/>{' '}
                        info@webmail.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:786 875 864 75 7">
                          <FiPhone size="1.4em"/>{' '}
                        786 875 864 75 7
                        </a>
                      </li>
                      </ul>
                  </div>
                </Col>
                <Col md="6" sm="5">
                  <div className="header-right-social text-center text-sm-right">
                    <SocialLink/>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="header-nav" >
              <div 
                className={this.state.isTop ? 'navigation' : 'bg-white navigation sticky'}
                
              >
                <Navbar bg="light" expand="lg">
                  <Navbar.Brand as={Link} to={'/'}>
                    <img src={Logo1} alt="" />
                  </Navbar.Brand>

                  <Navbar.Toggle  onClick={this.menuShowHide }   className={`navbar-toggler 
                    ${this.state.isTop ? ' ' : ' sticky'}
                    ${this.state.menuShowHideToggle ? 'active' : 'collapsed'}
                  `} 
                    aria-controls="navbarSupportedContent"
                    aria-label="Toggle navigation">
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </Navbar.Toggle> 

                  <Navbar.Collapse className="sub-menu-bar"  id="navbarSupportedContent">
                    <PartialNav />
                  </Navbar.Collapse> 
                  {/* navbar collapse */}
                  <div className="bar-area d-none d-xl-block">
                    <ul>
                      <li>
                        <Link to={"shop"}>
                          <FontAwesomeIcon icon={faShoppingCart}   className="mr-1"/>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <FontAwesomeIcon icon={faSearch}   className="mr-1"/>
                        </Link>
                      </li>
                      <li className="d-none d-md-block d-lg-none">
                        <Link to={"/"}>
                          <FontAwesomeIcon icon={faBars}   className="mr-1"/>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar-btn mr-100">
                    <Link className="main-btn" to={"/"}>Free Consulting
                      <FontAwesomeIcon icon={faLongArrowAltRight}   className="ml-2"/>
                    </Link>
                  </div>
                </Navbar>
              </div> {/* navigation */}
            </div>
          </header>
              </React.Fragment>
         );
    }
}
 
export default Header;