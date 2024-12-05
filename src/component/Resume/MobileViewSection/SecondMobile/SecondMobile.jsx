import "./SecondMobile.css";
import Person from "../../Images/Task-Persons/Person2.png"
import SimChip from "../../Images/simchip.png"
import Wifi from "../../Images/wifi.png"
import SubscriptionCard from "./SubscriptionCard/SubscriptionCard.jsx";

const SecondMobile = () => {

    const options = { day: "2-digit", month: "short", year: "numeric" };
    const currentDate = new Date().toLocaleDateString("en-UK", options);


    return (
        <div className="mobile-container">
            <div className="second-mobile-body">
                <div className="second-mobile-header">
                    <div className="second-mobile-date-container">
                        <p className="second-mobile-date">
                            {currentDate}
                        </p>
                    </div>
                    <div className="second-mobile-account-info">
                        <div className="account-holder-info">
                            Hello <p className="account-holder-name">, Usman</p>
                        </div>
                        <div className="account-holder-profile">
                            <img src={Person} alt="Person"/>
                        </div>
                    </div>
                </div>
                <div className="second-account-title">
                    <p>This Month</p>
                </div>
                <div className="debit-card-container">
                    <div className="debit-card">
                        <div className="upper-design">
                            <div className="extreme-circle">
                            </div>
                            <div className="middle-circle">
                            </div>
                            <div className="inner-circle">
                            </div>
                        </div>
                        <div className="lower-design">
                        </div>
                        <div className="debit-card-info">
                            <div className="card-type">
                                <p>DEBIT</p>
                                <div className="card-logo">
                                    <div className="card-logo-circle1">
                                    </div>
                                    <div className="card-logo-circle2">
                                    </div>
                                </div>
                            </div>
                            <div className="card-data">
                                <div className="card-infographics">
                                    <img src={Wifi} alt="Wifi"/>
                                    <img src={SimChip} alt="SimChip"/>
                                </div>
                                <div className="account-balance">
                                    <p>$142,570.90</p>
                                </div>
                            </div>
                            <div className="card-details">
                                <div className="card-holder-name">
                                    <p>Usman Tariq</p>
                                </div>
                                <div className="card-expire-date">
                                    <p>12 / 25</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subscription-container">
                    <div className="subscription-title">
                        <p>Upcoming Subscriptions</p>
                    </div>
                    <div className="subscription-list-container">
                        <div className="subscription-scroll">
                            <SubscriptionCard />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-frame__button--power">
            </div>
            <div className="mobile-frame__button--sound">
            </div>
        </div>
    );
};

export default SecondMobile;