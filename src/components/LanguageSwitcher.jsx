import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'nb', label: 'Norsk' },
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'so', label: 'Soomaali' }
]

export default function LanguageSwitcher(){
  const { i18n } = useTranslation()

  // Normalize unknown codes to first list entry
  const current = languages.some(l => l.code === i18n.language) ? i18n.language : 'nb'

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <select
      value={current}
      onChange={handleChange}
      aria-label="Language"
      className="btn btn--outline"
      style={{
        padding: '8px 12px',
        fontSize: '12px',
        minWidth: '110px',
        fontWeight: 'bold',
        border: '2px solid #000000',
        borderRadius: '6px',
        cursor: 'pointer',
        background: '#ffffff',
        color: '#000000',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#f9fafb';
        e.target.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#ffffff';
        e.target.style.transform = 'scale(1)';
      }}
    >
      {languages.map(l => (
        <option 
          key={l.code} 
          value={l.code}
          style={{
            color: '#000000',
            backgroundColor: '#ffffff',
            padding: '4px 8px'
          }}
        >
          {l.label}
        </option>
      ))}
    </select>
  )
}
