import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher(){
  const { i18n } = useTranslation()
  
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'nb' ? 'en' : 'nb')
  }
  
  return (
    <button 
      className='btn btn--outline' 
      onClick={toggleLanguage}
      style={{padding: '8px 16px', fontSize: '14px'}}
    >
      {i18n.language === 'nb' ? 'EN' : 'NB'}
    </button>
  )
}
