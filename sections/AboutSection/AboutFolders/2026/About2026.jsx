import LinkButton from "../../../../components/Button/LinkButton"

const About2026 = () => {
  return (
     <div className = 'c-about-folder-content c-about-desc'>
      <div className = 'c-about-folder-content__desc'>
                <h4 className = 'c-about-folder-content__desc__title'>UI/UX Developer, Wordpress Developer and Graphic Designer</h4>
                <div>
                    <p>
                       Im a ui ux developer and designer in this year. But I also had accepted projects as a wordpress developer from a japanese client and a graphic designer for a california based company since <span class = 'c-about-desc__highlight'>2025</span>.                    </p>
                    <p>and I want to thank my partner for helping me out to achieve everything I have this year. </p>
                </div>

                <LinkButton
                    href="#projects" 
                    color="dark" 
                    iconPosition="left"
                    className = 'c-pink'
                />
            </div>
    </div>
  )
}

export default About2026
