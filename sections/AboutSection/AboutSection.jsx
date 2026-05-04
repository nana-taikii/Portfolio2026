import {useState} from 'react'
import FolderImg from "../../src/assets/img/img_folder.png"
import IconCloseWhite from "../../src/assets/img/icon_close_white.svg"
import FlowerImg from "../../src/assets/img/img_flower.png";
import Modal from '../../components/Modal/AboutModal/AboutModal';
import Stars from '../../components/Stars/Stars';
import './AboutSection.css'

const AboutSection = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [viewedFolder, setViewedFolder] = useState();

    const handleOpenPopup = () => {
        setOpenPopup(!openPopup);
    }

    const handleViewFolder = (folder) => {
        setOpenModal(true);
        setViewedFolder(folder);
    }
    const folder = [
        {
            id:2024,
            title:'2024'
        },
         {
            id:2025,
            title:'2025'
        },
         {
            id:2026,
            title:'2026'
        }
    ]
    const techStacks = [
        {
            id:1,
            tech:'HTML'
        },
         {
            id:2,
            tech:'CSS'
        },
         {
            id:3,
            tech:'JAVASCRIPT'
        },
         {
            id:4,
            tech:'REACT'
        },
         {
            id:5,
            tech:'REACT JS'
        },
         {
            id:6,
            tech:'TYPESCRIPT'
        },
         {
            id:7,
            tech:'MUI'
        },
         {
            id:8,
            tech:'TAILWIND'
        },
         {
            id:9,
            tech:'SASS'
        },
         {
            id:10,
            tech:'WORDPRESS'
        } 
    ]

    const designTools = [
        {
            id:1,
            designTool:'FIGMA'
        },
         {
            id:2,
            designTool:'AFFINITY DESIGNER'
        },
         {
            id:3,
            designTool:'ADOBE ILLUSTRATOR'
        },
         {
            id:4,
            designTool:'CLIP STUDIO'
        },
         {
            id:5,
            designTool:'ADOBE SKETCHBOOK'
        },
         {
            id:6,
            designTool:'CANVA'
        },
         {
            id:7,
            designTool:'IBIS PAINT'
        }
    ]

      const programmingTools = [
        {
            id:1,
           programmingTool:'VS CODE'
        },
         {
            id:2,
            programmingTool:'GITHUB'
        },
         {
            id:3,
            programmingTool:'POSTMAN'
        }
    ]

  return (
    <>
        <section id = 'about' className = 'c-about-section'>
        <Stars/>
        <div className = 'c-about-section__desc'>
            <h2 className = 'reveal'>About Me</h2>
            <p className = 'reveal'>art became my safe space. I’m happy that my years of growth are crafted with creativity </p>
            <ul>
                {folder.map((folder) => (
                    <li key = {folder.id} className = 'reveal' id = {folder.id} onClick = {() => handleViewFolder(folder.id)}>
                        <img src={FolderImg} alt={folder.title} />
                        <p>{folder.title}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div className =  {openPopup ? 'c-about-section__popup active' : 'c-about-section__popup'} >
            <div className = 'c-about-section__popup__header'  onClick = {() => handleOpenPopup()} >
                <h3>did you know?</h3>
                <img src={openPopup ? IconCloseWhite : FlowerImg} alt="close" onClick = {() => handleOpenPopup()} className = {!openPopup ? 'c-flower' : ''} />
            </div>

            <div className =  'c-about-section__popup__skills'>
                <p>my tech stacks are:</p>
                <ul>
                    {techStacks.map((stacks) => (
                        <li key = {stacks.id} id = {stacks.id}>{stacks.tech}</li>
                    ))}
                </ul>
            </div>

            <div className =  'c-about-section__popup__skills'>
                <p>tools I used for programming:</p>
                <ul>
                    {programmingTools.map((tool) => (
                        <li key = {tool.id} id = {tool.id}>{tool.programmingTool}</li>
                    ))}
                </ul>
            </div>

            <div className =  'c-about-section__popup__skills'>
                <p>tools I used for design:</p>
                <ul>
                    {designTools.map((tool) => (
                        <li key = {tool.id} id = {tool.id}>{tool.designTool}</li>
                    ))}
                </ul>
            </div>

            <p className = 'c-about-section__popup__skills__cat'>and I love cats!</p>
        </div>
        </section>

        <Modal
            openModal = {openModal}
            setOpenModal = {setOpenModal}
            content = {viewedFolder}
        />
    </>
   
  )
}

export default AboutSection
