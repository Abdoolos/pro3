import React from "react";
import { useTranslation } from "react-i18next";
import { Ship, Plane, Truck, Zap } from "lucide-react";

export default function Flexible(){
  const { t } = useTranslation();
  
  const shippingMethods = [
    { key: 'sea', icon: Ship },
    { key: 'air', icon: Plane },
    { key: 'land', icon: Truck },
    { key: 'express', icon: Zap }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">{t("sections.flex.title")}</h2>
        <p className="sub">{t("sections.flex.sub")}</p>
        
        <div className="grid grid--3" style={{marginTop: 48, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
          {shippingMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <div key={method.key} className="card">
                <IconComponent className="card__icon" size={40} />
                <h3 className="card__title">
                  {t(`shipping.${method.key}.title`)}
                </h3>
                <p className="card__desc">
                  {t(`shipping.${method.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
