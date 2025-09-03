import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Network from "./components/Network";
import Flexible from "./components/Flexible";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MorphingShapes from "./components/MorphingShapes";
import ParallaxElements from "./components/ParallaxElements";
import "./styles.css";

export default function App(){
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* التأثيرات الخلفية */}
      <MorphingShapes scrollY={scrollY} />
      <ParallaxElements scrollY={scrollY} />
      
      {/* محتوى الموقع */}
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Network />
      <Flexible />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
