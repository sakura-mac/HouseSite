import { Link } from 'react-router-dom';
import React from 'react';
import Layout from '../layouts';
import { Container, Row, Col } from 'react-bootstrap';

class ComingSoon extends React.Component {

    render() { 
        return ( 
          <Layout>
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
      {
        /*====== PAGE TITLE PART ENDS ======*/
      }
      {
        /*====== COMIMG SOON PART START ======*/
      }
      <div className="error-area pt-120 pb-115">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <div className="error-item text-center">
                <div id="simple_timer" />
                <h2 className="title">
                  This Website is Coming <br /> Very Soon
                </h2>
                <span>Wait for it please</span>
              </div>
              {/* error item */}
            </Col>
          </Row>
        </Container>
      </div>
      </Layout>
    );
  }
}
 
export default ComingSoon;