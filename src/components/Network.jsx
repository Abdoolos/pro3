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
            <div key={country.key} className="card">
              <div style={{fontSize: 48, marginBottom: 16, textAlign: 'center'}}>
                {country.flag}
              </div>
              <h3 className="card__title" style={{textAlign: 'center', fontSize: 20}}>
                {t(`countries.${country.key}.title`)}
              </h3>
              <p className="card__desc" style={{textAlign: 'center'}}>
                {t(`countries.${country.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
