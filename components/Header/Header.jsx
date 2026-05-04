import React, { useState } from "react";

import IconMenu from "../../src/assets/img/icon_menu.svg";
import IconClose from "../../src/assets/img/icon_close.svg";
import CurveOrange from "../../src/assets/img/img_curve_orange.svg";
import FlowerImg from "../../src/assets/img/img_flower.png";
import "./Header.css";

const Header = () => {
  const [toggleOverlay, setToggleOverlay] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  
   const handleNavClick = (e, sectionId) => {
  e.preventDefault();
  setToggleOverlay(false);
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }, 300); // matches your 0.3s CSS transition
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
        <li>
          <a href="#about">about me</a>
          <img src={FlowerImg} className="c-flower" />
        </li>
        <li>
          <a href="#services">services</a>
          <img src={FlowerImg} className="c-flower" />
        </li>
        <li>
          <a href="#projects">projects</a>
          <img src={FlowerImg} className="c-flower" />
        </li>
        <li>
          <a href="#arts">arts</a><img src={FlowerImg} className="c-flower" />
        </li>
        <li>
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
            <li>
              <a href="#about">about me</a>
            </li>
            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#arts">arts</a>
            </li>
            <li>
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
