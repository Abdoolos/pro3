import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  
  return (
    <div id='about' className='about section' style={{ background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(167, 243, 208, 0.05) 100%)', padding: '100px 0' }}>
      <div className='container'>
        <div className='content' style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', 
          gap: '60px', 
          alignItems: 'center' 
        }}>
          <div>
            <span className='badge' style={{ 
              background: 'var(--primary)', 
              color: 'white', 
              padding: '8px 20px', 
              borderRadius: '25px', 
              fontSize: '14px', 
              fontWeight: '600',
              marginBottom: '20px',
              display: 'inline-block'
            }}>
              {t('about.badge')}
            </span>
            
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '800', 
              marginBottom: '24px', 
              lineHeight: '1.2',
              background: 'linear-gradient(45deg, var(--primary), var(--primary-600))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {t('about.title')}
            </h2>
            
            <p style={{ 
              fontSize: '18px', 
              lineHeight: '1.8', 
              color: 'var(--muted)', 
              marginBottom: '32px',
              fontWeight: '400'
            }}>
              {t('about.body')}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[0, 1, 2].map((index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '16px',
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    minWidth: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px'
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p style={{ 
                    margin: 0, 
                    lineHeight: '1.6', 
                    color: 'var(--text)',
                    fontSize: '16px'
                  }}>
                    {t(`about.list.${index}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{
            position: 'relative',
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(167, 243, 208, 0.1) 100%)',
            borderRadius: '24px',
            border: '1px solid rgba(34, 197, 94, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '60px',
              height: '60px',
              background: 'var(--primary)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M21 16V8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16Z" stroke="white" strokeWidth="2"/>
                <path d="M3 8L12 13L21 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div style={{ textAlign: 'center', paddingTop: '40px' }}>
              <h3 style={{ 
                color: 'var(--text)', 
                fontSize: '28px', 
                marginBottom: '16px',
                fontWeight: '800',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                Global Trade Solutions
              </h3>
              <p style={{ 
                color: 'var(--muted)', 
                lineHeight: '1.6',
                fontSize: '16px',
                fontWeight: '500'
              }}>
                Connecting businesses worldwide with reliable import and export services
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                marginTop: '32px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '36px', 
                    fontWeight: '900', 
                    color: 'var(--primary)',
                    marginBottom: '8px',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>50+</div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: 'var(--muted)',
                    fontWeight: '600'
                  }}>Countries</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '36px', 
                    fontWeight: '900', 
                    color: 'var(--primary-600)',
                    marginBottom: '8px',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>1000+</div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: 'var(--muted)',
                    fontWeight: '600'
                  }}>Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
