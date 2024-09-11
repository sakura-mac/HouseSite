import React from 'react';
import ServicesItemPart from '../../componets/servicesItemPart/Index';
import ServicesPlansPart from '../../componets/servicesPart/ServicesPlansPart';
import { Link } from 'react-router-dom';
import Layout from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';

class ServicesPage extends React.Component {

    render() { 
        return ( 
          <Layout>
            <div className="page-title-area">
              <Container>
                <Row>
                  <Col lg="12">
                    <div className="page-title-item text-center">
                      <h2 className="title">Services</h2>
                      <nav aria-label="breadcrumb">

                      
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link  to={"/"}>Home </Link>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">
                          Services
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
            <ServicesItemPart/>
            <ServicesPlansPart/>
            </Layout>
         );
    }
}
 
export default ServicesPage;