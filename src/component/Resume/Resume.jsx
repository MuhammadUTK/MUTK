import HeroSection from "./HeroSection/HeroSection.jsx";
import NavbarResume from "./NavbarResume/NavbarResume.jsx";
import MobileViewSection from "./MobileViewSection/MobileViewSection.jsx";
import "./Resume.css"
import CardDisplaySection from "./CardDisplaySection/CardDisplaySection.jsx";


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
                <div className="mutk-card-section">
                    <CardDisplaySection/>
                </div>
            </div>
        </>
    )
}

export default Resume
