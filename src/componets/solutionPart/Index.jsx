import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import VideoModal from './VideoModal'; // 确保路径正确
import { withI18n } from '../../i18n/i18n';

class SolutionPart extends React.Component {
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
    const { t } = this.props.i18n || {};
    return (
        <div className="solution-area bg_cover" style={{ backgroundImage: "url(/assets/images/Image_20231018235738.jpg)" }}>
          <div className="solution-overlay pt-120">
            <Container>
              <Row className="align-items-center">
                <Col lg="8">
                  <div className="solution-box">
                    <div className="solution-content">
                      <h3 className="title">{t('home.solution.title', '集团鸟瞰')}</h3>
                      <p>
                        {t('home.solution.description', '集团总部及产业园区布局合理，涵盖住宅、商业地产等多个领域，注重现代化设计与绿色环保，为城市发展提供多元化服务与支持。')}
                      </p>

                      {/* 播放按钮（移动端显示） */}
                      <div className="solution-play text-right mr-30 d-block d-lg-none">
                        <Link to="#" className="video-popup" onClick={this.openModal}>
                          <FontAwesomeIcon icon={faPlay} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="4">
                  {/* 播放按钮（桌面端显示） */}
                  <div className="solution-play text-right mr-30 d-none d-lg-block">
                    <Link to="#" className="video-popup" onClick={this.openModal}>
                      <FontAwesomeIcon icon={faPlay} />
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

export default withI18n(SolutionPart);
