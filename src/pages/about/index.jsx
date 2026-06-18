import React from 'react';
import { Link } from 'react-router-dom';
import AboutExperiencePart from '../../componets/aboutExperiencePart/Index';
import AboutIntroPart from '../../componets/aboutIntroPart/Index';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../layouts';
import { withI18n } from '../../i18n/i18n';

class AboutPage extends React.Component {
  render() {
    const { t } = this.props.i18n || {};
    return (
        <React.Fragment>
          <Layout>
            <div className="page-title-area">
              <Container>
                <Row>
                  <Col lg="12">
                    <div className="page-title-item text-center">
                      <h2 className="title">{t('about.title')}</h2>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to={'/'}>{t('header.nav.home')}</Link>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">
                            {t('about.title')}
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <AboutExperiencePart />
            <AboutIntroPart />

            {/* 联系我们 + 地图 */}
            <div className="contact-details-area pt-90 pb-120">
              <Container>
                <Row>
                  <Col lg="12">
                    <div className="contact-info mr-30 mt-30">
                      <div className="contact-item-1">
                        <div className="contact-info-item text-center">
                          <i className="fal fa-map"/>
                          <h5 className="title">{t('contact.locationTitle')}</h5>
                          <p>{t('contact.address')}</p>
                        </div>
                        <div className="contact-info-item text-center">
                          <i className="fal fa-phone-office"/>
                          <h5 className="title">{t('contact.telTitle')}</h5>
                          <p>{t('contact.tel')}</p>
                        </div>
                        <div className="contact-info-item text-center">
                          <i className="fal fa-fax"/>
                          <h5 className="title">{t('contact.faxTitle')}</h5>
                          <p>{t('contact.fax')}</p>
                        </div>
                        <div className="contact-info-item text-center">
                          <i className="fal fa-envelope"/>
                          <h5 className="title">{t('contact.emailTitle')}</h5>
                          <p>{t('contact.email')}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className="map-area mt-30">
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13116.996076435982!2d135.281571!3d34.724117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008d2013000001%3A0x5be2cbafe0b61d41!2z5p2x56We5oi444K744Oz44K_44O844OT44Or!5e0!3m2!1sen!2sus!4v1726978708833!5m2!1sen!2sus"
                          width="600"
                          height="450"
                          style={{border: 0}}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="our location"
                      ></iframe>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Layout>
        </React.Fragment>
    );
  }
}

export default withI18n(AboutPage);
