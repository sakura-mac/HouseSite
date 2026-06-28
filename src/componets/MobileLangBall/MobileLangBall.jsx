import React, { useState, useEffect } from 'react';
import { useI18n } from '../../i18n/i18n';

const FIRST_VISIT_KEY = 'lang_modal_shown';

const MobileLangBall = () => {
  const { locale, setLocale } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 只有第一次访问且未手动设置过语言时才显示
    const shown = localStorage.getItem(FIRST_VISIT_KEY);
    const userSet = localStorage.getItem('app_locale');
    if (!shown && !userSet) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelect = (lang) => {
    setLocale(lang);
    localStorage.setItem(FIRST_VISIT_KEY, '1');
    setVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem(FIRST_VISIT_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      animation: 'langFadeIn 0.3s ease',
    },
    modal: {
      background: '#fff',
      borderRadius: '14px',
      padding: '28px 24px 24px',
      width: '82%',
      maxWidth: '340px',
      textAlign: 'center',
      boxShadow: '0 12px 48px rgba(0,0,0,0.18)',
      animation: 'langSlideUp 0.35s ease',
    },
    icon: {
      fontSize: '32px',
      marginBottom: '12px',
    },
    title: {
      fontSize: '17px',
      fontWeight: '600',
      color: '#2c2c2c',
      marginBottom: '6px',
    },
    subtitle: {
      fontSize: '13px',
      color: '#999',
      marginBottom: '22px',
    },
    btnGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    langBtn: {
      padding: '13px 0',
      borderRadius: '10px',
      border: '1px solid #e0e0e0',
      background: '#fafafa',
      color: '#333',
      fontSize: '15px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    langBtnHighlight: {
      borderColor: '#0f3c9e',
      background: '#0f3c9e',
      color: '#fff',
    },
    skipBtn: {
      marginTop: '14px',
      background: 'none',
      border: 'none',
      color: '#bbb',
      fontSize: '13px',
      cursor: 'pointer',
    },
  };

  return (
    <>
      <div style={styles.overlay} onClick={handleDismiss}>
        <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div style={styles.icon}>🌐</div>
          <div style={styles.title}>言語を選択してください</div>
          <div style={styles.subtitle}>请选择您偏好的语言</div>
          <div style={styles.btnGroup}>
            <button
              style={{ ...styles.langBtn, ...(locale === 'zh' ? styles.langBtnHighlight : {}) }}
              onClick={() => handleSelect('zh')}
            >
              🇨🇳 中文
            </button>
            <button
              style={{ ...styles.langBtn, ...(locale === 'ja' ? styles.langBtnHighlight : {}) }}
              onClick={() => handleSelect('ja')}
            >
              🇯🇵 日本語
            </button>
            <button
              style={{ ...styles.langBtn, ...(locale === 'en' ? styles.langBtnHighlight : {}) }}
              onClick={() => handleSelect('en')}
            >
              🇬🇧 English
            </button>
          </div>
          <button style={styles.skipBtn} onClick={handleDismiss}>
            {locale === 'ja' ? 'スキップ' : locale === 'en' ? 'Skip' : '跳过'}
          </button>
        </div>
      </div>
      <style>{`
        @keyframes langFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes langSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 769px) {
          .mobile-lang-ball-container {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default MobileLangBall;
