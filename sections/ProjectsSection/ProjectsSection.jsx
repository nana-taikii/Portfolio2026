import React, { useState } from 'react'
import FlowerImg from "../../src/assets/img/img_flower_violet.png"
import './ProjectsSection.css'
import UIUXProjects from './UIUXProjects/UIUXProjects'
import WebDevProjects from './WebDevProjects/WebDevProjects'
import GraphicsProjects from './GraphicsProjects/GraphicsProjects'
import CloudImg2 from "../../src/assets/img/img_cloud2.webp"

const ProjectsSection = () => {
    const [currentTab, setCurrentTab] = useState('UI/UX Designs') 

    const tabs = [
        { id: 1, name: 'UI/UX Designs', className: 'c-project-section__btn1' },
        { id: 2, name: 'Web Dev', className: 'c-project-section__btn2' },
        { id: 3, name: 'Graphic Designs', className: 'c-project-section__btn3' },
        // { id: 4, name: 'Arts', className: 'c-project-section__btn4' }
    ]

    const webDevTab = currentTab == 'Web Dev'
    const graphicsTab = currentTab == 'Graphic Designs'

    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleTabChange = (tabName) => {
    setIsTransitioning(true);
    setTimeout(() => {
        setCurrentTab(tabName);
        setTimeout(() => {
        setIsTransitioning(false);
        }, 50);
    }, 150);
    };

    return (
        <section id = 'projects' className= {webDevTab   ? 'c-projects-section darkMode' : graphicsTab ? 'c-projects-section orangeMode' : 'c-projects-section'}>
            <img src={CloudImg2} className = 'c-cloud2 cloud-slow'/>
            <div className='c-projects-section__wrapper'>
                <hgroup className = {webDevTab ? 'c-hgroud-darkMode' : ''}>
                    <h2 className = 'reveal'>My Projects</h2>
                    <p className = 'reveal'>Here are my projects as a designer, artist and developer.</p>
                </hgroup>
                <div className = 'c-projects-section__nav-wrapper'>
                         <nav>
                    {tabs.map((tab) => (
                        <button 
                            key={tab.id}
                            className={`c-project-section__btn ${tab.className} ${currentTab === tab.name ? 'active' : ''}`}
                            onClick={() => handleTabChange(tab.name)}

                        >
                            <span>{tab.name}</span>
                            {currentTab === tab.name && (
                                <img src={FlowerImg} className='c-flower' alt="" />
                            )}
                        </button>
                    ))}
                </nav>
                </div>
           

                 <div className={`c-projects-section__content ${isTransitioning ? 'fade-out' : ''}`}>
                    {currentTab === 'UI/UX Designs' && (
                        <UIUXProjects/>
                    )}
                    {currentTab === 'Web Dev' && (
                       <WebDevProjects/>
                    )}
                    {currentTab === 'Graphic Designs' && (
                        <GraphicsProjects/>
                    )}
                    {/* {currentTab === 'Arts' && (
                        <div>Arts content goes here</div>
                    )} */}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection