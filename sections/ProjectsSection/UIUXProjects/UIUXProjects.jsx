import React, { useState } from "react";
import UIUXProject1 from "../../../src/assets/img/img_uiux_project1.webp";
import UIUXProject2 from "../../../src/assets/img/img_uiux_project2.webp";
import UIUXProject3 from "../../../src/assets/img/img_uiux_project3.webp";
import UIUXProject4 from "../../../src/assets/img/img_uiux_project4.webp";
import UIUXProject5 from "../../../src/assets/img/img_uiux_project5.webp";
import UIUXProject6 from "../../../src/assets/img/img_uiux_project6.webp";
import UIUXProject7 from "../../../src/assets/img/img_uiux_project7.webp";
import UIUXProject8 from "../../../src/assets/img/img_uiux_project8.webp";
import UIUXProject9 from "../../../src/assets/img/img_uiux_project9.webp";
import ProjectModal from "../../../components/ProjectModal/ProjectModal";


import UIUXProject1Overview from "../../../src/assets/img/img_uiux_project1_overview.webp"
import UIUXProject2Overview from "../../../src/assets/img/img_uiux_project2_overview.webp"
import UIUXProject3Overview from "../../../src/assets/img/img_uiux_project3_overview.webp"
import UIUXProject4Overview from "../../../src/assets/img/img_uiux_project4_overview.webp"
import UIUXProject5Overview from "../../../src/assets/img/img_uiux_project5_overview.webp"
import UIUXProject6Overview from "../../../src/assets/img/img_uiux_project6_overview.webp"
import UIUXProject7Overview from "../../../src/assets/img/img_uiux_project7_overview.webp"
import UIUXProject8Overview from "../../../src/assets/img/img_uiux_project8_overview.png"
import UIUXProject9Overview from "../../../src/assets/img/img_uiux_project9_overview.webp"


const UIUXProjectsContent = ({ project }) => {
  if (!project) return null;
  
  return (
    <div className='UIUXImgContainer'>
      <h3>{project.title}</h3>
      <div className='c-modal-tools'>
       
        <ul>
          {project.tools.map((tool) => (
            <li key={tool.id}>{tool.toolName}</li>
          ))}
        </ul>
      </div>
      <div className = 'UIUXImg__wrapper'>
        <img src={project.overview} alt={project.title} className='c-modal-img' />
      </div>
    </div>
  );
};



const UIUXProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null); 
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState()

  const UIUXProjects = [
    {
      id: "Project1",
      title: "Mood App",
      img: UIUXProject1,
      overview:UIUXProject1Overview,
      tools: [
        { id: 1, toolName: "Figma" },
        { id: 2, toolName: "Affinity Designer" },
      ],
    },
    {
      id: "Project2",
      title: "Lighthouse", 
      img: UIUXProject2,
      overview:UIUXProject2Overview,
      tools: [
        { id: 1, toolName: "Figma" },
        { id: 2, toolName: "Canva" },
      ],
    },
     {
      id: "Project3",
      title: "Traverswiss", 
      img: UIUXProject3,
      overview:UIUXProject3Overview,
      tools: [
        { id: 1, toolName: "Figma" },
        { id: 2, toolName: "Canva" },
        { id: 3, toolName: "Affinity Designer" },
      ],
    },
     {
      id: "Project4",
      title: "FlavorBoard", 
      img: UIUXProject4,
      overview:UIUXProject4Overview,
      tools: [
        { id: 1, toolName: "Figma" },
        { id: 2, toolName: "Canva" },
        { id: 3, toolName: "Affinity Designer" },
      ],
    },
     {
      id: "Project5",
      title: "Proactive Cyber Defense", 
      img: UIUXProject5,
      overview:UIUXProject5Overview,
      tools: [
        { id: 1, toolName: "Figma" },
        { id: 2, toolName: "Canva" },
        { id: 3, toolName: "Affinity Designer" },
      ],
    },
     {
      id: "Project6",
      title: "McDonald's Login Page", 
      img: UIUXProject6,
      overview:UIUXProject6Overview,
      tools: [
        { id: 1, toolName: "Figma" },
        { id: 2, toolName: "Affinity Designer" },
        { id: 3, toolName: "Adobe Sketchbook" },
      ],
    },
     {
      id: "Project7",
      title: "Checkout Page", 
      img: UIUXProject7,
      overview:UIUXProject7Overview,
      tools: [
        { id: 1, toolName: "Figma" },
        { id: 2, toolName: "Affinity Designer" },
      ],
    },
     {
      id: "Project8",
      title: "Loan Dashboard", 
      img: UIUXProject8,
      overview:UIUXProject8Overview,
      tools: [
        { id: 1, toolName: "Figma" },
        { id: 2, toolName: "Canva" },
        { id: 3, toolName: "Affinity Designer" },
      ],
    },
     {
      id: "Project9",
      title: "Creatix", 
      img: UIUXProject9,
      overview:UIUXProject9Overview,
      tools: [
        { id: 1, toolName: "Figma" },
        { id: 2, toolName: "Canva" },
        { id: 3, toolName: "Affinity Designer" },
      ],
    },
  ];


  return (
    <div className='c-projects-content__wrapper'>
      <ul className='c-projects-content__wrapper__ul'>
        {UIUXProjects.map((project) => (
          <li 
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)} 
            onMouseLeave={() => setHoveredProject(null)} 
            onClick = {() => {
                setOpenModal(true);
                setSelectedProject(project)
            }}
          >
            <img 
              src={project.img} 
              alt={project.title} 
              className='uiuxprojects' 
            />
            <div className={hoveredProject === project.id ? 'c-projects-content__projects-desc active' : 'c-projects-content__projects-desc'}>
              <p>{project.title}</p>
              <ul>
                {project.tools.map((tool) => (
                  <li key={tool.id}>{tool.toolName}</li> 
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <ProjectModal
        key={selectedProject?.id || "modal"}
        openModal={openModal}
        setOpenModal={setOpenModal}
        content={<UIUXProjectsContent project = {selectedProject}/>}
        />
    </div>
  );
};

export default UIUXProjects;