import React, { useState, useEffect } from "react";

import IconMenu from "../../src/assets/img/icon_menu.svg";
import IconClose from "../../src/assets/img/icon_close.svg";
import CurveOrange from "../../src/assets/img/img_curve_orange.svg";
import FlowerImg from "../../src/assets/img/img_flower.png";
import "./Header.css";

const Header = () => {
  const [toggleOverlay, setToggleOverlay] = useState(false);

  // Handle hash change on page load and manually trigger scroll
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setToggleOverlay(false);
    
    // Small delay for Chrome mobile
    setTimeout(() => {
      window.location.hash = sectionId;
    }, 50);
  };

  const handleToggleNavBar = () => {
    setToggleOverlay(!toggleOverlay);
  };

  const handleCloseNavbar = () => {
    setToggleOverlay(false);
  };

  return (
    <header>
      <ul className="c-header">
        <li onClick={(e) => handleNavClick(e, "home")}>
          <a href="#home">about me</a>
          <img src={FlowerImg} className="c-flower" />
        </li>
        <li onClick={(e) => handleNavClick(e, "services")}>
          <a href="#services">services</a>
          <img src={FlowerImg} className="c-flower" />
        </li>
        <li onClick={(e) => handleNavClick(e, "projects")}>
          <a href="#projects">projects</a>
          <img src={FlowerImg} className="c-flower" />
        </li>
        <li onClick={(e) => handleNavClick(e, "arts")}>
          <a href="#arts">arts</a>
          <img src={FlowerImg} className="c-flower" />
        </li>
        <li onClick={(e) => handleNavClick(e, "contact")}>
          <a href="#contact" className="c-btn-pink">
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
            onClick={() => handleToggleNavBar()}
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
            onClick={() => handleCloseNavbar()}
          />
          <ul className="c-header-nav-sp">
            <li onClick={(e) => handleNavClick(e, "home")}>
              <a href="#home">about me</a>
            </li>
            <li onClick={(e) => handleNavClick(e, "services")}>
              <a href="#services">services</a>
            </li>
            <li onClick={(e) => handleNavClick(e, "projects")}>
              <a href="#projects">projects</a>
            </li>
            <li onClick={(e) => handleNavClick(e, "arts")}>
              <a href="#arts">arts</a>
            </li>
            <li onClick={(e) => handleNavClick(e, "contact")}>
              <a href="#contact" className="c-btn-pink">
                let's talk
              </a>
            </li>
          </ul>
          <img src={CurveOrange} className="c-header-sp__curve" />
        </div>
      </div>
    </header>
  );
};

export default Header;