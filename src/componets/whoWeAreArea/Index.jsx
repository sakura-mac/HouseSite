import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { withI18n } from '../../i18n/i18n';

class WhoWeAreArea extends React.Component {

    render() { 
        const { t } = this.props.i18n || {};
        return ( 
          <div className="who-we-are-area pt-110 pb-120">
            <Container>
              <Row>
                <div
                  className="col-lg-5"
                >
                  <div className="section-title">
                    <span>{t('home.who.subtitle', '关于我们')}</span>
                    <h2 className="title">
                      {t('home.who.title.line1', '行业积累')}<br/>
                      {t('home.who.title.line2', '经验沉淀')}
                    </h2>
                  </div>
                  {/* section title */}
                </div>
                <div
                  className="col-lg-6 offset-lg-1"
                >
                  <div className="section-title">
                    <p>
                      {t('home.who.description.line1', 'Swallow Homes公司创始团队具有多年经验。')}

                      {t('home.who.description.line2', '多年来，公司始终坚持专心、专业、专注日本房产解决方案，帮助客户提供理想房产，')}
                      {t('home.who.description.line3', '开拓日本财产的经营理念，通过全体员工的共同努力，公司已成为日本房地产行业的优秀企业')}
                    </p>
                  </div>
                  {/* section title */}
                </div>
              </Row>
              <Row style={{ minHeight: '200px' }}>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
            <div className="what-we-are-shape-1">
              <img src="/assets/images/what-we-are-shape-1.png" alt="shape" />
            </div>
          </div>
         );
    }
}
 
export default withI18n(WhoWeAreArea);