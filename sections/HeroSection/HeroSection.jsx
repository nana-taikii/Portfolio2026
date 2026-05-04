import React, {useState, useEffect} from "react";
import HeroImg from "../../src/assets/img/bg_hero.webp";
import HeroImgSp from "../../src/assets/img/bg_hero_sp.webp";

import FlowImg from "../../src/assets/img/img_flower.png";
import HeroImg1 from "../../src/assets/img/bg_wallpaper1.png";
import HeroImg2 from "../../src/assets/img/bg_wallpaper2.png";
import HeroImg3 from "../../src/assets/img/bg_wallpaper3.png";
import HeroImg4 from "../../src/assets/img/bg_wallpaper4.png";
import HeroImg5 from "../../src/assets/img/bg_wallpaper5.png";

import "./HeroSection.css";

const HeroSection = () => {
const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    { id: 1, image: HeroImg2, alt: "Wallpaper 1" },
    { id: 2, image: HeroImg1, alt: "Wallpaper 2" },
    { id: 3, image: HeroImg3, alt: "Wallpaper 3" },
    { id: 4, image: HeroImg4, alt: "Wallpaper 4" },
    { id: 5, image: HeroImg5, alt: "Wallpaper 5" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section  className="c-hero-section">
      
      <div className="c-hero-section__container">
        <picture>
          <source srcset={HeroImgSp} media="(max-width:1280px)" />
          <img src={HeroImg} alt="Nana" className="c-hero-section__img" />
        
        </picture>
         {/* <div className="c-slides-container">
          {slides.map((slide, index) => (
            <picture
              key={slide.id}
              className={`c-slides ${index === currentIndex ? 'active' : ''}`}
              style={{
                opacity: index === currentIndex ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            >
              <img 
                src={slide.image} 
                alt={slide.alt} 
                className="c-hero-section__img" 
              />
            </picture>
          ))}
        </div> */}
        <div className="c-hero-section__desc">
          <h1 className = 'reveal'>hi,im donna</h1>
          <p className = 'reveal'>
            i’m an artist, UI/UX designer and a web developer. I enjoy blending
            creativity with functionality.
          </p>
          <a href="#contact" className="c-btn-brown">
            <span>see my work</span>
            <img src={FlowImg} alt="flower" className="c-flower" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
