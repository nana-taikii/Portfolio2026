import React from 'react'
import ImgMe from "../../.././../src/assets/img/img_me.png"
import '../AboutFolders.css'

const About2024 = () => {
  return (
    <div className = 'c-about-folder-content'>
        <div className  = 'c-about-folder-content__wrapper'>
              <div className = 'c-about-folder-content__desc'>
                <h4 className = 'c-about-folder-content__desc__title'>this year I graduated!</h4>
                <div>
                    <p>I am a major in Bachelor of Science in Computer Engineering from Bicol University. I do love  programming too that’s why I chose this course. </p>
                    <p>This is where I started to learn how microcontrollers works.</p>
                    <p>yeah, I failed calculus huhu.</p>
                </div>
            </div>
      <img src={ImgMe} alt="Donna Hope" />
        </div>
    
    </div>
  )
}

export default About2024
