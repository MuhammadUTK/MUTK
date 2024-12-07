import "./SubscriptionCard.css"

function SubscriptionCard({brandLogo, brandName, date, price} ) {
    return (
        <div className="subscription-card-container">
            <div className="subscription-content">
                <div className="brand-logo-container">
                    <div className="brand-logo">
                        <img src={brandLogo} alt=""/>
                    </div>
                </div>
                <div className="subscription-info">
                    <div className="brand-name">
                        {brandName}
                    </div>
                    <div className="subscription-date">
                        {date}
                    </div>
                </div>
                <div className="subscription-cost">
                    <p>-${price}</p>
                </div>
                <div className="subscription-more-options">
                    <div className="more-option-container">
                        <div className="more-option-circles">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionCard
