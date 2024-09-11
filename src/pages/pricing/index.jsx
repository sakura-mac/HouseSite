import React from 'react';
import Layout from '../../layouts';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import data from '../../data/pricing'

class PricingPage extends React.Component {

  render() { 

  const list = []

  for (const [i, item] of data.entries()) {
    list.push(
    <Col key={i} lg="3" md="6" sm="8" className="mt-30">
      <div
        className="plans-item bg_cover text-center"
        style={{
          backgroundImage: "url(assets/images/plans-thumb.jpg)"
        }}
      >
        <b>Team</b>
        <h3 className="title">
          $ <span>{item.monthly_price}</span>
        </h3>
        <span>Per Month</span>
        <p>
          The functional goal of technical content is to help people use
          a product successfully.
        </p>
        <Link  className="main-btn main-btn-2" to={"/"}>
          Purchase Now
        </Link>
      </div>
    </Col>
    
      )
  }

  
      return ( 
        <Layout>
      <div className="page-title-area">
        <Container>
          <Row>
            <Col lg="12">
              <div className="page-title-item text-center">
                <h2 className="title">Our Plans</h2>
                <nav aria-label="breadcrumb">

                
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link  to={"/"}>Home </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      pricing
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
      <div>
        {/*====== SERVICES PLANS PART START ======*/}
        <div className="services-plans-area">
          <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="second">

            <Row className="align-items-center">
              <Col lg="6" md="6">
                <div className="services-title mb-50">
                  <span>plans</span>
                  <h2 className="title">Here is plans</h2>
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="plans-tab-btn d-flex justify-content-md-end justify-content-start">
                  <Nav as="ul" variant="pills">
                    <Nav.Item as="li">
                      <Nav.Link eventKey="first">
                        Monthly
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="second">
                        Yearly
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                
                </div>
              </Col>
            </Row>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row className="justify-content-center">  
                  {list}
                </Row>
              </Tab.Pane>
              <Tab.Pane  eventKey="second">
                <Row className="justify-content-center">
                  {list}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          </Container>
        </div>
        {/*====== SERVICES PLANS PART ENDS ======*/}
        {/*====== SERVICES PLANS PART START ======*/}
        <div className="services-plans-area services-plans-dark-area">
          <Container>
            <Tab.Container id="netxt-tabs-example" defaultActiveKey="pills-monthly-tab">
            <Row className="align-items-center">
              <Col lg="6" md="6">
                <div className="services-title mb-50">
                  <span>plans</span>
                  <h2 className="title">Here is plans</h2>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="plans-tab-btn d-flex justify-content-md-end justify-content-start">
                  <Nav as="ul"  variant="pills" className="nav-pills mb-3" id="pills-tab-2" role="tablist">
                    <Nav.Item as="li">
                      <Nav.Link eventKey="pills-monthly-tab">
                        Monthly
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="pills-yearly-tab">
                        Yearly
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>
            </Row>
            <Tab.Content>
              <Tab.Pane eventKey="pills-monthly-tab">
                <Row className="justify-content-center">
                  {list}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="pills-yearly-tab"
                className="fade">
                <Row className="justify-content-center">
                  {list}
                </Row>
              </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Container>
        </div>
        {/*====== SERVICES PLANS PART ENDS ======*/}
      </div>
      </Layout>
    );
  }
}
 
export default PricingPage;