import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import ThreeBackground from "./ThreeBackground";

export default function Hero(){
  const { t } = useTranslation();
  
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
          <div style={{display:"flex",gap:14,marginTop:28}}>
            <a className="btn btn--primary" href="#contact">{t("hero.cta1")}</a>
            <a className="btn btn--outline" href="#services">{t("hero.cta2")} <ArrowRight size={18}/></a>
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
