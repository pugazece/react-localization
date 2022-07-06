import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_LANGUAGE } from './locales'

/**
 * Initialise i18n
 * Reference: https://www.youtube.com/watch?v=w04LXKlusCQ
 */
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    detection: {
      order: ['querystring', 'localStorage', 'htmlTag', 'subdomain'],
      lookupQuerystring: 'lng',
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'], // languages not to persist
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })

export default i18n
