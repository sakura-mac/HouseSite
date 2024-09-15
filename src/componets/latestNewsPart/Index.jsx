import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

class LatestNewsPart extends React.Component {

    render() { 
        return ( 
          <div className="latest-news-area gray-bg">
            <Container>
              <Row className="justify-content-center">
                <Col lg="6">
                  <div className="section-title text-center">
                    <span>latest news</span>
                    <h2 className="title">新闻中心</h2>
                  </div>
                  {/* sction title */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
            <div className="letast-news-grid white-bg  ml-40 mr-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <div className="latest-news">
                      <Row>
                        <div
                          className="col-lg-4 col-md-6 wow slideInUp"
                          data-wow-duration=".5s"
                          data-wow-delay="0s"
                        >
                          <div className="letest-news-item mt-30">
                            <span>05 Aug 2019</span>
                            <h4 className="title">
                              <Link to={"blog-details"}>
                                豪宅梦不再遥远！购房新手必看的选房指南
                              </Link>
                            </h4>
                            <p>
                              买房是人生大事，尤其是第一次购房时，难免会有很多疑问。本文为购房新手提供实用的选房建议，从豪华别墅到城市公寓，帮助你找到最适合的家。轻松开启你的置业之旅！
                            </p>
                            <Link to={"blog-details"} className="main-btn">
                              了解更多
                              <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`} />
                            </Link>
                          </div>
                          {/* lesast news item */}
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow slideInUp"
                          data-wow-duration="1s"
                          data-wow-delay="0s"
                        >
                          <div className="letest-news-item mt-30">
                            <span>24 Jun 2023</span>
                            <h4 className="title">
                            <Link to={"blog-details"}>
                              小户型如何大作为？打造属于你的温馨居所
                              </Link>
                            </h4>
                            <p>
                              想要用有限的预算找到理想的小户型公寓？如何在小空间中实现大梦想？从布局设计到实用功能，我们提供了让你房子“变大”的贴心建议，让小户型也能住得舒适惬意。
                            </p>
                            <Link to={"blog-details"} className="main-btn" >
                              了解更多
                              <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`} />
                            </Link>
                          </div>
                          {/* lesast news item */}
                        </div>
                        <div
                          className="col-lg-4 col-md-6 wow slideInUp"
                          data-wow-duration="1.5s"
                          data-wow-delay="0s"
                        >
                          <div className="letest-news-item mt-30">
                            <span>12 Jan 2021</span>
                            <h4 className="title">
                            <Link to={"blog-details"}>
                              度假还是投资？海景房值得入手的理由

                              </Link>
                            </h4>
                            <p>
                              想象每天醒来就能看到海景，简直是梦想中的度假生活！但海景房不仅仅适合度假，它也是一项很好的投资选择。本文将分析购买海景房的优势，让你知道它为何能同时满足生活享受和投资需求。
                            </p>
                            <Link to={"blog-details"} className="main-btn" >
                              了解更多
                              <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`} />
                            </Link>
                          </div>
                          {/* lesast news item */}
                        </div>
                      </Row>
                    </div>
                    {/* latest news */}
                  </Col>
                </Row>
                {/* row */}
              </Container>
              {/* container */}
            </div>
          </div>
         );
    }
}
 
export default LatestNewsPart;