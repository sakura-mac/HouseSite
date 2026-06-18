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
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default withI18n(AboutIntroPart);
