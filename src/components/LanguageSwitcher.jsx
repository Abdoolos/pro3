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
      style={{
        padding: '8px 12px', 
        fontSize: '12px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '50px',
        fontWeight: 'bold',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        textAlign: 'center'
      }}
    >
      {i18n.language === 'nb' ? 'EN' : 'NB'}
    </button>
  )
}
