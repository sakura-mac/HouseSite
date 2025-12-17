import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card,Accordion } from 'react-bootstrap';
import { withI18n } from '../../i18n/i18n';

class OueChoosePart extends React.Component {

    render() { 
        const { t } = this.props.i18n || {};
        return ( 
          <div className="our-choose-area">
            <Container>
              <Row>
                <Col lg="6">
                  <div className="section-title mt-30">
                    <span>{t('home.choose.subtitle', 'Best agecy for you')}</span>
                    <h2 className="title">{t('home.choose.title', '为何选择我们？')}</h2>
                  </div>
                  {/* section title */}
                  <Accordion defaultActiveKey="0">
                  <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} to="#be" variant="link" eventKey="0">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          {t('home.choose.items.team.title', '专业团队')}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <p>
                            {t('home.choose.items.team.desc', '我们拥有经验丰富的专业团队，为您提供优质的房产咨询服务，确保每一个决策都精准可靠。')}
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} to="#be" variant="link" eventKey="1">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          {t('home.choose.items.assets.title', '优质房源')}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <p>
                            {t('home.choose.items.assets.desc', '我们提供市场上精选的优质房源，满足您对理想居住环境的所有期待与需求。')}
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} to="#be" variant="link" eventKey="2">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          {t('home.choose.items.efficient.title', '高效交易')}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <p>
                            {t('home.choose.items.efficient.desc', '简化房产交易流程，让您在最短的时间内完成交易，节省宝贵时间。')}
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Link} to="#be" variant="link" eventKey="3">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          {t('home.choose.items.service.title', '贴心服务')}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>
                          <p>
                            {t('home.choose.items.service.desc', '为您提供一对一的专属服务，从咨询到售后，确保每个细节都得到妥善处理。')}
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  
                  </Accordion>
                  {/* accordion */}
                </Col>
                <Col lg="6">
                  <div className="our-choose-counter-area mt-30">
                    <Row>
                      <div className="col-md-6 col-sm-6">
                        <div
                            className="our-choose-counter wow slideInUp"
                            data-wow-duration=".5s"
                            data-wow-delay="0s"
                        >
                          {/*<sub>*/}
                          {/*  <span className="counter">2456万</span> <sup>+</sup>*/}
                          {/*</sub>*/}
                          {/*<span>贩卖房产最高价格</span>*/}
                          {/*<p>*/}
                          {/*  我们曾成功促成高达2456万+的房产交易，彰显我们在高端市场中的实力与信赖。*/}
                          {/*</p>*/}
                          <sub>
                            <span className="counter">数年</span> <sup></sup>
                          </sub>
                          <span>{t('home.choose.counters.experience.title', '房地产经验')}</span>
                          <p>
                            {t('home.choose.counters.experience.desc', '拥有多年的房地产从业经验，积累了丰富的市场洞察与行业知识。')}
                          </p>
                        </div>
                        <div
                            className="our-choose-counter wow slideInUp mt-55"
                            data-wow-duration="1s"
                            data-wow-delay="0s"
                        >
                          {/*<sub>*/}
                          {/*  <span className="counter">多年</span> <sup></sup>*/}
                          {/*</sub>*/}
                          {/*<span>房地产经验</span>*/}
                          {/*<p>*/}
                          {/*  拥有超过3年的房地产从业经验，积累了丰富的市场洞察与行业知识。*/}
                          {/*</p>*/}
                          <sub>
                            <span className="counter">500</span> <sup>+</sup>
                          </sub>
                          <span>{t('home.choose.counters.deals.title', '成交项目')}</span>
                          <p>
                            {t('home.choose.counters.deals.desc', '我们已成功完成500多个房产项目，确保每一位客户都能找到理想的家园。')}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div
                            className="our-choose-counter wow slideInUp"
                            data-wow-duration="1.5s"
                            data-wow-delay="0s"
                        >
                          <sub>
                            <span className="counter">98%</span> <sup>+</sup>
                          </sub>
                          <span>{t('home.choose.counters.praise.title', '客户好评')}</span>
                          <p>
                            {t('home.choose.counters.praise.desc', '98%的客户给予了高度好评，感谢我们专业、高效、贴心的房产服务。')}
                          </p>
                        </div>
                        <div
                          className="our-choose-counter wow slideInUp mt-55"
                          data-wow-duration="2s"
                          data-wow-delay="0s"
                        >

                        </div>
                      </div>
                      {/* our choose counter */}
                    </Row>
                    {/* row */}
                  </div>
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
          </div>
         );
    }
}
 
export default withI18n(OueChoosePart);