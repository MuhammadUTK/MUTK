import HeroSection from "./HeroSection/HeroSection.jsx";
import NavbarResume from "./NavbarResume/NavbarResume.jsx";
import MobileViewSection from "./MobileViewSection/MobileViewSection.jsx";
import "./Resume.css"


function Resume() {

    return (
        <>
            <div className="mutk-website">
                <div className="mutk-hero-section">
                    <NavbarResume/>
                    <HeroSection/>
                </div>
                <div className="mutk-mobile-section">
                    <MobileViewSection/>
                </div>
            </div>
        </>
    )
}

export default Resume
