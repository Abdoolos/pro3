import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Network from "./components/Network";
import Flexible from "./components/Flexible";
import Footer from "./components/Footer";
import "./styles.css";

export default function App(){
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Network />
      <Flexible />
      <Footer />
    </>
  );
}
