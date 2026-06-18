import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withI18n } from '../../i18n/i18n';

class AboutIntroPart extends React.Component {
  render() {
    const { t } = this.props.i18n || {};
    return (
        <div className="about-intro-area pt-70">
          <Container>
            <Row>
              <Col lg="6">
                <div className="introThumb">
                  <img src="/assets/images/IMG_0155 2.jpg" alt="Swallow Homes CEO" />
                </div>
              </Col>
              <Col lg="6">
                <div className="intri-content">
                  <span>{t('about.intro.subtitle')}</span>
                  <h2 className="title">
                    {t('about.intro.ceoTitle')}
                  </h2>
                  <p>
                    {t('about.intro.desc1')}
                  </p>
                  <p>
                    {t('about.intro.desc2')}
                  </p>
                  <ul style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                    padding: 0,
                    marginTop: '20px',
                    color: '#000',
                  }}>
                    <li style={{marginRight: '20px'}}>
                      <strong style={{color: '#000', fontSize: '2em'}}>{t('about.intro.stat1Value')}</strong>
                      <br/>
                      <p style={{color: '#808080'}}>{t('about.intro.stat1Label')}</p>
                    </li>
                    <li style={{}}>
                      <strong style={{color: '#000', fontSize: '2em'}}>{t('about.intro.stat2Value')}</strong>
                      <br/>
                      <p style={{color: '#808080'}}>{t('about.intro.stat2Label')}</p>
                    </li>
                    <br/>

                  </ul>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginTop: '17px'
                  }}>
                    <div style={{textAlign: 'center', flex: '0 0 calc(33% - 10px)', marginBottom: '10px'}}>
                      <img src="contact/whatsapp.jpg" alt="WhatsApp" style={{maxWidth: '100%', height: 'auto',color: 'black'}}/>
                      <p style={{fontSize: '14px', color: 'black'}}>{t('footer.qr.whatsapp')}</p>
                    </div>
                    <div style={{textAlign: 'center', flex: '0 0 calc(33% - 10px)', marginBottom: '10px'}}>
                      <img src="contact/wechat.jpg" alt="WeChat" style={{maxWidth: '100%', height: 'auto',color: 'black'}}/>
                      <p style={{fontSize: '14px', color: 'black'}}>{t('footer.qr.wechat')}</p>
                    </div>
                    <div style={{textAlign: 'center', flex: '0 0 calc(33% - 10px)', marginBottom: '10px'}}>
                      <img src="contact/line.jpg" alt="LINE" style={{maxWidth: '100%', height: 'auto',color: 'black'}}/>
                      <p style={{fontSize: '14px', color: 'black'}}>{t('footer.qr.line')}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default withI18n(AboutIntroPart);
