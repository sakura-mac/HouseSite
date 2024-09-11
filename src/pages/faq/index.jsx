import React from 'react';
import ServicesItemPart from '../../componets/servicesItemPart/Index';
import { Link } from 'react-router-dom';
import Layout from '../../layouts';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

class FaqPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleForm = this.handleForm.bind(this);
}
  handleForm(e){
    e.preventDefault();
  }

  // componentDidMount() {
	// 	setTimeout(function () {
	// 		document.querySelector(".preloader").style = "display: none";
	// 	}, 5000);
  // }


    render() { 
        return ( 
          <Layout>
        <div className="page-title-area">
          <Container>
            <Row>
              <Col lg="12">
                <div className="page-title-item text-center">
                  <h2 className="title">FAQ</h2>
                  <nav aria-label="breadcrumb">

                  
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link  to={"/"}>Home </Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                      FAQ
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
          {/*====== ABOT FAQ PART START ======*/}
          <div className="about-faq-area about-faq-area-page pb-100">
            <Container>
              <Row className="align-items-center">
                <Col lg="6">
                  <div className="faq-accordion-3 mt-30">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Link} variant="link" eventKey="0">
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      {/* card */}
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Link} variant="link" eventKey="1">
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      {/* card */}
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Link} variant="link" eventKey="2">
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      {/* card */}
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Link} variant="link" eventKey="3">
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      {/* card */}
                      <Card>
                        <Card.Header id="headingFive">
                          <Accordion.Toggle as={Link} variant="link" eventKey="4">
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body>
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      {/* card */}
                    </Accordion>
                  </div>
                  {/* faq accordion */}
                </Col>
                <Col lg="6">
                  <div className="faq-video-thumb-area">
                    <div className="faq-video-thumb-1 text-right">
                      <img src="assets/images/faq-thumb-item-1.jpg" alt="faq" />
                    </div>
                    <div className="faq-video-thumb-2">
                      <img src="assets/images/faq-thumb-item-2.jpg" alt="faq" />
                    </div>
                  </div>
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
          {/*====== ABOT FAQ PART ENDS ======*/}
          {/*====== ABOT FAQ PART START ======*/}
          <div className="about-faq-area pb-100 gray-bg">
            <Container>
              <Row className="align-items-center">
                <div className="col-lg-6 order-2 order-lg-1">
                  <div className="faq-video-thumb">
                    <img src="assets/images/faq-video-thumb.jpg" alt="" />
                    <Link  className="video-popup" to={"http://bit.ly/2VuPnrx"} >
                      <i className="fas fa-play" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <div className="about-faq-content">
                    <span>FAQ</span>
                    <h2 className="title">Get Every answer from here.</h2>
                  </div>
                  <div className="faq-accordion-3 mt-30">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Link} variant="link" eventKey="0">
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      {/* card */}
                      <Card>
                        <Card.Header id="heading2">
                          <Accordion.Toggle as={Link} variant="link" eventKey="1">
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      {/* card */}
                      <Card>
                        <Card.Header id="heading3">
                          <Accordion.Toggle as={Link} variant="link" eventKey="2">
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      {/* card */}
                      <Card>
                        <Card.Header id="heading4">
                          <Accordion.Toggle as={Link} variant="link" eventKey="3">
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      {/* card */}
                      <Card>
                        <Card.Header id="heading5">
                          <Accordion.Toggle as={Link} variant="link" eventKey="4">
                            <i className="fal fa-magic" />
                            Technical content may have persuasive objectives
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body>
                            <p>
                              Today, the term Information Technology (IT) has ballooned
                              to encompass is real. Today, the term Information
                              Technology (IT) has ballooned to encompass is real.Today,
                              the term Information Technology (IT) has ballooned to
                              encompass is real.
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      {/* card */}
                    </Accordion>
                  </div>
                  {/* faq accordion */}
                </div>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
          {/*====== ABOT FAQ PART ENDS ======*/}
          {/*====== QUOTE PART START ======*/}
          <div
            className="quote-area bg_cover"
            style={{ backgroundImage: "url(assets/images/form-bg.jpg)" }}
          >
            <div className="quote-overlay">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="6">
                    <div className="section-title-2 text-center pl-25 pr-25">
                      <h2 className="title">Get A Free Quote</h2>
                      <p>
                        Does any industry face a more complex audience journey and
                        marketing sales process than B2B technology.
                      </p>
                    </div>
                    {/* section title 2 */}
                  </Col>
                </Row>
                {/* row */}
                <div className="quote-form">
                  <form onSubmit={(e) => this.handleForm (e) }>
                    <Row>
                      <Col lg="6">
                        <div className="input-box mt-30">
                          <input type="text" placeholder="Enter your name" />
                          <i className="fal fa-user" />
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="input-box mt-30">
                          <input type="email" placeholder="Enter your email" />
                          <i className="fal fa-envelope" />
                        </div>
                      </Col>
                      <Col lg="12">
                        <div className="input-box text-center mt-30">
                          <textarea
                            name="index"
                            id="index"
                            cols={30}
                            rows={10}
                            placeholder="Enter your subject"
                            defaultValue={""}
                          />
                          <button className="main-btn" type="submit">
                            Get A Free Quote
                          </button>
                          <i className="fal fa-edit" />
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
                {/* quote form */}
              </Container>
              {/* container */}
            </div>
          </div>
          {/*====== QUOTE PART ENDS ======*/}
        </div>
        <ServicesItemPart/>
        </Layout>
      );
    }
}
 
export default FaqPage;