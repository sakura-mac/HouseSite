import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class AboutIntroPart extends React.Component {
  render() {
    return (
        <div className="about-intro-area pt-70">
          <Container>
            <Row>
              <Col lg="6">
                <div className="intro-thumb">
                  <img src="/assets/images/IMG_0155 2.jpg" alt="Swallow Homes CEO" />
                </div>
              </Col>
              <Col lg="6">
                <div className="intri-content">
                  <span>Swallow Homes</span>
                  <h2 className="title">
                    CEO介绍 — 李  小燕
                  </h2>
                  <p>
                    公司创始团队具有多年的丰富经验，一直致力于为客户提供优质的日本房产解决方案。多年来，我们专心、专业、专注于开拓日本房地产市场，帮助客户找到理想的房产。
                  </p>
                  <p>
                    通过全体员工的共同努力，公司已成为日本房地产行业中的佼佼者。
                  </p>
                  <ul style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                    padding: 0,
                    marginTop: '20px',
                    color: '#000',
                  }}>
                    {/*<li style={{ marginRight: '20px'}}>*/}
                    {/*  <strong style={{ color: '#000' , fontSize: '2em' }}>2456万+</strong>*/}
                    {/*  <br/>*/}
                    {/*  <p style={{ color: '#808080' }}>最高成交价格</p>*/}
                    {/*</li>*/}
                    <li style={{ marginRight: '20px' }}>
                      <strong style={{ color: '#000' , fontSize: '2em'}}>丰富</strong>
                      <br/>
                      <p style={{ color: '#808080' }}>房地产专业经验</p>
                    </li>
                    <li style={{  }}>
                      <strong style={{ color: '#000' ,fontSize: '2em'}}>98%</strong>
                      <br/>
                      <p style={{ color: '#808080' }}>客户满意度</p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default AboutIntroPart;
