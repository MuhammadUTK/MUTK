import "./MobileViewSection.css"
import FirstMobile from "./FirstMobile/FirstMobile.jsx";
import SecondMobile from "./SecondMobile/SecondMobile.jsx";

function MobileViewSection() {
    return (
        <div className="card-section">
            <div className="card-section-container">
                <FirstMobile />
                <SecondMobile />
            </div>
            <div className="card-section-blur-window">
            </div>
            <div className="background-circles">
                <div className="circle huge">
                </div>
                <div className="circle big">
                </div>
                <div className="circle medium">
                </div>
                <div className="circle small">
                </div>
            </div>
        </div>
    )
}

export default MobileViewSection