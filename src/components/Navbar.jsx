import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar(){
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between", padding:"14px 0"}}>
        {/* Logo */}
        <div style={{display:"flex",alignItems:"center",gap:12,fontWeight:700}}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="16" fill="#22C55E"/>
            <path d="M12 18l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>ProHuset</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav nav--desktop">
          <a href="#home">{t("nav.home")}</a>
          <a href="#services">{t("nav.services")}</a>
          <a href="#products">{t("nav.products")}</a>
          <a href="#about">{t("nav.about")}</a>
          <a href="#network">{t("nav.network")}</a>
          <a href="#contact">{t("nav.contact")}</a>
          <a className="btn btn--primary" href="#contact">{t("nav.cta")}</a>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'hamburger--open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Mobile Navigation */}
        <div className={`nav--mobile ${isMenuOpen ? 'nav--mobile-open' : ''}`}>
          <div className="mobile-menu-header">
            <span style={{fontWeight: 700, fontSize: '18px'}}>{t("nav.menu")}</span>
            <button 
              className="mobile-menu-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <nav className="mobile-menu-nav">
            <a href="#home" onClick={closeMenu}>{t("nav.home")}</a>
            <a href="#services" onClick={closeMenu}>{t("nav.services")}</a>
            <a href="#products" onClick={closeMenu}>{t("nav.products")}</a>
            <a href="#about" onClick={closeMenu}>{t("nav.about")}</a>
            <a href="#network" onClick={closeMenu}>{t("nav.network")}</a>
            <a href="#contact" onClick={closeMenu}>{t("nav.contact")}</a>
            <a className="btn btn--primary mobile-cta" href="#contact" onClick={closeMenu}>{t("nav.cta")}</a>
            <div className="mobile-lang-switcher">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>

        {/* Overlay */}
        {isMenuOpen && <div className="mobile-menu-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
}
