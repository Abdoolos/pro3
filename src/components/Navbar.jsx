import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar(){
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="container" style={{display:"flex",alignItems:"center",gap:24, padding:"14px 0"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,fontWeight:700}}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="16" fill="#22C55E"/>
            <path d="M12 18l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>ProHuset</span>
        </div>
        <nav className="nav" style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:16}}>
          <a href="#home">{t("nav.home")}</a>
          <a href="#services">{t("nav.services")}</a>
          <a href="#products">{t("nav.products")}</a>
          <a href="#about">{t("nav.about")}</a>
          <a href="#network">{t("nav.network")}</a>
          <a href="#contact">{t("nav.contact")}</a>
          <a className="btn btn--primary" href="#contact">{t("nav.cta")}</a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
