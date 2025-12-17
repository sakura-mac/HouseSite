import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { useI18n } from '../../i18n/i18n';

const LatestServicesPart = () => {
  const [houses, setHouses] = useState([]);
  const { t } = useI18n();

  // 加载最新的房源
  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch('/house/house-list.json'); // 获取房源列表的 JSON 文件
      const data = await response.json();
      // 获取最近6个房源
      const latestHouses = data.slice(0, 6);
      setHouses(latestHouses);
    };
    fetchHouses();
  }, []);

  // 样式定义
  const styles = {
    singleService: {
      marginTop: '30px',
      marginBottom: '55px',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',  // 确保服务卡片的高度一致
    },
    imgContainer: {
      width: '100%',
      height: '250px', // 固定图片容器的高度
      overflow: 'hidden', // 确保图片超出部分被裁剪
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', // 图片填充容器，保持比例，可能会裁剪图片
      transition: 'transform 0.5s ease',
    },
    content: {
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
      flexGrow: 1, // 使内容部分占用剩余空间，确保按钮在底部
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    description: {
      fontSize: '1rem',
      color: '#555',
      marginBottom: '10px',
    },
    linkContainer: {
      textAlign: 'left',
      marginTop: 'auto', // 将按钮推到内容部分的底部
    },
    link: {
      color: '#333',
      textDecoration: 'none',
    },
    arrowIcon: {
      marginLeft: '5px',
    },
  };

  return (
      <React.Fragment>
        <div className="services-title-area">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <div className="services-title-item text-center">
                  <div className="ring-shape" />
                  <span>{t('home.services.subtitle', '推荐房源')}</span>
                  <h3 className="title">{t('home.services.title.line1', '核心地带 or 品质住宅')}<br /> {t('home.services.title.line2', '样样精通')}</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="latest-services-area">
          <Container>
            <Row className="justify-content-center">
              {houses.map((house, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-9" key={index}>
                    <div className="single-services" style={styles.singleService}>
                      {/* 使用房源的封面图片 */}
                      <div className="services-thumb" style={styles.imgContainer}>
                        <img src={`/house/${house.folderName}/cover.jpg`} alt={house.title} style={styles.img} />
                      </div>
                      <div className="services-content" style={styles.content}>
                        <h4 className="title" style={styles.title}>{house.title}</h4>
                        <p style={styles.description}>{house.description}</p>
                        <div style={styles.linkContainer}>
                          <Link to={`/house-details/${house.folderName}`} style={styles.link}>
                            {t('home.services.cta', '了解更多')}
                            <FontAwesomeIcon icon={faLongArrowAltRight} style={styles.arrowIcon} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </Row>
          </Container>
        </div>
      </React.Fragment>
  );
};

export default LatestServicesPart;
