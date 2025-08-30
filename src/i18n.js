import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/common.json'
import nb from './locales/no/common.json'
import ar from './locales/ar/common.json'
import so from './locales/so/common.json'

// Get saved language from localStorage or default to Norwegian
const savedLanguage = localStorage.getItem('language') || 'nb'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    nb: { translation: nb },
    ar: { translation: ar },
    so: { translation: so }
  },
  lng: savedLanguage,
  fallbackLng: 'nb',
  interpolation: {
    escapeValue: false
  }
})

// Direction helper
const applyDir = (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
  }
}
applyDir(i18n.language)

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng)
  applyDir(lng)
})

export default i18n
