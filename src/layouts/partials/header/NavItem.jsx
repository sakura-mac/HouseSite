import React from 'react';
import { Row, Col,Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo1 from '../../../assets/images/logo-2.png';
import {
    faBars,
    faEnvelope,
    faLongArrowAltRight,
    faPhone,
    faSearch,
    faShoppingCart
  } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiShoppingCart } from "react-icons/fi";

class NavItem extends React.Component {
    render() { 
        return ( 
            <React.Fragment>
            <Navbar bg="light" expand="lg">
                  <Navbar.Brand as={Link} to={'/'}>
                    <img src={Logo1} alt="" />
                  </Navbar.Brand>

                  <Navbar.Toggle
                    aria-controls="navbarSupportedContent"
                    aria-label="Toggle navigation">
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </Navbar.Toggle> 
                  {/* navbar toggler */}

                  <Navbar.Collapse className="sub-menu-bar"  id="navbarSupportedContent">
                    <Nav className="mr-auto">
                      
                      <NavDropdown title="Home" id="collasible-nav-dropdown-home" className="sub-menu">
                          <NavDropdown.Item as={Link} to={'/'}>Home 1</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={'/index2'}>Home 2</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={'/index3'}>Home 3</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={'/index4'}>Home 4</NavDropdown.Item>
                      </NavDropdown>
                    
                    <Nav.Item>
                      <Link className="nav-link" to={'/about'}>About</Link>                
                    </Nav.Item>
                      <NavDropdown title="Services" id="collasible-nav-dropdown-Services" className="sub-menu">
                          <NavDropdown.Item as={Link} to={'/services'}>Services</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={'/services-details'}>Services Details</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Pages" id="collasible-nav-dropdown-Pages" className="sub-menu">
                        <NavDropdown.Item as={Link} to={'/case-study'}>case study</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/case-details'}>Case Details</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/coming-soon'}>coming soon</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/error'}>error</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/faq'}>faq</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/pricing'}>pricing</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/team'}>team</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/team-details'}>team details</NavDropdown.Item>
                        <Nav.Item>
                          <Link className="nav-link"  to={'/contact'}>Contact</Link>
                        </Nav.Item>
                      </NavDropdown>

                      <NavDropdown title="Blog" id="collasible-nav-dropdown-Blog" className="sub-menu">
                        <NavDropdown.Item as={Link} to={'/blog-standard'}>Blog Standard</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/blog-grid'}>Blog Grid</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/blog-details'}>Blog Details</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/blog-standard-details'}>Blog Details 2</NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown title="Shop" id="collasible-nav-dropdown-Shop" className="sub-menu">
                        <NavDropdown.Item as={Link} to={'/shop'}>shop</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/shop-details'}>shop Details</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/products'}>Product</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/products-details'}>Product Details</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                    
                  </Navbar.Collapse> {/* navbar collapse */}
                  <div className="bar-area d-none d-xl-block">
                    <ul>
                      <li>
                        <Link to={"shop"}>
                          <FiShoppingCart   className="mr-1"/>
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
                    <Link className="main-btn" to={"/"}>Get A Quote
                      <FontAwesomeIcon icon={faLongArrowAltRight}   className="ml-2"/>
                    </Link>
                  </div>
                  <div className="country-flag d-none d-lg-block ml-3">
                      <a href="/">
                          <img src="/assets/images/flag-1.jpg" alt="flag" />
                        </a>
                    </div>
                </Navbar>
            </React.Fragment>
         );
    }
}
 
export default NavItem;