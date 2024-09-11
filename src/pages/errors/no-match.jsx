import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';

class NoMatch extends React.Component {

    render() { 
        return ( 
          <Layout>
            <Row className="pt-120"></Row>
            <div className="error-area pt-120 pb-115">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="error-item text-center">
                      <img src="/assets/images/error.png" alt="" />
                      <h2 className="title">
                        Looks Like Here <br /> Is Nothing
                      </h2>
                      <span>Don’t be fret. We are here.</span>
                      <p>
                        <Link to={'/'}>Back to Home</Link>
                      </p>
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
 
export default NoMatch;