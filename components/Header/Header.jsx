import React, { useState } from "react";

import IconMenu from "../../src/assets/img/icon_menu.svg";
import IconClose from "../../src/assets/img/icon_close.svg";
import CurveOrange from "../../src/assets/img/img_curve_orange.svg";
import FlowerImg from "../../src/assets/img/img_flower.png";
import "./Header.css";

const Header = () => {
  const [toggleOverlay, setToggleOverlay] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  
  // Helper function to scroll to section with smooth behavior
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update URL hash without causing jump
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setToggleOverlay(false);
    scrollToSection(sectionId);
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