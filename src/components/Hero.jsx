import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import ThreeBackground from "./ThreeBackground";

export default function Hero(){
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId) => {
    console.log('🎯 Attempting to scroll to:', sectionId);
    const element = document.getElementById(sectionId);
    console.log('📍 Element found:', element);
    
    if (element) {
      console.log('✅ Scrolling to element:', element);
      // إضافة تأخير صغير وتحسينات للتنقل
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        console.log('🚀 Scroll initiated successfully');
      }, 100);
    } else {
      console.error('❌ Element not found with ID:', sectionId);
    }
  };
  
  return (
    <section 
      id="home" 
      className="section relative overflow-hidden" 
      style={{
        background: "linear-gradient(135deg, #F6FBF8 0%, #E8F5E8 100%)",
        position: "relative"
      }}
    >
      {/* Three.js Interactive Background */}
      <ThreeBackground />

      <div className="container relative z-10" style={{display:"grid",gap:40,gridTemplateColumns:"1.1fr 1fr",alignItems:"center"}}>
        <div>
          <h1 className="h2" style={{textAlign:"left"}}>
            <span>{t("hero.t1")}</span><br/>
            <span style={{color:"var(--primary)"}}>{t("hero.t2")}</span>
          </h1>
          <p className="sub" style={{textAlign:"left",maxWidth:560,marginTop:16}}>{t("hero.desc")}</p>
          <div style={{display:"flex",gap:14,marginTop:28,position:"relative",zIndex:100,pointerEvents:"auto"}}>
            <button 
              className="btn btn--primary" 
              onClick={() => scrollToSection('contact')}
              style={{position:"relative",zIndex:101,pointerEvents:"auto"}}
            >
              {t("hero.cta1")}
            </button>
            <button 
              className="btn btn--outline" 
              onClick={() => scrollToSection('services')}
              style={{position:"relative",zIndex:101,pointerEvents:"auto"}}
            >
              {t("hero.cta2")} <ArrowRight size={18}/>
            </button>
          </div>
        </div>
        <img 
          src="/p4.png" 
          alt="Hero illustration" 
          style={{maxWidth:"420px",justifySelf:"center"}}
        />
      </div>
    </section>
  );
}
