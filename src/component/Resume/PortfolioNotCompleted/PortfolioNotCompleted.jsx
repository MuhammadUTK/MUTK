import './PortfolioNotCompleted.css'
import UnderConstruction from "../Images/Under-Construction/website-under-construction.png"

function PortfolioNotCompleted() {
    return (
        <div className="portfolio-under-construction-container">
            <div className="under-construction-content">
                <div className="under-construction-image">
                    <img src={UnderConstruction} alt="Under Construction"/>
                </div>
                <div className="under-construction-text">
                    <p>The remaining sections of this website are now under active development</p>
                </div>
                <div className="button">
                    Back to Top
                </div>
            </div>
        </div>
    )
}

export default PortfolioNotCompleted
