import React, { useState } from "react";
import IconCloseWhite from "../../src/assets/img/icon_close_white.svg"

import "../../sections/ProjectsSection/ProjectsSection.css";

const ProjectModal = ({ openModal, setOpenModal, content }) => {
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div
      className={`c-modal-overlay__projects ${openModal ? "active" : ""}`}
    >
    
       <img
          src={IconCloseWhite}
          alt="Close"
          className="c-modal__close__project"
          onClick={handleCloseModal}
        />
      
      {content}
    </div>
  );
};

export default ProjectModal;
