import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'app_locale';
const DEFAULT_LOCALE = 'zh';
const SUPPORTED = ['zh', 'ja'];

const loadMessages = (locale) => {
  try {
    // Webpack will bundle statically; falls back to default when missing.
    // eslint-disable-next-line global-require, import/no-dynamic-require
    return require(`./locales/${locale}.json`);
  } catch (err) {
    return require('./locales/zh.json');
  }
};

const I18nContext = createContext({
  locale: DEFAULT_LOCALE,
  t: (key, fallback) => fallback || key,
  setLocale: () => {},
});

const getNested = (obj, path) => {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
};

const pickNavigator = () => {
  if (typeof navigator === 'undefined') return undefined;
  const lang = navigator.language || (navigator.languages && navigator.languages[0]);
  if (!lang) return undefined;
  const prefix = lang.toLowerCase().slice(0, 2);
  return SUPPORTED.includes(prefix) ? prefix : undefined;
};

const detectFromStorage = () => {
  if (typeof localStorage === 'undefined') return undefined;
  const stored = localStorage.getItem(STORAGE_KEY);
  return SUPPORTED.includes(stored) ? stored : undefined;
};

const detectFromIp = async () => {
  try {
    const resp = await fetch('https://ipapi.co/json/');
    if (!resp.ok) return undefined;
    const data = await resp.json();
    if (data && data.country_code === 'JP') return 'ja';
  } catch (err) {
    return undefined;
  }
  return undefined;
};

export const I18nProvider = ({ children }) => {
  const [locale, setLocaleState] = useState(detectFromStorage() || pickNavigator() || DEFAULT_LOCALE);

  useEffect(() => {
    let mounted = true;
    if (!detectFromStorage()) {
      detectFromIp().then((detected) => {
        if (mounted && detected && detected !== locale) {
          setLocaleState(detected);
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, detected);
          }
        }
      });
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const messages = useMemo(() => loadMessages(locale), [locale]);

  const setLocale = (next) => {
    if (!SUPPORTED.includes(next)) return;
    setLocaleState(next);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next);
    }
  };

  const t = (key, fallback) => {
    const val = getNested(messages, key);
    if (val === undefined) return fallback || key;
    return val;
  };

  const value = useMemo(() => ({ locale, t, setLocale }), [locale, messages]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);

export const withI18n = (Component) => (props) => (
  <I18nContext.Consumer>
    {(ctx) => <Component {...props} i18n={ctx} />}
  </I18nContext.Consumer>
);

export default I18nContext;