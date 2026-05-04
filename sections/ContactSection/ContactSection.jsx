import React from 'react'
import CloudBorder from "../../src/assets/img/img_cloud_border.svg"
import CatBorgir from "../../src/assets/img/img_catBorgir.svg"
import EnvelopeIcon from "../../src/assets/img/icon_envelope.svg"
import PhoneIcon from "../../src/assets/img/icon_phone.svg"
import InstagramIcon from "../../src/assets/img/icon_instagram.svg"
import LinkedinIcon from "../../src/assets/img/icon_linkedin.svg"
import FacebookIcon from "../../src/assets/img/icon_facebook.svg"

import './ContactSection.css'

const ContactSection = () => {
  return (
    <section id = 'contact' className = 'c-contact-section'>
      <img src={CloudBorder} className = 'c-cloud-border' />
      <div className = 'c-contact-section__desc'>
        <img src={CatBorgir} alt="CatBorgir" className = 'c-cat-borgir waffle-float' />
        <div className = 'c-contact-section__info'>
            <p className = 'c-contact-section__text'>
               do you need a UI/UX Designer or a front-end web developer? contact me! 
            </p>
            <div className = 'c-contact-section__details'>
                <div>
                    <img src={EnvelopeIcon} />
                    <div>
                        <p>Email</p>
                        <a href="mailto:donnahopebersabebanzuela@gmail.com" className  = 'c-contact__email'>donnahopebersabebanzuela@gmail.com</a>
                    </div>
                </div>
                <div>
                    <img src={PhoneIcon} />
                    <div>
                        <p>Phone</p>
                        <a href="tel:09212241135">09212241135</a>
                    </div>
                </div>
            </div>
        </div>

        <nav className = 'c-contact-setion__social-media'>
            <a href="https://www.linkedin.com/in/donna-hope-banzuela-34a470323/" target = "_blank">
                <img src={LinkedinIcon} alt="Linkedin" />
            </a>
             <a href="https://www.instagram.com/nanataiki/" target = "_blank">
                <img src={InstagramIcon} alt="Instagram" />
            </a>
             <a href="https://www.facebook.com/donna.hope.117077" target = "_blank">
                <img src={FacebookIcon} alt="Facebook" />
            </a>
        </nav>
      </div>
    </section>
  )
}

export default ContactSection
