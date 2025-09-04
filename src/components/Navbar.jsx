import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      setTimeout(() => {
        if (firstLinkRef.current) {
          firstLinkRef.current.focus();
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Mobile Menu Portal Component
  const MobileMenuPortal = () => {
    if (!isMenuOpen || !mounted) return null;

    return createPortal(
      <>
        {/* Backdrop */}
        <div 
          className="mobile-menu-backdrop"
          onClick={closeMenu}
        />
        
        {/* Menu Container */}
        <div 
          className="mobile-menu-container"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="mobile-menu-content">
            {/* Header */}
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">{t("nav.menu")}</span>
              <button 
                className="mobile-menu-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <span className="close-icon">×</span>
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="mobile-menu-nav">
              <a href="#home" ref={firstLinkRef} onClick={closeMenu}>{t("nav.home")}</a>
              <a href="#services" onClick={closeMenu}>{t("nav.services")}</a>
              <a href="#products" onClick={closeMenu}>{t("nav.products")}</a>
              <a href="#about" onClick={closeMenu}>{t("nav.about")}</a>
              <a href="#network" onClick={closeMenu}>{t("nav.network")}</a>
              <a href="#contact" onClick={closeMenu}>{t("nav.contact")}</a>
              
              {/* CTA Button */}
              <a 
                className="btn btn--primary mobile-cta" 
                href="#contact" 
                onClick={closeMenu}
              >
                {t("nav.cta")}
              </a>
            </nav>
          </div>
        </div>
      </>,
      document.body
    );
  };

  return (
    <header className="header">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="16" fill="#22C55E"/>
            <path d="M12 18l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>ScandiTrade</span>
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

        {/* Mobile Controls - مع inline styles للتأكد من الظهور */}
        <div 
          className="mobile-controls"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          {/* Language Switcher */}
          <div className="mobile-header-lang">
            <LanguageSwitcher />
          </div>
          
          {/* Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={openMenu}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '8px',
              padding: '0'
            }}
          >
            {/* Hamburger Icon */}
            <div 
              className={`hamburger ${isMenuOpen ? 'hamburger--open' : ''}`}
              style={{
                width: '24px',
                height: '18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <span 
                style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '2px',
                  display: 'block',
                  transition: 'all 0.3s ease',
                  transformOrigin: 'center',
                  transform: isMenuOpen ? 'translateY(8px) rotate(45deg)' : 'none'
                }}
              ></span>
              <span 
                style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '2px',
                  display: 'block',
                  transition: 'all 0.3s ease',
                  opacity: isMenuOpen ? 0 : 1,
                  transform: isMenuOpen ? 'scaleX(0)' : 'none'
                }}
              ></span>
              <span 
                style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '2px',
                  display: 'block',
                  transition: 'all 0.3s ease',
                  transformOrigin: 'center',
                  transform: isMenuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none'
                }}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Portal */}
        <MobileMenuPortal />
      </div>
    </header>
  );
}
