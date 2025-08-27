import { useTranslation } from 'react-i18next'
export default function About(){const { t }=useTranslation()
return(<div className='about section'><div className='container content'><div><span className='badge'>{t('about.badge')}</span>
<h2>{t('about.title')}</h2><p>{t('about.body')}</p><ul style={{margin:'12px 0 0',padding:'0 0 0 18px',lineHeight:1.9,color:'var(--muted)'}}>
<li>{t('about.list.0')}</li><li>{t('about.list.1')}</li><li>{t('about.list.2')}</li></ul></div>
<div className='image card' style={{aspectRatio:'4/3',display:'flex',alignItems:'center',justifyContent:'center'}}>
<svg viewBox='0 0 200 160' xmlns='http://www.w3.org/2000/svg' width='80%'><rect x='10' y='20' width='180' height='120' rx='12' fill='white' opacity='.06'/>
<rect x='24' y='40' width='56' height='8' rx='4' fill='white' opacity='.35'/><rect x='24' y='56' width='120' height='8' rx='4' fill='white' opacity='.2'/>
<rect x='24' y='72' width='140' height='8' rx='4' fill='white' opacity='.17'/><rect x='24' y='88' width='96' height='8' rx='4' fill='white' opacity='.14'/>
<rect x='24' y='112' width='152' height='16' rx='8' fill='white' opacity='.10'/></svg></div></div></div>) }