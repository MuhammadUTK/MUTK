import "./HeroSection.css"
import HeroImage from "../Images/Astronaut.png"

function HeroSection() {
    return (
        <div className="resume-hero-container">
            <div className="resume-mainbody">
                <div className="resume-intro">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum error illum in laudantium maxime mollitia numquam praesentium quasi soluta, temporibus. A accusantium alias atque aut consequuntur distinctio doloribus illum, officia quisquam tempora temporibus vero. Accusamus eius hic perferendis perspiciatis rerum, similique? At dolor eligendi placeat saepe. Assumenda, beatae blanditiis cumque exercitationem facilis, labore nemo omnis quam, sit tempora voluptate voluptatem.
                </div>
                <div className="resume-hero-graphics">
                    <div className="resume-image">
                        <img src={HeroImage} alt="astonaut"/>
                    </div>
                    <div className="resume-hero-cloud">
                        <div className="resume-hero-cloud-circle big-1"></div>
                        <div className="resume-hero-cloud-circle big-2"></div>
                        <div className="resume-hero-cloud-circle medium-1"></div>
                        <div className="resume-hero-cloud-circle medium-2"></div>
                        <div className="resume-hero-cloud-circle medium-3"></div>
                        <div className="resume-hero-cloud-circle medium-4"></div>
                        <div className="resume-hero-cloud-circle medium-5"></div>
                        <div className="resume-hero-cloud-circle medium-6"></div>
                        <div className="resume-hero-cloud-circle small-1"></div>
                        <div className="resume-hero-cloud-circle small-2"></div>
                        <div className="resume-hero-cloud-circle small-3"></div>
                        <div className="resume-hero-cloud-circle small-4"></div>
                    </div>
                </div>

            </div>
            <div className="resume-hero-sidebar">SideBar</div>
        </div>
    )
}

export default HeroSection
