import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from './components/dictionaries/es.json'
import translationEN from './components/dictionaries/en.json'

const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    }
  })

  export default i18n;