import React, { useState, useEffect } from 'react';
import { useI18n } from '../../i18n/i18n';

const FIRST_VISIT_KEY = 'lang_ball_shown';

const MobileLangBall = () => {
  const { locale, setLocale } = useI18n();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // 只有第一次访问且未手动设置过语言时才显示
    const shown = localStorage.getItem(FIRST_VISIT_KEY);
    const userSet = localStorage.getItem('app_locale');
    if (!shown && !userSet) {
      // 延迟 1.5 秒出现，避免和页面加载冲突
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelect = (lang) => {
    setLocale(lang);
    localStorage.setItem(FIRST_VISIT_KEY, '1');
    setExpanded(false);
    setVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem(FIRST_VISIT_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  const styles = {
    container: {
      position: 'fixed',
      bottom: expanded ? '50%' : '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      transition: 'bottom 0.4s ease',
      display: 'none', // 默认隐藏，通过媒体查询在移动端显示
    },
    ball: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #0f3c9e, #1a5cc4)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(15, 60, 158, 0.4)',
      animation: 'langBallPulse 2s ease-in-out infinite',
      margin: '0 auto',
    },
    panel: {
      background: '#fff',
      borderRadius: '16px',
      padding: '16px',
      boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
      textAlign: 'center',
      minWidth: '220px',
      marginBottom: '12px',
    },
    title: {
      fontSize: '15px',
      fontWeight: '700',
      color: '#333',
      marginBottom: '14px',
    },
    btnRow: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
    },
    langBtn: {
      padding: '10px 24px',
      borderRadius: '8px',
      border: '2px solid #0f3c9e',
      background: '#fff',
      color: '#0f3c9e',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    langBtnActive: {
      background: '#0f3c9e',
      color: '#fff',
    },
    closeBtn: {
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      background: '#ff4757',
      color: '#fff',
      border: 'none',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 1,
    },
  };

  return (
    <div style={styles.container} className="mobile-lang-ball-container">
      {expanded ? (
        <div style={{ position: 'relative' }}>
          <div style={styles.panel}>
            <div style={styles.title}>🌐 请选择语言 / 言語を選択してください</div>
            <div style={styles.btnRow}>
              <button
                style={{ ...styles.langBtn, ...(locale === 'zh' ? styles.langBtnActive : {}) }}
                onClick={() => handleSelect('zh')}
              >
                中文
              </button>
              <button
                style={{ ...styles.langBtn, ...(locale === 'ja' ? styles.langBtnActive : {}) }}
                onClick={() => handleSelect('ja')}
              >
                日本語
              </button>
            </div>
          </div>
          <button style={styles.closeBtn} onClick={handleDismiss}>✕</button>
        </div>
      ) : (
        <div style={styles.ball} onClick={() => setExpanded(true)}>
          🌐
        </div>
      )}
      <style>{`
        @keyframes langBallPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        @media (max-width: 768px) {
          .mobile-lang-ball-container {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileLangBall;
