import HeroSection from "./HeroSection/HeroSection.jsx";
import NavbarResume from "./NavbarResume/NavbarResume.jsx";
import MobileViewSection from "./MobileViewSection/MobileViewSection.jsx";
import "./Resume.css"
import ImageHoverSection from "./ImageHoverSection/ImageHoverSection.jsx";
import CardSection from "./InformationSection/InformationSection.jsx";
import PortfolioNotCompleted from "./PortfolioNotCompleted/PortfolioNotCompleted.jsx";


function Resume() {

    return (
        <>
            <div className="mutk-website">
                <NavbarResume/>
                <HeroSection/>
                <CardSection/>
                <PortfolioNotCompleted />
                <MobileViewSection/>
                <ImageHoverSection/>
            </div>
        </>
    )
}

export default Resume
