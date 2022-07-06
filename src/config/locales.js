/** Default language code */
const DEFAULT_LANGUAGE = 'en'

/** Available list of languages */
const LOCALES = Object.freeze({
  en: {
    code: 'en',
    label: 'English',
  },
  ta: {
    code: 'ta',
    label: 'தமிழ்',
  },
  ar: {
    code: 'ar',
    label: 'العربية',
    rtl: true,
  },
})

/** Get the details of an language */
const getLanguage = (lng) => {
  let language = LOCALES[lng]

  if (language) return language

  const languageCode = lng.substring(0, 2)
  language = LOCALES[languageCode]

  if (language) return language

  return {}
}

/** Set the document language and direction */
const setLanguage = (lng) => {
  const { code, rtl } = getLanguage(lng)
  document.documentElement.lang = code || DEFAULT_LANGUAGE
  document.dir = rtl ? 'rtl' : 'ltr'
}

export { DEFAULT_LANGUAGE, LOCALES, setLanguage }
