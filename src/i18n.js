import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from './components/dictionaries/es.json'
import translationEN from './components/dictionaries/en.json'

const LANGUAGE_STORAGE_KEY = 'portfolio-language'
const supportedLanguages = ['es', 'en']

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'es'
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

  if (storedLanguage && supportedLanguages.includes(storedLanguage)) {
    return storedLanguage
  }

  const browserLanguage = window.navigator.language?.slice(0, 2)

  return supportedLanguages.includes(browserLanguage) ? browserLanguage : 'es'
}

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
    lng: getInitialLanguage(),
    fallbackLng: 'es',
    debug: import.meta.env.DEV,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    }
  })

i18n.on('languageChanged', (language) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = language
  }

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language
}

export default i18n;
