import "./SubscriptionCard.css"
import Google from "../../../Images/Brand-Logos/Google.png"

function SubscriptionCard( brandLogo, brandName, date, price ) {
    return (
        <div className="subscription-card-container">
            <div className="subscription-content">
                <div className="brand-logo">
                    <img src={Google} alt=""/>
                </div>
                <div className="brand-info">

                </div>
            </div>
        </div>
    )
}

export default SubscriptionCard
