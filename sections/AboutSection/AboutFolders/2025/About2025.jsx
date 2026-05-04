import LinkButton from "../../../../components/Button/LinkButton"

const About2025 = () => {
  return (
    <div className = 'c-about-folder-content c-about-desc'>
      <div className = 'c-about-folder-content__desc'>
                <h4 className = 'c-about-folder-content__desc__title'>My First Job as Information Developer</h4>
                <div>
                    <p>
                        After graduation, I started my career as an Information Developer at Asialink Finance Corporation.
                    </p>
                    <p>I created User Manuals, system documentations, system diagrams ,release notes, anything related to system processes documentations.</p>
                    <p>After more than 2  months, I was transferred to a web developer role.</p>
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

export default About2025
