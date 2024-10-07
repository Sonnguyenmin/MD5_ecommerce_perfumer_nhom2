import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import viTranslation from './locales/vi.json';
import enTranslation from './locales/en.json';

const resources = {
  vi: {
    translation: viTranslation,
  },

  en: {
    translation: enTranslation,
  },
};

const languageGlobal = JSON.parse(localStorage.getItem('language')) || 'vi';

i18n.use(initReactI18next).init({
  resources: resources,
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    esbuildVersion: false,
  },
});

export default i18n;
