
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./components/sections/AboutSection";
import ArkConsult from "./components/sections/ArkConsult";
import HeroSection from "./components/sections/HeroSection";
import HowItsWorks from "./components/sections/HowItsWorks";
import OurMissionSection from "./components/sections/OurMissionSection";
import ServicesSection from "./components/sections/ServicesSection";


export default function Home() {
  return (
   <>
   <Header/>
  <HeroSection/>
  <AboutSection/>
  <ServicesSection/>  
  <HowItsWorks/>
  <OurMissionSection/>
  <ArkConsult/>
  <Footer/>
   </>
  )
}
