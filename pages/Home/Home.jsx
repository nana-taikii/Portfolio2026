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
    <div id = 'home'>
        <HeroSection/>
    </div>
    <div id = 'about'><AboutSection/></div>
    <div id = 'services'>  <ServicesSection/></div>
    <div id = 'projects'>  <ProjectsSection/></div>
    <div id = 'arts'> <ArtsSection/></div>
    <div id = 'contact'> <ContactSection/></div>
      
    
    
     
     
     
      
    </>
  );
};

export default Home;
