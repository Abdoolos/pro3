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
        border: '1px solid var(--border)',
        borderRadius: '6px',
        cursor: 'pointer',
        background: 'var(--bg, #fff)'
      }}
    >
      {languages.map(l => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  )
}
