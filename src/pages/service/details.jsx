import React from 'react';

import ServicesOptimizationPart from '../../componets/servicesOptimizationPart/Index';
import IntroVideoPart from '../../componets/introVideoPart/Index';
import ServicesPlansPart from '../../componets/servicesPart/ServicesPlansPart';
import LatestNewsPart from '../../componets/latestNewsPart/Index';
import { Link } from 'react-router-dom';
import Layout from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';

class ServicesDetails extends React.Component {

    render() { 
        return ( 
          <Layout>
            <div className="page-title-area">
              <Container>
                <Row>
                  <Col lg="12">
                    <div className="page-title-item text-center">
                      <h2 className="title">Services Details</h2>
                      <nav aria-label="breadcrumb">

                      
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link  to={"/"}>Home </Link>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">
                          Services Details
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
            <ServicesOptimizationPart/>
            <IntroVideoPart/>
            <ServicesPlansPart/>
            <LatestNewsPart/>
            </Layout>
         );
    }
}
 
export default ServicesDetails;