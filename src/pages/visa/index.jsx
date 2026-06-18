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
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 页面标题 */}
      <div className="page-title-area">
        <Container>
          <Row>
            <Col lg="12">
              <div className="page-title-item text-center">
                <h2 className="title">{t('visa.title')}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/"}>{t('header.nav.home')}</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {t('visa.title')}
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 签证文章列表 */}
      <div className="blog-standard-area pt-90 pb-120">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <div className="blog-standard">
                {visas.length === 0 ? (
                  <p style={{ textAlign: 'center', color: '#999', padding: '60px 0' }}>
                    {locale === 'ja' ? 'まだ記事がありません。' : '暂无文章。'}
                  </p>
                ) : (
                  visas.map((visa, index) => (
                    <div className="single-blog-standard mt-30" key={index}>
                      <div className="blog-standard-thumb">
                        <img
                          src={getCoverUrl(visa, 'visa')}
                          alt={visa.title || 'Visa cover'}
                        />
                      </div>
                      <div className="blog-standard-content">
                        <span>{visa.category || t('visa.title')}</span>
                        <h2 className="title">
                          <Link to={`/visa-details/${visa.folderName}`}>{visa.title}</Link>
                        </h2>
                        <ul>
                          <li><i className="fal fa-calendar-alt" /> {new Date(visa.date).toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'zh-CN')}</li>
                          {visa.author && <li><i className="fal fa-user" /> {visa.author}</li>}
                        </ul>
                        <p>{visa.description}</p>
                        <div className="blog-flex">
                          <div className="blog-right">
                            <Link to={`/visa-details/${visa.folderName}`}>
                              <i className="fal fa-arrow-right" /> {t('common.readMore')}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default VisaPage;
