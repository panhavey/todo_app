import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {
    translation: {
      Hello: 'Hello',
      lang: 'English',
    },
  },
  kh: {
    translation: {
      Hello: 'សួស្ដី',
      lang: 'ភាសាខ្មែរ',
    },
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18n;
