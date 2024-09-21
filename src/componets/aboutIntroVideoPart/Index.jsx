import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import VideoModal from './VideoModal.js'; // 确保路径正确

class AboutIntroVideoPart extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false, // 控制模态框显示
    };
  }

  // 打开模态框
  openModal = (event) => {
    this.setState({ isOpen: true });
    event.preventDefault();
  };

  // 关闭模态框
  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
        <div className="about-intro-area" style={{ position: 'relative', height: '400px', overflow: 'hidden',backgroundImage: "url('assets/images/Image_20231018235738.jpg')" }}>
          {/* 背景图片 */}
          <div
              className="bg-cover"
              style={{
                // 使用绝对路径
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
              }}
          ></div>

          {/* 透黑背景 */}
          <div
              className="about-intro-overlay"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)', // 透黑色
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
              }}
          ></div>

          {/* 内容部分 */}
          <div className="content-wrapper pt-90 pb-120" style={{ position: 'relative', zIndex: 1 }}>
            <Container>
              <Row className="align-items-center">
                {/* 左侧文字部分 */}
                <Col lg="8" md="12">
                  <div className="intro-box">
                    <div className="intro-content">
                      <span style={{ color: '#fff' }}>公司介绍</span>
                      <h2 className="title" style={{ color: '#fff', fontSize: '28px' }}>
                        打造你的理想房产之路
                      </h2>
                      <p className="text-1" style={{ color: '#fff', fontSize: '16px' }}>
                        我们致力于为客户提供卓越的房地产解决方案，专注每个细节，从购房咨询到售后服务，全程陪伴，成就您的梦想家园。
                      </p>
                      <p className="text-2" style={{ color: '#fff', fontSize: '16px' }}>
                        无论是住宅投资还是商业开发，我们凭借多年市场经验，为客户量身打造最优质的选择，助力客户在日本房产市场立足并实现财富增值。
                      </p>

                    </div>
                  </div>
                </Col>

                {/* 右侧播放按钮 */}
                <Col lg="4" md="12">
                  <div className="intro-play text-right">
                    <Link to="#" className="video-popup" onClick={this.openModal}>
                      <FontAwesomeIcon icon={faPlay} style={{ fontSize: '48px', color: '#fff' }} />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          {/* 视频模态框 */}
          <VideoModal isOpen={this.state.isOpen} onClose={this.closeModal} />
        </div>
    );
  }
}

export default AboutIntroVideoPart;
