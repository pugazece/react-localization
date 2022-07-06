import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { setLanguage } from './config/locales'

const App = () => {
  const { t, i18n } = useTranslation()

  // Update the document language and direction
  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])

  return (
    <div className="app">
      <h2 onClick={() => i18n.changeLanguage(i18n.language === 'ta' ? 'ar' : 'ta')}>{t('greetings')}</h2>
    </div>
  )
}

export default App
