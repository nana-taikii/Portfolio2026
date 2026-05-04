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
    <a name = '#home'>
        <HeroSection/>
    </a>
    <a name = '#about'><AboutSection/></a>
    <a name = '#services'>  <ServicesSection/></a>
    <a name = '##projects'>  <ProjectsSection/></a>
    <a name = '#arts'> <ArtsSection/></a>
    <a name = '#contact'> <ContactSection/></a>
      
    
    
     
     
     
      
    </>
  );
};

export default Home;
