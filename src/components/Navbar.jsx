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
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            cursor: 'pointer'
          }}
        />
        
        {/* Menu Container */}
        <div 
          className="mobile-menu-container"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '320px',
            maxWidth: '85vw',
            backgroundColor: 'white',
            zIndex: 1001,
            boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div className="mobile-menu-content">
            {/* Header */}
            <div 
              className="mobile-menu-header"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 24px',
                borderBottom: '1px solid #e5e7eb',
                backgroundColor: 'white'
              }}
            >
              <span style={{ 
                fontWeight: 700, 
                fontSize: '18px', 
                color: '#1f2937' 
              }}>
                {t("nav.menu")}
              </span>
              <button 
                className="mobile-menu-close"
                onClick={closeMenu}
                aria-label="Close menu"
                style={{
                  width: '44px',
                  height: '44px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '28px',
                  color: '#6b7280',
                  fontWeight: 'normal',
                  lineHeight: 1
                }}
              >
                ×
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav 
              className="mobile-menu-nav"
              style={{
                flex: 1,
                padding: '24px',
                overflowY: 'auto'
              }}
            >
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
                style={{
                  display: 'inline-block',
                  marginTop: '24px',
                  padding: '12px 24px',
                  backgroundColor: '#22C55E',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textAlign: 'center',
                  width: '100%'
                }}
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
    <header 
      className="header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        zIndex: 100
      }}
    >
      <div 
        className="navbar-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          height: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Logo */}
        <div 
          className="logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontWeight: 700,
            color: '#1a1a1a'
          }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="16" fill="#22C55E"/>
            <path d="M12 18l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>ScandiTrade</span>
        </div>

        {/* Desktop Navigation */}
        <nav 
          className="nav nav--desktop"
          style={{
            display: window.innerWidth > 1024 ? 'flex' : 'none',
            alignItems: 'center',
            gap: '24px'
          }}
        >
          <a href="#home">{t("nav.home")}</a>
          <a href="#services">{t("nav.services")}</a>
          <a href="#products">{t("nav.products")}</a>
          <a href="#about">{t("nav.about")}</a>
          <a href="#network">{t("nav.network")}</a>
          <a href="#contact">{t("nav.contact")}</a>
          <a className="btn btn--primary" href="#contact">{t("nav.cta")}</a>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Controls - مع ألوان مجبرة */}
        <div 
          style={{
            display: window.innerWidth <= 1024 ? 'flex' : 'none',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'transparent'
          }}
        >
          {/* Language Switcher */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LanguageSwitcher />
          </div>
          
          {/* Menu Button */}
          <button 
            onClick={openMenu}
            aria-label="Open navigation menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              borderRadius: '8px',
              padding: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            {/* Hamburger Icon مع ألوان واضحة */}
            <div style={{
              width: '24px',
              height: '18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <span style={{
                width: '100%',
                height: '3px',
                backgroundColor: '#000000',
                borderRadius: '2px',
                display: 'block',
                boxShadow: '0 0 1px rgba(255,255,255,0.5)',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none'
              }}></span>
              <span style={{
                width: '100%',
                height: '3px',
                backgroundColor: '#000000',
                borderRadius: '2px',
                display: 'block',
                boxShadow: '0 0 1px rgba(255,255,255,0.5)',
                transition: 'all 0.3s ease',
                opacity: isMenuOpen ? 0 : 1,
                transform: isMenuOpen ? 'scaleX(0)' : 'none'
              }}></span>
              <span style={{
                width: '100%',
                height: '3px',
                backgroundColor: '#000000',
                borderRadius: '2px',
                display: 'block',
                boxShadow: '0 0 1px rgba(255,255,255,0.5)',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none'
              }}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Portal */}
        <MobileMenuPortal />
      </div>
    </header>
  );
}
