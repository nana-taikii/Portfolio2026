import React, { useState, useEffect } from "react";
import IconMenu from "../../src/assets/img/icon_menu.svg";
import IconClose from "../../src/assets/img/icon_close.svg";
import CurveOrange from "../../src/assets/img/img_curve_orange.svg";
import FlowerImg from "../../src/assets/img/img_flower.png";
import "./Header.css";

const Header = () => {
  const [toggleOverlay, setToggleOverlay] = useState(false);

  // SOLUTION 1: Handle hash links on initial page load (from Stack Overflow)
  useEffect(() => {
    // Check if there's a hash in the URL when page first loads
    const hash = window.location.hash;
    if (hash && hash !== "") {
      // Small delay to ensure React has rendered all components
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // 300ms delay as suggested in Stack Overflow
    }
  }, []); // Empty array means this runs once when component mounts

  // SOLUTION 2: Handle navigation clicks (your existing code, improved)
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Close any active mobile keyboard
    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }
    
    // Close overlay
    setToggleOverlay(false);
    
    // Ensure body scroll is re-enabled
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    
    // Scroll to section with delay (matches Stack Overflow approach)
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Get header height for offset
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update URL hash without causing scroll
        window.location.hash = sectionId;
      }
    }, 300); // Using 300ms as suggested in Stack Overflow
  };

  const handleToggleNavBar = () => {
    if (!toggleOverlay) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    setToggleOverlay(!toggleOverlay);
  };

  const handleCloseNavbar = () => {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    setToggleOverlay(false);
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && toggleOverlay) {
        handleCloseNavbar();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [toggleOverlay]);

  return (
    <header>
      <ul className="c-header">
        <li>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>about me</a>
          <img src={FlowerImg} className="c-flower" alt="flower" />
        </li>
        <li>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")}>services</a>
          <img src={FlowerImg} className="c-flower" alt="flower" />
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>projects</a>
          <img src={FlowerImg} className="c-flower" alt="flower" />
        </li>
        <li>
          <a href="#arts" onClick={(e) => handleNavClick(e, "arts")}>arts</a>
          <img src={FlowerImg} className="c-flower" alt="flower" />
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="c-btn-pink">
            let's talk
          </a>
        </li>
      </ul>
      <div className="c-header-sp">
        {!toggleOverlay && (
          <img
            src={IconMenu}
            alt="Menu"
            className="c-header-sp__menu"
            onClick={handleToggleNavBar}
          />
        )}
        <div
          className={
            toggleOverlay ? "c-header-overlay active" : "c-header-overlay"
          }
        >
          <img
            src={IconClose}
            alt="Close"
            className="c-header-sp__close"
            onClick={handleCloseNavbar}
          />
          <ul className="c-header-nav-sp">
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
                about me
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, "services")}>
                services
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
                projects
              </a>
            </li>
            <li>
              <a href="#arts" onClick={(e) => handleNavClick(e, "arts")}>
                arts
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="c-btn-pink">
                let's talk
              </a>
            </li>
          </ul>
          <img src={CurveOrange} className="c-header-sp__curve" alt="curve" />
        </div>
      </div>
    </header>
  );
};

export default Header;