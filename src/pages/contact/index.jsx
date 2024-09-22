import React from 'react';
import ModalVideo from 'react-modal-video'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Layout from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';
import PlayVideoControl from "../../componets/PlayVideoControl/PlayVideoControl";
import AutoSizedVideo from '../../componets/autoSizedVideo/AutoSizedVideo';

class ContactPage extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  // componentDidMount() {
	// 	setTimeout(function () {
	// 		document.querySelector(".preloader").style = "display: none";
	// 	}, 5000);
  // }
  openModal = event => {
    this.setState({isOpen: true});
    event.preventDefault();
  }

  formHandle = event => {
    toast.success("Thank you for contact with us!");
    event.preventDefault();
  }

    render() { 
        return ( 
          <Layout>
            <PlayVideoControl videoSrc="assets/videos/ContactUs.mp4" />
        <div className="page-title-area">
          <Container>
            <Row>
              <Col lg="12">
                <div className="page-title-item text-center">
                  <h2 className="title">联系我们</h2>
                  <nav aria-label="breadcrumb">

                  
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link  to={"/"}>Home </Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                      Contact Us
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
              {/*====== CONTACT DETAILS PART START ======*/}
              <div className="contact-details-area pt-90 pb-120">
                <Container>
                  <div style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
                    <AutoSizedVideo videoSrc="assets/videos/video1.mp4" aspectRatio={16 / 9}/>
                  </div>
                  <Row>

                    <Col lg="12">

                    </Col>
                    <Col lg="12">
                      <div className="contact-info mr-30 mt-30">
                        <div className="contact-item-1">
                          <div className="contact-info-item text-center">
                            <i className="fal fa-map"/>
                            <h5 className="title">公司地点</h5>
                            <p>神戸市東灘区本山南町8丁目6番26号<br/>東神戸センタービルW棟8階SD1号室</p>
                          </div>
                          <div className="contact-info-item text-center">
                            <i className="fal fa-phone-office"/>
                            <h5 className="title">TEL</h5>
                            <p>078-891-7099</p>
                          </div>
                          <div className="contact-info-item text-center">
                            <i className="fal fa-fax"/>
                            <h5 className="title">FAX</h5>
                            <p>078-452-7633</p>
                          </div>

                        </div>
                        <div className="contact-item-1">
                          <div className="contact-info-item text-center">
                            <i className="fal fa-phone"/>
                            <h5 className="title">携帯</h5>
                            <p>09052562484</p>
                          </div>
                          <div className="contact-info-item text-center">
                            <i className="fal fa-envelope"/>
                            <h5 className="title">メール</h5>
                            <p>88swallow@gmail.com</p>
                          </div>
                          <div className="contact-info-item text-center">
                            <i className="fal fa-phone-plus"/>
                            <h5 className="title">联系人</h5>
                            <p>李小燕</p>
                          </div>
                          {/*<div className="contact-info-item text-center">*/}
                          {/*  <i className="fal fa-globe"/>*/}
                          {/*  <h5 className="title">Social Network</h5>*/}
                          {/*  <p>fb.com/example</p>*/}
                          {/*</div>*/}
                        </div>
                      </div>
                      {/* contact info */}
                    </Col>
                    <Col lg="12">
                      <div className="map-area mt-30">
                        {/*<iframe*/}
                        {/*    src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.95373021!2d85.84621250756469!3d23.452185887261447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1569913375800!5m2!1sen!2sbd"*/}
                        {/*    style={{border: 0}}*/}
                        {/*    allowFullScreen*/}
                        {/*    width={600}*/}
                        {/*    height={450}*/}
                        {/*    title="Our Localtion"*/}
                        {/*/>*/}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13116.996076435982!2d135.281571!3d34.724117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008d2013000001%3A0x5be2cbafe0b61d41!2z5p2x56We5oi444K744Oz44K_44O844OT44Or!5e0!3m2!1sen!2sus!4v1726978708833!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="our location" // 添加 title 属性
                        ></iframe>

                      </div>
                      {/* map area */}
                    </Col>
                  </Row>
                  {/* row */}

                </Container>
                {/* container */}
              </div>
              {/*/!*====== CONTACT DETAILS PART ENDS ======*!/*/}
              {/*/!*====== GET IN TOUCH PART START ======*!/*/}
              {/*<div className="get-in-touch-area get-in-touch-area-2">*/}
              {/*<Container>*/}
              {/*    <Row>*/}
              {/*      <Col lg="6">*/}
              {/*      <div className="section-title text-left">*/}
              {/*          <span>Get In Touch</span>*/}
              {/*          <h2 className="title">Estimate For Your Projects.</h2>*/}
              {/*        </div>*/}
              {/*        /!* section title *!/*/}
              {/*        <div className="form-area">*/}
              {/*          <form id="contact-form" action="assets/contact" method="post" onSubmit={this.formHandle}>*/}
              {/*            <div className="input-box mt-45">*/}
              {/*              <input type="text" name="name" placeholder="Enter your name"/>*/}
              {/*              <i className="fal fa-user"/>*/}
              {/*            </div>*/}
              {/*            <div className="input-box mt-20">*/}
              {/*              <input*/}
              {/*                  type="email"*/}
              {/*                  name="email"*/}
              {/*                  placeholder="Enter your email"*/}
              {/*              />*/}
              {/*              <i className="fal fa-envelope"/>*/}
              {/*            </div>*/}
              {/*            <div className="input-box mt-20">*/}
              {/*          <textarea*/}
              {/*              name="message"*/}
              {/*              id="index"*/}
              {/*              cols={30}*/}
              {/*              rows={10}*/}
              {/*              placeholder="Enter your message"*/}
              {/*              defaultValue={""}*/}
              {/*          />*/}
              {/*              <i className="fal fa-edit"/>*/}
              {/*              <button className="main-btn" type="submit">*/}
              {/*                Submit Now*/}
              {/*              </button>*/}
              {/*            </div>*/}
              {/*          </form>*/}
              {/*          <p className="form-message"/>*/}
              {/*        </div>*/}
              {/*      </Col>*/}
              {/*      <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='TdSA7gkVYU0'*/}
              {/*                  onClose={() => this.setState({isOpen: false})}/>*/}

              {/*      <Col lg="6">*/}
              {/*        <div className="get-map d-none d-lg-block mt-40">*/}
              {/*          <img src="/assets/images/contact-thumb.jpg" alt="video play"/>*/}
              {/*          <Link className="video-popup" to={"http://bit.ly/2VuPnrx"} onClick={this.openModal}>*/}
              {/*            <i className="fas fa-play"/>*/}
              {/*          </Link>*/}
              {/*        </div>*/}
              {/*      </Col>*/}
              {/*    </Row>*/}
              {/*  </Container>*/}
              {/*</div>*/}
              {/*/!*====== GET IN TOUCH PART ENDS ======*!/*/}
            </div>
          </Layout>
        );
    }
}

export default ContactPage;