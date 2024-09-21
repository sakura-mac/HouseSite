import React from 'react';
import { Link } from 'react-router-dom';
import './Index.scss';
import { Container, Row, Col } from 'react-bootstrap';
import PlayVideoControl from "../PlayVideoControl/PlayVideoControl";

class Index extends React.Component {

    render() { 
        return (
          <div className="about-experience-area">

            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="10">
                        {/* 在文字内容的上方放置图片 */}
                        <div className="experience-image mb-4 text-center">
                            <img
                                src="/assets/images/IMG_0157.JPG.jpg"
                                alt="Experience"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    border: '5px solid #ddd', // 边框样式
                                    borderRadius: '10px', // 圆角效果
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 添加阴影
                                }}
                            />
                        </div>
                    </Col>
                </Row>

                {/* 保持左右分布的文字内容 */}
                <Row>
                    <Col lg="5">
                        <div className="experience-item">
                            <span>多年经验</span>
                            <h2 className="title">不止提供舒适住房</h2>
                            <br/>
                        </div>
                        {/* experience item */}
                    </Col>
                    <Col lg="6" className="offset-lg-1">
                        <div className="experience-item">
                            <p>
                                凭借多年的房地产行业经验，致力于提供卓越的服务和创新的解决方案。买卖房产是人生中的重大决策，团队始终以客户为中心，提供从咨询到交易的全方位支持。无论是住宅、商业地产还是投资物业，都能帮助您做出明智选择，打造理想的生活与投资环境。
                            </p>
                            {/*<Link to={"/about"}>Read More</Link>*/}
                        </div>
                        {/* experience item */}
                    </Col>
                </Row>
              {/*<Row className="justify-content-center">*/}
              {/*  <div*/}
              {/*    className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"*/}
              {/*    data-wow-duration=".5s"*/}
              {/*    data-wow-delay=".2s"*/}
              {/*  >*/}
              {/*    <div className="single-experience mt-30">*/}
              {/*      <img src="assets/images/experience-1.jpg" alt="" />*/}
              {/*      <div className="experience-overlay">*/}
              {/*        <h5 className="title">Design &amp; Development</h5>*/}
              {/*        <p>*/}
              {/*          The functional goal of technical content is to help people use a*/}
              {/*          product.*/}
              {/*        </p>*/}
              {/*        <Link to={"about"}>Read More</Link>*/}
              {/*        <i className="fal fa-laptop-code" />*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    /!* single experience *!/*/}
              {/*  </div>*/}
              {/*  <div*/}
              {/*    className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"*/}
              {/*    data-wow-duration="1s"*/}
              {/*    data-wow-delay=".4s"*/}
              {/*  >*/}
              {/*    <div className="single-experience mt-30">*/}
              {/*      <img src="assets/images/experience-2.jpg" alt="" />*/}
              {/*      <div className="experience-overlay">*/}
              {/*        <h5 className="title">Technical Support</h5>*/}
              {/*        <p>*/}
              {/*          The functional goal of technical content is to help people use a*/}
              {/*          product.*/}
              {/*        </p>*/}
              {/*        <Link to="/home-1">Read More</Link>*/}
              {/*        <i className="fal fa-headphones-alt" />*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    /!* single experience *!/*/}
              {/*  </div>*/}
              {/*  <div*/}
              {/*    className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"*/}
              {/*    data-wow-duration="1.5s"*/}
              {/*    data-wow-delay=".6s"*/}
              {/*  >*/}
              {/*    <div className="single-experience mt-30">*/}
              {/*      <img src="assets/images/experience-3.jpg" alt="" />*/}
              {/*      <div className="experience-overlay">*/}
              {/*        <h5 className="title">Digital Marketing</h5>*/}
              {/*        <p>*/}
              {/*          The functional goal of technical content is to help people use a*/}
              {/*          product.*/}
              {/*        </p>*/}
              {/*        <Link to={"/about"}>Read More</Link>*/}
              {/*        <i className="fal fa-analytics" />*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    /!* single experience *!/*/}
              {/*  </div>*/}
              {/*</Row>*/}
              {/* row */}
            </Container>
            {/* container */}
          </div>
         );
    }
}
 
export default Index;