import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useI18n } from '../../i18n/i18n';
import { API_BASE, getCoverUrl } from '../../config';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const NewsPart = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleHouses, setVisibleHouses] = useState(6);
  const location = useLocation();
  const history = useHistory();
  const { t } = useI18n();

  // 获取 URL 中的 tag 参数
  const searchParams = new URLSearchParams(location.search);
  const activeTag = searchParams.get('tag');

  // 本地下拉选择状态
  const [selectedTag, setSelectedTag] = useState(activeTag || '');

  // 同步 URL tag 到本地状态
  useEffect(() => {
    setSelectedTag(activeTag || '');
  }, [activeTag]);

  // 加载房产数据
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/houses`);
        const data = await response.json();
        // API 返回 folder_name，前台需要映射为 folderName
        setHouses(data.map(h => ({ ...h, folderName: h.folder_name })));
      } catch (e) {
        console.error('Error loading houses:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchHouses();
  }, []);

  // 可选标签列表（用原始中文 key 做匹配，显示用 i18n）
  const tagKeys = ['selling', 'managed', 'sold', 'owned'];

  // 根据 tag 筛选房源
  const currentTag = selectedTag || activeTag;
  const filteredHouses = currentTag
    ? houses.filter(house => house.tags && house.tags.includes(currentTag))
    : houses;

  // 当筛选条件变化时重置显示数量
  useEffect(() => {
    setVisibleHouses(6);
  }, [currentTag]);

  const styles = {
    singleNews: {
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '30px',
      height: '300px',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    overlay: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      transition: 'background-color 0.5s ease, transform 0.5s ease',
    },
    overlayHover: {
      backgroundColor: 'rgba(15, 60, 158, 0.9)',
    },
    content: {
      transform: 'translateY(0)',
      transition: 'transform 0.5s ease',
    },
    contentHover: {
      transform: 'translateY(-50%)',
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
    },
    tagBadge: {
      display: 'inline-block',
      padding: '2px 8px',
      backgroundColor: '#0f3c9e',
      color: '#fff',
      borderRadius: '4px',
      fontSize: '12px',
      marginRight: '5px',
    }
  };


  return (
      <div className="news-area news-area-2">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" className="text-center mb-4">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <label style={{ fontSize: '16px', fontWeight: '700', color: '#333' }}>{t('house.filterLabel')}</label>
                <select
                  value={currentTag || ''}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '15px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                    outline: 'none',
                    backgroundColor: '#fff',
                  }}
                >
                  <option value="">{t('house.all')}</option>
                  {tagKeys.map(tag => (
                    <option key={tag} value={tag}>{t(`house.tags.${tag}`)}</option>
                  ))}
                </select>
              </div>
            </Col>
          </Row>
          {loading ? <LoadingSpinner text={t('common.loading')} height="300px" /> : (
          <Row className="justify-content-center">
            {filteredHouses.slice(0, visibleHouses).map((house, index) => (
                <div className="col-lg-4 col-md-6 col-sm-9" key={index}>
                  <div
                      className="single-news"
                      style={{ ...styles.singleNews, cursor: 'pointer' }}
                      onClick={() => history.push(`/house-details/${house.folderName}`)}
                      onMouseEnter={(e) => {
                        e.currentTarget.querySelector('.single-news-overlay').style.backgroundColor = styles.overlayHover.backgroundColor;
                        e.currentTarget.querySelector('.content').style.transform = styles.contentHover.transform;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.querySelector('.single-news-overlay').style.backgroundColor = styles.overlay.backgroundColor;
                        e.currentTarget.querySelector('.content').style.transform = styles.content.transform;
                      }}
                  >
                    <img
src={getCoverUrl(house)}
                        alt={house.title}
                        style={styles.img}
                    />
                    <div className="single-news-overlay" style={styles.overlay}>
                      <div className="content" style={styles.content}>
                        <span style={styles.category}>
                          {(house.tags || []).filter(tag => tagKeys.includes(tag)).map(tag => (
                            <span key={tag} style={styles.tagBadge}>{t(`house.tags.${tag}`)}</span>
                          ))}
                          {house.category || t('house.defaultCategory')}
                        </span>
                        <h5 className="title" style={styles.title}>
                          {house.title}
                        </h5>
                        <div style={styles.icon}>
                          <i className="fal fa-long-arrow-right" style={{ color: 'white' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </Row>
          )}
          <Row>
            <Col lg="8" className="text-center">
              {visibleHouses < filteredHouses.length && (
                  <button
                      style={styles.loadMoreBtn}
                      onClick={() => setVisibleHouses(visibleHouses + 6)}
                  >
                    {t('house.loadMore')}
                  </button>
              )}
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default NewsPart;