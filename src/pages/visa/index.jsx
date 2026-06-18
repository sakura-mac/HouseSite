import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';
import { useI18n } from '../../i18n/i18n';
import { API_BASE, getCoverUrl } from '../../config';

function VisaPage() {
  const [visas, setVisas] = useState([]);
  const { t, locale } = useI18n();

  useEffect(() => {
    fetch(`${API_BASE}/api/visas`)
      .then(res => res.json())
      .then(data => setVisas(data.map(v => ({ ...v, folderName: v.folder_name }))))
      .catch(err => console.error('Error loading visas:', err));
  }, []);

  return (
    <Layout>
      {/* 联系方式区 */}
      <div className="visa-contact-area pt-60 pb-30" style={{ background: '#f7f7f7' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="text-center">
                <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '12px', color: '#333' }}>
                  {t('visa.contactTitle')}
                </h3>
                <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
                  {t('visa.contactSubtitle')}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '20px',
                }}>
                  <a href="mailto:88swallow@gmail.com" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '10px 24px', background: '#fff', borderRadius: '30px',
                    color: '#333', textDecoration: 'none', fontSize: '15px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}>
                    <i className="fal fa-envelope" /> 88swallow@gmail.com
                  </a>
                  <a href="tel:078-891-7099" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '10px 24px', background: '#fff', borderRadius: '30px',
                    color: '#333', textDecoration: 'none', fontSize: '15px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}>
                    <i className="fal fa-phone" /> 078-891-7099
                  </a>
                </div>
                <div style={{
                  display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
                  gap: '16px', marginTop: '16px',
                }}>
                  <span style={{
                    padding: '6px 16px', background: '#07c160', borderRadius: '20px',
                    color: '#fff', fontSize: '13px',
                  }}>{t('visa.wechat')}: 88swallow</span>
                  <span style={{
                    padding: '6px 16px', background: '#25D366', borderRadius: '20px',
                    color: '#fff', fontSize: '13px',
                  }}>{t('visa.whatsapp')}: 88swallow</span>
                  <span style={{
                    padding: '6px 16px', background: '#06C755', borderRadius: '20px',
                    color: '#fff', fontSize: '13px',
                  }}>{t('visa.line')}: 88swallow</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 签证文章列表 */}
      <div className="news-area news-area-2 pt-60 pb-90">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col lg="12" className="text-center">
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#333' }}>
                {t('visa.listTitle')}
              </h3>
            </Col>
          </Row>
          {visas.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#999', padding: '60px 0' }}>
              {locale === 'ja' ? 'まだ記事がありません。' : '暂无文章。'}
            </p>
          ) : (
            <Row className="justify-content-center">
              {visas.map((visa, index) => (
                <div className="col-lg-4 col-md-6 col-sm-9" key={index}>
                  <div
                    className="single-news"
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      marginBottom: '30px',
                      height: '300px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.querySelector('.single-news-overlay').style.backgroundColor = 'rgba(15, 60, 158, 0.9)';
                      e.currentTarget.querySelector('.content').style.transform = 'translateY(-50%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.querySelector('.single-news-overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                      e.currentTarget.querySelector('.content').style.transform = 'translateY(0)';
                    }}
                  >
                    <img
                      src={getCoverUrl(visa, 'visa')}
                      alt={visa.title || 'Visa cover'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                    <div
                      className="single-news-overlay"
                      style={{
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
                        transition: 'background-color 0.5s ease',
                      }}
                    >
                      <div className="content" style={{ transition: 'transform 0.5s ease' }}>
                        <span style={{ color: '#fff', fontWeight: 'bold' }}>
                          {visa.category || t('visa.title')}
                        </span>
                        <h5 className="title" style={{ margin: '0', fontSize: '1.5rem', color: '#fff' }}>
                          <Link to={`/visa-details/${visa.folderName}`} style={{ color: 'white', textDecoration: 'none' }}>
                            {visa.title}
                          </Link>
                        </h5>
                        <Link to={`/visa-details/${visa.folderName}`} style={{ display: 'inline-block', marginLeft: '10px' }}>
                          <i className="fal fa-long-arrow-right" style={{ color: 'white' }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          )}
        </Container>
      </div>
    </Layout>
  );
}

export default VisaPage;
