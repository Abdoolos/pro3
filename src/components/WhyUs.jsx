import React from "react";
import { useTranslation } from "react-i18next";

export default function WhyUs(){
  const { t } = useTranslation();
  
  const features = [
    'network',
    'team', 
    'quality',
    'speed',
    'compliance',
    'pricing'
  ];

  return (
    <section className="section section--muted">
      <div className="container">
        <h2 className="h2">{t("sections.why.title")}</h2>
        <p className="sub">{t("sections.why.sub")}</p>
        
        <div className="grid grid--3" style={{marginTop: 48}}>
          {features.map((feature) => (
            <div key={feature} className="feature-item">
              <div className="feature-check">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="var(--primary)" />
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="feature-title">
                {t(`whyUs.${feature}.title`)}
              </h3>
              <p className="feature-desc">
                {t(`whyUs.${feature}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
