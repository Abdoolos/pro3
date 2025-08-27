import { useTranslation } from 'react-i18next'
export default function Contact(){const { t }=useTranslation()
const onSubmit=e=>{e.preventDefault();alert(t('contact.thanks'))}
return(<div className='contact section'><div className='container'><div style={{textAlign:'center',marginBottom:24}}>
<span className='badge'>{t('contact.badge')}</span><h2>{t('contact.title')}</h2><p>{t('contact.body')}</p></div>
<div className='grid'><div className='info card'>
<div className='row' style={{display:'flex',gap:'14px',alignItems:'flex-start',margin:'12px 0'}}><strong>{t('contact.address')}</strong><div>Oslo, Norge</div></div>
<div className='row' style={{display:'flex',gap:'14px',alignItems:'flex-start',margin:'12px 0'}}><strong>{t('contact.phone')}</strong><div>+47 998 58 236</div></div>
<div className='row' style={{display:'flex',gap:'14px',alignItems:'flex-start',margin:'12px 0'}}><strong>{t('contact.email')}</strong><div>post@dittdomene.no</div></div>
</div><form className='card' onSubmit={onSubmit}><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px'}}>
<input className='input' placeholder={t('form.firstName')} required/><input className='input' placeholder={t('form.lastName')} required/></div>
<input className='input' type='email' placeholder={t('form.email')} required/><input className='input' type='tel' placeholder={t('form.phone')}/>
<textarea className='input' placeholder={t('form.project')}/><button className='btn' type='submit'>{t('form.send')}</button></form></div></div></div>) }