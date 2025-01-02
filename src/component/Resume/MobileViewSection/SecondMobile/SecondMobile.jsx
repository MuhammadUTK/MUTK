import "./SecondMobile.css";
import Person from "../../Images/Task-Persons/Person2.png"
import SimChip from "../../Images/simchip.png"
import Wifi from "../../Images/wifi.png"

import Google from "../../Images/Brand-Logos/Google.png"
import Amazon from "../../Images/Brand-Logos/Amazon.png"
import Figma from "../../Images/Brand-Logos/Figma.png"
import Instagram from "../../Images/Brand-Logos/Instagram.png"
import Netflix from "../../Images/Brand-Logos/Netflix.png"

import SubscriptionCard from "./SubscriptionCard/SubscriptionCard.jsx";
import {useState, useEffect} from "react";

const SecondMobile = () => {

    const secondMobileData = {
        card1: {
            brandName: "Google",
            brandLogo: Google,
            date: "4 Sep",
            price: "1290"
        },
        card2: {
            brandName: "Amazon",
            brandLogo: Amazon,
            date: "10 Jan",
            price: "1990"
        },
        card3: {
            brandName: "Netflix",
            brandLogo: Netflix,
            date: "5 Mar",
            price: "100"
        },
        card4: {
            brandName: "Instagram",
            brandLogo: Instagram,
            date: "10 May",
            price: "190"
        },
        card5: {
            brandName: "Figma",
            brandLogo: Figma,
            date: "15 Jul",
            price: "1500"
        }
    }

    const [subscriptionData, setSubscriptionData] = useState(secondMobileData);
    const [stylesAreReady, setStylesAreReady] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setSubscriptionData((prev) => {
                const entries = Object.entries(prev);
                const [first, ...rest] = entries;
                return Object.fromEntries([...rest, first]);
            })
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setStylesAreReady(true);
        }, 50)

        return () => {
            clearInterval(interval)
        }
    }, []);

    const options = { day: "2-digit", month: "short", year: "numeric" };
    const currentDate = new Date().toLocaleDateString("en-UK", options);

    return (
        <div className="second-mobile-container">
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
                            {Object.entries(subscriptionData).map(([key, card], index) => (
                                <div key={key} className={` subscription-card ${index === 0 && stylesAreReady ? "swipe-left" : ""}`}>
                                    <SubscriptionCard brandLogo={card.brandLogo} brandName={card.brandName} date={card.date} price={card.price} />
                                </div>
                            ))}
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