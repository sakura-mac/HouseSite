import React from 'react';
import './Index.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { withI18n } from '../../i18n/i18n';

class Index extends React.Component {

    render() {
        const { t } = this.props.i18n || {};
        return (
          <div className="about-experience-area">

            <Container>

                <Row>
                    <Col lg="5">
                        <div className="experience-item">
                            <span>{t('about.experience.subtitle')}</span>
                            <h2 className="title">{t('about.experience.title')}</h2>
                            <br/>
                        </div>
                    </Col>
                    <Col lg="6" className="offset-lg-1">
                        <div className="experience-item">
                            <p>
                                {t('about.experience.description')}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
          </div>
         );
    }
}

export default withI18n(Index);
