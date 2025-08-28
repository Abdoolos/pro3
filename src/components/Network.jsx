import React from "react";
import { useTranslation } from "react-i18next";

export default function Network(){
  const { t } = useTranslation();
  
  const countries = [
    { key: 'india', flag: '🇮🇳' },
    { key: 'brasil', flag: '🇧🇷' },
    { key: 'etiopia', flag: '🇪🇹' },
    { key: 'bangladesh', flag: '🇧🇩' },
    { key: 'vietnam', flag: '🇻🇳' },
    { key: 'kenya', flag: '🇰🇪' }
  ];

  return (
    <section className="section section--muted">
      <div className="container">
        <h2 className="h2">{t("sections.network.title")}</h2>
        <p className="sub">{t("sections.network.sub")}</p>
        
        <div className="grid grid--3" style={{marginTop: 48}}>
          {countries.map((country) => (
            <article 
              key={country.key}
              className="card network-card"
            >
              <div className="network-flag">
                {country.flag}
              </div>
              
              <h3 className="card__title">
                {t(`countries.${country.key}.title`)}
              </h3>
              
              <p className="card__desc">
                {t(`countries.${country.key}.desc`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
