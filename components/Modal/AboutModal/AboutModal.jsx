import React, { useState } from "react";
import FlowerXLImg from "../../../src/assets/img/img_flower_xl.png";
import IconCloseWhite from "../../../src/assets/img/icon_close_white.svg";
import About2024 from "../../../sections/AboutSection/AboutFolders/2024/About2024";
import About2025 from "../../../sections/AboutSection/AboutFolders/2025/About2025";
import About2026 from "../../../sections/AboutSection/AboutFolders/2026/About2026";
import "./AboutModal.css";

const Modal = ({ openModal, setOpenModal, content }) => {
  const [currentView, setCurrentView] = useState();
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const renderModalContent = () => {
    switch (content) {
      case 2024:
        return <About2024 />;
      case 2025:
        return <About2025/>;
      case 2026:
       return <About2026/>;
    }
  };


  return (
    <div
      className={`c-modal-overlay ${openModal ? "active" : ""}`}
      onClick={handleCloseModal}
    >
      <div
        className={`c-modal__container ${openModal ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={IconCloseWhite}
          alt="Close"
          className="c-modal__close"
          onClick={handleCloseModal}
        />
        <div className="c-modal__content">
          {renderModalContent()}
          <img src={FlowerXLImg} class="c-modal__flower" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
