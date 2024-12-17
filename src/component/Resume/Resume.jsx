import HeroSection from "./HeroSection/HeroSection.jsx";
import NavbarResume from "./NavbarResume/NavbarResume.jsx";
import MobileViewSection from "./MobileViewSection/MobileViewSection.jsx";
import "./Resume.css"
import ImageHoverSection from "./ImageHoverSection/ImageHoverSection.jsx";
import CardSection from "./InformationSection/InformationSection.jsx";


function Resume() {

    return (
        <>
            <div className="mutk-website">v
                <div className="mutk-hero-section">
                    <NavbarResume/>
                    <HeroSection/>
                </div>
                <div className="mutk-card-section">
                    <CardSection/>
                </div>
                <div className="mutk-mobile-section">
                    <MobileViewSection/>
                </div>
                <div className="mutk-image-section">
                    <ImageHoverSection/>
                </div>
            </div>
        </>
    )
}

export default Resume
