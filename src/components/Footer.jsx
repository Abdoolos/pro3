import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer(){
  const { t } = useTranslation();
  return (
    <footer className="footer" id="contact">
      <div className="container cols">
        <div>
          <p style={{opacity:.9}}>{t("footer.blurb")}</p>
        </div>
        <div>
          <h4 style={{marginBottom:12}}> {t("footer.svc")} </h4>
          <ul className="muted">
            <li>{t("footer.services.procurement")}</li>
            <li>{t("footer.services.quality")}</li>
            <li>{t("footer.services.audit")}</li>
            <li>{t("footer.services.logistics")}</li>
          </ul>
        </div>
        <div>
          <h4 style={{marginBottom:12}}> {t("footer.cat")} </h4>
          <ul className="muted">
            <li>{t("footer.categories.textiles")}</li>
            <li>{t("footer.categories.coffee")}</li>
            <li>{t("footer.categories.electronics")}</li>
            <li>{t("footer.categories.food")}</li>
          </ul>
        </div>
        <div>
          <h4 style={{marginBottom:12}}> {t("footer.contact")} </h4>
          <ul className="muted">
            <li>{t("footer.email")}: post@norsource.no</li>
            <li>{t("footer.phone")}: +47 22 33 44 55</li>
            <li>{t("footer.address")}: Oslo, Norge</li>
          </ul>
        </div>
      </div>
      <div className="container" style={{marginTop:28, borderTop:"1px solid rgba(255,255,255,.1)", paddingTop:16, display:"flex",justifyContent:"space-between"}}>
        <span className="muted">© 2024 NorSource</span>
        <span className="muted"><a href="#privacy" style={{color:"#fff"}}>{t("footer.privacy")}</a> · <a href="#terms" style={{color:"#fff"}}>{t("footer.terms")}</a> · {t("footer.credit")}</span>
      </div>
    </footer>
  );
}
