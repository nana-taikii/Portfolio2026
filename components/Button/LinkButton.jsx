import FlowerImg from "../../src/assets/img/img_flower.png"

const LinkButton = ({
  href = "#",
  text = "see my work",
  iconSrc = null,
  iconAlt = "flower",
  iconPosition = "right", 
  className = "",
  target = "_self",
  rel = "",
}) => {


  return (
    <a href={href} target={target} rel={rel} className={`${className} c-btn` }>
      {iconPosition === "left" && iconSrc && (
        <img src={iconSrc} alt={iconAlt} className="c-flower c-flower-left" />
      )}
      <span>{text ? text : 'see my work'}</span>
        <img src={iconSrc ? iconSrc : FlowerImg} alt={iconAlt} className="c-flower c-flower-right" />
    </a>
  );
};

export default LinkButton;