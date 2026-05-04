import React from "react";
import ServicesBg from "../../src/assets/img/bg_services.webp";
import ServicesBgSp from "../../src/assets/img/bg_services_sp.webp";
import RocketIcon from "../../src/assets/img/icon_rocket.svg";
import UiIcon from "../../src/assets/img/icon_ui.svg";
import FrontIcon from "../../src/assets/img/icon_front.svg";
import ArtIcon from "../../src/assets/img/icon_art.svg";
import "./ServicesSection.css";
import LinkButton from "../../components/Button/LinkButton";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      service: "UI/UX Design",
      icon: UiIcon,
      description:
        "Building mobile and web interfaces that blend intuitive design with exceptional user experience.",
    },
    {
        id:2,
        service:'Front End Web Development',
        icon:FrontIcon,
        description:'Building scalable and interactive web applications with pixel-perfect frontend development.'
    },
    {
        id:3,
        service:'Art Commissions',
        icon:ArtIcon,
        description:'Offering art commissions in digital illustration, watercolor, custom stickers, and creative designs for personal or commercial use.'
    }
  ];

  return (
    <section id = 'services' className="c-services-section">
        <picture>
            <source srcSet = {ServicesBgSp} media = '(max-width:767px)'/>
            <img src={ServicesBg} className="c-services-section__img" />
        </picture>
      <div className="c-srvices-section__desc">
        <hgroup>
          <h2 className = 'reveal'>
            Services <img src={RocketIcon} />
          </h2>
          <p className = 'reveal'>
            Send me a message to say hello or if you want to avail one of my
            services
          </p>
        </hgroup>
        <ul className = 'reveal'>
          {services.map((service) => (
            <li key={service.id} >
              {/* <div>
                <img src={service.icon} alt={service.service} />
                <p
                  className = 'c-services-section__label'
                  style={{
                    color:
                      service.id === 1
                        ? "var(--text-darkOrange)"
                        : service.id == 2 ?
                        "var(--text-pink2)":
                        "var(--text-blue)",
                  }}
                >
                  {service.service}
                </p>
              </div> */}
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
        <LinkButton
            href="#contact" 
            color="dark" 
            iconPosition="left"
            className = 'c-violet'
            text="Let's talk"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
