import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { withI18n } from '../../../i18n/i18n';

class Footer extends React.Component {

  render() {
    const { t } = this.props.i18n || {};
    const year = new Date().getFullYear();
    return (
        <React.Fragment>
          <footer className="footer-area footer-area-2 footer-area-1 bg_cover" style={{backgroundImage: 'url(assets/images/footer-bg.jpg)'}}>
            <div className="footer-overlay">
              <Container className="position-relative">
                <Row>
                  <Col lg="4" md="7">
                    <div className="widget-item-1 mt-30">
                      <style>
                        {`
                        @font-face {
                          font-family: 'Xique';
                          src: url('/assets/fonts/xique.ttf') format('truetype');

                        }

                        .footer-img {
                          max-height: 60px; /* 调整图片高度 */
                          width: auto; /* 保持纵横比 */
                          display: inline-block; /* 让图片和文字在一行显示 */
                        }

                        .footer-text {
                          font-family: 'Xique', sans-serif; /* 使用自定义字体 */
                          font-size: 38px !important;
                          display: inline-block; /* 让文字和图片在一行显示 */
                          vertical-align: middle; /* 垂直对齐文字 */
                          margin-left: 10px; /* 图片和文字之间的间距 */
                        }
                      `}
                      </style>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src="/assets/images/IMG_6715.JPG.jpg" alt="" className="footer-img"/>
                        <h4 className="footer-text" style={{color: 'white'}}>{t('footer.introTitle')}</h4>
                      </div>
                      <p>{t('footer.intro')}</p>
                    </div> {/* widget item 1 */}
                  </Col>
                  <Col lg="3" md="5" className="offset-lg-1">
                    <div className="widget-item-2 mt-30">
                      <h4 className="title">{t('footer.navTitle')}</h4>
                      <br/>
                      <div className="footer-list">
                        <ul>
                          <li><Link to={"/"}><i className="fal fa-angle-right" /> {t('footer.nav.home')}</Link></li>
                          <li><Link to={"/case-study"}><i className="fal fa-angle-right" /> {t('footer.nav.houses')}</Link></li>
                          <li><Link to={"/about"}><i className="fal fa-angle-right" /> {t('footer.nav.about')}</Link></li>
                          {/*<li><Link to={"/career"}><i className="fal fa-angle-right" /> Career</Link></li>*/}
                          {/*<li><Link to={"/refund"}><i className="fal fa-angle-right" /> Refund</Link></li>*/}
                          {/*<li><Link to={"/terms"}><i className="fal fa-angle-right" /> Terms</Link></li>*/}
                        </ul>
                        <ul>
                          <li><Link to={"/blog-standard"}><i className="fal fa-angle-right"/> {t('footer.nav.blog')}</Link></li>
                          <li><Link to={"/contact"}><i className="fal fa-angle-right"/> {t('footer.nav.contact')}</Link></li>
                          <li><a href="https://www.xiaohongshu.com/user/profile/5df991fd00000000010010eb" target="_blank" rel="noopener noreferrer"><i
                              className="fal fa-angle-right"/> {t('footer.nav.more')}</a></li>
                          {/*<li><Link to={"affiliate"}><i className="fal fa-angle-right" /> Affiliate</Link></li>*/}

                        </ul>

                      </div>
                    </div>
                    {/* widget item 2 */}
                  </Col>
                  <Col lg="4" md="6">
                    <div className="widget-item-2 widget-item-3 mt-30">
                      <h4 className="title">{t('footer.contactTitle')}</h4>
                      <p>
                        {t('footer.contact.email')}<br/>
                        {t('footer.contact.address')}<br/>
                        {t('footer.contact.phone')}<br/>
                        {t('footer.contact.mobile')}
                      </p>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        marginTop: '10px'
                      }}>
                        <div style={{textAlign: 'center', flex: '0 0 calc(33% - 10px)', marginBottom: '10px'}}>
                          <img src="contact/whatsapp.jpg" alt="WhatsApp" style={{maxWidth: '80%', height: 'auto'}}/>
                          <p style={{fontSize: '14px', color: 'white'}}>{t('footer.qr.whatsapp')}</p>
                        </div>
                        <div style={{textAlign: 'center', flex: '0 0 calc(33% - 10px)', marginBottom: '10px'}}>
                          <img src="contact/wechat.jpg" alt="微信" style={{maxWidth: '80%', height: 'auto'}}/>
                          <p style={{fontSize: '14px', color: 'white'}}>{t('footer.qr.wechat')}</p>
                        </div>
                        <div style={{textAlign: 'center', flex: '0 0 calc(33% - 10px)', marginBottom: '10px'}}>
                          <img src="contact/line.jpg" alt="LINE" style={{maxWidth: '80%', height: 'auto'}}/>
                          <p style={{fontSize: '14px', color: 'white'}}>{t('footer.qr.line')}</p>
                        </div>
                      </div>
                    </div>
                    {/* widget item 3 */}
                  </Col>
                </Row> {/* row */}
                <Row>
                  <Col lg="12">
                    <div className="footer-copyright">
                      <p>{t('footer.copyright').replace('{year}', year)}</p>
                    </div>
                    {/* footer copyright */}
                  </Col>
                </Row> {/* row */}
              </Container> {/* container */}
            </div>
          </footer>
          {/*====== BACK TO TOP ======*/}
          <div className="back-to-top back-to-top-2">
            <a href="#backTotop">
              <i className="fas fa-arrow-up"/>
            </a>
          </div>
          {/*====== BACK TO TOP ======*/}

        </React.Fragment>
    );
  }
}

export default withI18n(Footer);
