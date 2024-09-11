import React from 'react';
//import Breadcrumbs  from 'react-router-dynamic-breadcrumbs';   

//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class Breadcrumb extends React.Component {

    render() { 
        return ( 
          <div className="page-title-area">
            <Container>
              <Row>
                <Col lg="12">
                  <div className="page-title-item text-center">
                    <h2 className="title">About Us</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link  to={"/"}>Home </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          About
                        </li>
                      </ol>
                    </nav>
                  </div>
                  {/* page title */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
         );
    }
}
 
export default Breadcrumb;