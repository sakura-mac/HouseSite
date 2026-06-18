import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';
import { useI18n } from '../../i18n/i18n';
import { API_BASE, getCoverUrl, getContentImageUrl } from '../../config';

function VisaDetails() {
  const { folderName } = useParams();
  const [visa, setVisa] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t, locale } = useI18n();

  useEffect(() => {
    fetch(`${API_BASE}/api/visas/${encodeURIComponent(folderName)}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setVisa(null);
        } else {
          setVisa({ ...data, folderName: data.folder_name });
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading visa:', err);
        setLoading(false);
      });
  }, [folderName]);

  // 渲染 Markdown 内容中的图片
  const renderContent = (content, folderName) => {
    if (!content) return null;
    // 替换 markdown 图片路径
    const processed = content.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      (match, alt, src) => {
        const fullUrl = getContentImageUrl(src, folderName, 'visa');
        return `![${alt}](${fullUrl})`;
      }
    );
    return processed;
  };

  if (loading) {
    return (
      <Layout>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <p>{t('common.loading')}</p>
        </div>
      </Layout>
    );
  }

  if (!visa) {
    return (
      <Layout>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" className="text-center" style={{ paddingTop: '100px' }}>
              <h2>{locale === 'ja' ? '記事が見つかりません' : '文章未找到'}</h2>
              <Link to="/visa" className="main-btn mt-30">{t('visa.title')}</Link>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="page-title-area" style={{
        backgroundImage: 'url(assets/images/page-title-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Container>
          <Row>
            <Col lg="12">
              <div className="page-title-item text-center">
                <h2 className="title">{visa.title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/"}>{t('header.nav.home')}</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/visa">{t('visa.title')}</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{visa.title}</li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="blog-details-area pt-90 pb-120">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="blog-details-thumb">
                <img
                  src={getCoverUrl(visa, 'visa')}
                  alt={visa.title}
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </div>
              <div className="blog-details-content mt-30">
                <ul className="blog-meta">
                  <li><i className="fal fa-calendar-alt" /> {new Date(visa.date).toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'zh-CN')}</li>
                  {visa.author && <li><i className="fal fa-user" /> {visa.author}</li>}
                </ul>
                <div
                  className="blog-content-text"
                  dangerouslySetInnerHTML={{
                    __html: renderMarkdown(renderContent(visa.content, visa.folderName))
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

// 简易 Markdown 渲染（标题、段落、图片、列表、加粗）
function renderMarkdown(md) {
  if (!md) return '';
  let html = md;
  // 图片
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width:100%;border-radius:8px;margin:16px 0;" />');
  // 标题
  html = html.replace(/^### (.+)$/gm, '<h3 style="margin:24px 0 12px;">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 style="margin:28px 0 14px;">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 style="margin:28px 0 14px;">$1</h1>');
  // 加粗
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // 列表
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  // 段落
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';
  // 清理空段落
  html = html.replace(/<p>\s*<\/p>/g, '');
  return html;
}

export default VisaDetails;
