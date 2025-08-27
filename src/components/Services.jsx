import React from "react";
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
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="h2">{t("sections.services.title")}</h2>
        <p className="sub">{t("sections.services.sub")}</p>
        <div className="grid grid--3" style={{marginTop:48}}>
          {items.map(({k,Icon})=>(
            <motion.article key={k}
              className="card" whileHover={{y:-4,scale:1.01}} whileTap={{scale:0.98}}
              transition={{type:"spring",stiffness:260,damping:18}}>
              <Icon className="card__icon"/>
              <h3 className="card__title">{t(`services.${k}.title`)}</h3>
              <p className="card__desc">{t(`services.${k}.desc`)}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
