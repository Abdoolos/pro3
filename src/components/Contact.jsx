import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    // EmailJS configuration
    const serviceId = 'service_7o353je';
    const templateId = 'template_yf3r9tg';
    const publicKey = 'PojbIPLOMoRlCxPSf';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setMessage({ 
          type: 'success', 
          text: t('contact.success') || '✅ تم إرسال الرسالة بنجاح!'
        });
        form.current.reset();
        setIsLoading(false);
        
        // Clear message after 5 seconds
        setTimeout(() => {
          setMessage({ type: '', text: '' });
        }, 5000);
      }, (error) => {
        console.log('FAILED...', error.text);
        setMessage({ 
          type: 'error', 
          text: t('contact.error') || '❌ حدث خطأ، حاول مرة أخرى'
        });
        setIsLoading(false);
        
        // Clear message after 5 seconds
        setTimeout(() => {
          setMessage({ type: '', text: '' });
        }, 5000);
      });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="badge">{t('contact.badge')}</span>
          <h2 className="h2">{t('contact.title')}</h2>
          <p className="sub">{t('contact.body')}</p>
        </div>
        
        <div className="grid grid--contact">
          {/* Contact Info */}
          <div className="contact-info card">
            <h3 style={{ marginBottom: 24, fontSize: 24, fontWeight: 600 }}>
              {t('contact.info')}
            </h3>
            
            <div className="contact-item">
              <strong>📍 {t('contact.address')}</strong>
              <div>Oslo, Norge</div>
            </div>
            
            <div className="contact-item">
              <strong>📞 {t('contact.phone')}</strong>
              <div>0047-48672158</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form card">
            <h3 style={{ marginBottom: 24, fontSize: 24, fontWeight: 600 }}>
              {t('contact.form.title')}
            </h3>
            
            {message.text && (
              <div className={`contact-message ${message.type}`}>
                {message.text}
              </div>
            )}
            
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  className="form-input"
                  placeholder={t('contact.form.name')}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  className="form-input"
                  placeholder={t('contact.form.email')}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder={t('contact.form.message')}
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn--primary"
                disabled={isLoading}
                style={{ width: '100%' }}
              >
                {isLoading ? t('contact.form.sending') : t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
