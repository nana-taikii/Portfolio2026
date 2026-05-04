import React from "react";
import HeroSection from "../../sections/HeroSection/HeroSection";
import AboutSection from "../../sections/AboutSection/AboutSection";
import ServicesSection from "../../sections/ServicesSection/ServicesSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";
import ArtsSection from "../../sections/ArtsSection/ArtsSection";
import ContactSection from "../../sections/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* <HeroSection />

      <AboutSection />
      <ServicesSection /> */}
      {/* <ServicesSection />  */}
       {/* <AboutSection /> */}
        <HeroSection />
        <ServicesSection /> 
      <ProjectsSection />
        <ArtsSection />
        <ContactSection /> 
        {/* <ContactSection />  */}
    
      {/* <ContactSection />  */}
    </>
  );
};

export default Home;
