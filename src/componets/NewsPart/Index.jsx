import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const NewsPart = () => {
  const [houses, setHouses] = useState([]);
  const [visibleHouses, setVisibleHouses] = useState(6); // 默认显示6个

  // 加载房产数据
  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch('/house/house-list.json');
      const data = await response.json();
      setHouses(data);
    };
    fetchHouses();
  }, []);

  // 样式定义
  const styles = {
    singleNews: {
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '30px',
    },
    img: {
      width: '100%',
      height: 'auto',
      transition: 'transform 0.5s ease',
    },
    overlay: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明的背景
      color: 'white',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end', // 默认文本在下半部分
      transition: 'background-color 0.5s ease, transform 0.5s ease',
    },
    overlayHover: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)', // 悬浮时不透明
    },
    content: {
      transform: 'translateY(0)', // 默认显示在下半部分
      transition: 'transform 0.5s ease',
    },
    contentHover: {
      transform: 'translateY(-50%)', // 悬浮时滑动到上半部分
    },
    title: {
      margin: '0',
      fontSize: '1.5rem',
      color: '#fff',
    },
    category: {
      color: '#fff',
      fontWeight: 'bold',
    },
    icon: {
      display: 'inline-block',
      marginLeft: '10px',
    },
    loadMoreBtn: {
      marginTop: '40px',
      padding: '10px 30px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    }
  };

  return (
      <div className="news-area news-area-2">
        <Container>
          <Row className="justify-content-center">
            {houses.slice(0, visibleHouses).map((house, index) => (
                <div className="col-lg-4 col-md-6 col-sm-9" key={index}>
                  <div
                      className="single-news"
                      style={styles.singleNews}
                      onMouseEnter={(e) => {
                        e.currentTarget.querySelector('.single-news-overlay').style.backgroundColor = 'rgba(15,60,158,0.9)';
                        e.currentTarget.querySelector('.content').style.transform = 'translateY(-50%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.querySelector('.single-news-overlay').style.backgroundColor = 'rgba(15,60,158,0.2)';
                        e.currentTarget.querySelector('.content').style.transform = 'translateY(0)';
                      }}
                  >
                    {/* 使用封面图片 */}
                    <img
                        src={`/house/${house.folderName}/cover.jpg`}
                        alt={house.title}
                        style={styles.img}
                    />
                    {/* 固定的透明蒙版，随着悬浮改变透明度 */}
                    <div className="single-news-overlay" style={styles.overlay}>
                      <div className="content" style={styles.content}>
                        <span style={styles.category}>{house.category || '房产'}</span>
                        <h5 className="title" style={styles.title}>
                          <Link to={`/house-details/${house.folderName}`} style={{ color: 'white', textDecoration: 'none' }}>
                            {house.title}
                          </Link>
                        </h5>
                        {/* 图标点击可以直接进入详情 */}
                        <Link to={`/house-details/${house.folderName}`} style={styles.icon}>
                          <i className="fal fa-long-arrow-right" style={{ color: 'white' }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </Row>
          <Row>
            <Col lg="8" className="text-center">
              {/* 显示加载更多按钮 */}
              {visibleHouses < houses.length && (
                  <button
                      style={styles.loadMoreBtn}
                      onClick={() => setVisibleHouses(visibleHouses + 6)} // 每次加载6个
                  >
                    Load More +
                  </button>
              )}
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default NewsPart;
