import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Coffee, Shirt, Palette, Box, Factory, Ship } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { k:"coffee", Icon:Coffee },
  { k:"textiles", Icon:Shirt },
  { k:"handicrafts", Icon:Palette },
  { k:"raw", Icon:Box },
  { k:"industry", Icon:Factory },
  { k:"import", Icon:Ship },
];

export default function Services(){
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);
  
  return (
    <section id="services" className="section" style={{position: 'relative', overflow: 'hidden'}}>
      <div className="container">
        <h2 className="h2">{t("sections.services.title")}</h2>
        <p className="sub">{t("sections.services.sub")}</p>
        <div className="grid grid--3" style={{marginTop:48}}>
          {items.map(({k,Icon}, index)=>(
            <motion.article key={k}
              className="card services-card" 
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                y: -12,
                rotateX: 5,
                rotateY: hoveredCard === index ? 8 : 0,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                transformPerspective: 1000
              }}
              whileTap={{scale:0.98}}
              transition={{
                type:"spring",
                stiffness:300,
                damping:20,
                duration: 0.3
              }}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden"
              }}
            >
              <motion.div
                animate={{
                  rotateY: hoveredCard === index ? [0, 5, 0] : 0,
                  z: hoveredCard === index ? 10 : 0
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Icon className="card__icon"/>
              </motion.div>
              
              <motion.h3 
                className="card__title"
                animate={{
                  y: hoveredCard === index ? -2 : 0,
                  z: hoveredCard === index ? 5 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {t(`services.${k}.title`)}
              </motion.h3>
              
              <motion.p 
                className="card__desc"
                animate={{
                  y: hoveredCard === index ? 2 : 0,
                  opacity: hoveredCard === index ? 0.9 : 0.7
                }}
                transition={{ duration: 0.3 }}
              >
                {t(`services.${k}.desc`)}
              </motion.p>

              {/* تأثير الضوء عند الهوفر */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(56, 189, 248, 0.05) 100%)',
                  borderRadius: 'var(--radius)',
                  pointerEvents: 'none'
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredCard === index ? 1 : 0,
                  scale: hoveredCard === index ? 1.02 : 1
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
