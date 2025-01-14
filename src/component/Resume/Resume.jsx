import HeroSection from "./HeroSection/HeroSection.jsx";
import NavbarResume from "./NavbarResume/NavbarResume.jsx";
import MobileViewSection from "./MobileViewSection/MobileViewSection.jsx";
import "./Resume.css"
import ImageHoverSection from "./ImageHoverSection/ImageHoverSection.jsx";
import CardSection from "./InformationSection/InformationSection.jsx";
import PortfolioNotCompleted from "./PortfolioNotCompleted/PortfolioNotCompleted.jsx";
import Acknowledgment from "./Acknowledgment/Acknowledgment.jsx";
import {useState, useEffect} from "react";


function Resume() {

    const [AcknowledgmentCheck, setAcknowledgment] = useState(false);

    const acknowledgmentOpen = () => {
        setAcknowledgment(true);
    }

    const acknowledgmentClose = () => {
        setAcknowledgment(false);
    }

    useEffect(() => {
        acknowledgmentOpen();
    }, []);

    return (
        <>
            <div className="mutk-website">
                <NavbarResume/>
                <HeroSection/>
                {
                    !AcknowledgmentCheck && (
                        <>
                            <CardSection/>
                            <MobileViewSection />
                            <PortfolioNotCompleted />
                        </>
                    )
                }
                {
                    AcknowledgmentCheck && (
                        <Acknowledgment closeBtn={acknowledgmentClose}/>
                    )
                }
            </div>
        </>
    )
}

export default Resume
