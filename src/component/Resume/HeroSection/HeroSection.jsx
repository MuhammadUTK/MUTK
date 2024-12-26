import "./HeroSection.css"
import HeroImage from "../Images/Astronaut.png"
import Analytics from "../Images/Orbit/analytics.png"
import Cloud from "../Images/Orbit/cloud.png"
import Currency from "../Images/Orbit/currency.png"
import Layout from "../Images/Orbit/layout.png"
import Social from "../Images/Orbit/social.png"
import Smartphone from "../Images/Orbit/smartphone.png"
import StarRating from "../Images/Hero-Animation/star-rating.png"
import DiamondBullet from "../Images/Hero-Animation/diamond-bullet.png"
import Layout1 from "../Images/Convincing/layout1.png"
import Layout2 from "../Images/Convincing/layout2.png"
import Layout3 from "../Images/Convincing/layout4.png"
import Layout4 from "../Images/Convincing/layout3.png"
import Layout5 from "../Images/Convincing/layout5.png"
import Layout6 from "../Images/Convincing/layout9.png"
import Layout7 from "../Images/Convincing/layout7.png"
import Layout8 from "../Images/Convincing/layout8.png"
import Layout9 from "../Images/Convincing/layout6.png"
import Layout10 from "../Images/Convincing/layout10.png"
import {useEffect, useState} from "react";


function HeroSection() {



    const [layouts, setLayouts] = useState(
        [ {
            projectLayout: Layout1,
            clientName: "Jonathan Ray",
            websiteName: "NFT Galaxy",
            websiteDescription: "A cutting-edge platform where artists, collectors, and enthusiasts converge to buy, sell, and trade unique digital assets. This site offers curated NFT drops, exclusive digital art, and thriving community that values creativity and blockchain technology.",
            projectStats: [
                { label: "Launched", value: "March 2023" },
                { label: "Transactions", value: "Over $10 Million in Sales" },
                { label: "Creators", value: "1,200+ verified artists and creators" },
                { label: "Technology", value: "Built on Ethereum and Polygon blockchains" },
                { label: "Top-Selling NFT", value: "Galactic Dreams – Sold for 120 ETH (~$250,000)" }
            ],
            userReviewPercentage: 95,
            projectFacts: [
                { label: "Global Country Reach", value: "50+" },
                { label: "Monthly Active Users", value: "150,000" },
                { label: "NFT Collection", value: "25,000+" }
            ]
            },
            {
                projectLayout: ,
                clientName: "",
                websiteName: "",
                websiteDescription: "",
                projectStats: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ],
                userReviewPercentage: ,
                projectFacts: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ]
            },
            {
                projectLayout: ,
                clientName: "",
                websiteName: "",
                websiteDescription: "",
                projectStats: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ],
                userReviewPercentage: ,
                projectFacts: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ]
            },
            {
                projectLayout: ,
                clientName: "",
                websiteName: "",
                websiteDescription: "",
                projectStats: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ],
                userReviewPercentage: ,
                projectFacts: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ]
            },
            {
                projectLayout: ,
                clientName: "",
                websiteName: "",
                websiteDescription: "",
                projectStats: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ],
                userReviewPercentage: ,
                projectFacts: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ]
            },
            {
                projectLayout: ,
                clientName: "",
                websiteName: "",
                websiteDescription: "",
                projectStats: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ],
                userReviewPercentage: ,
                projectFacts: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ]
            },
            {
                projectLayout: ,
                clientName: "",
                websiteName: "",
                websiteDescription: "",
                projectStats: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ],
                userReviewPercentage: ,
                projectFacts: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ]
            },
            {
                projectLayout: ,
                clientName: "",
                websiteName: "",
                websiteDescription: "",
                projectStats: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ],
                userReviewPercentage: ,
                projectFacts: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ]
            },
            {
                projectLayout: ,
                clientName: "",
                websiteName: "",
                websiteDescription: "",
                projectStats: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ],
                userReviewPercentage: ,
                projectFacts: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ]
            },
            {
                projectLayout: ,
                clientName: "",
                websiteName: "",
                websiteDescription: "",
                projectStats: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ],
                userReviewPercentage: ,
                projectFacts: [
                    { label: "", value: "" },
                    { label: "", value: "" },
                    { label: "", value: "" }
                ]
            }



            Layout2, Layout3, Layout4, Layout5, Layout6, Layout7, Layout8, Layout9, Layout10])
    const [clientNames, setClientNames] = useState( [
        "Jonathan Ray",
        "Samuel Roe",
        "Rachel Kay",
        "Ethan Cole",
        "Daniel Fox",
        "Lucas May",
        "Sophia Lin",
        "Oliver Fay",
        "Nathan Jay",
        "Megan Poe"
    ])
    const [animationKey, setAnimationKey] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setLayouts( (prev) => {
                const layoutCopy = [...prev]
                const firstLayout = layoutCopy.shift();
                layoutCopy.push(firstLayout)
                return layoutCopy;
            })
            setAnimationKey((animationKey) => animationKey + 1)
        },4000)
        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <div className="resume-hero-container">
            <div className="resume-mainbody">
                <div className="resume-intro">
                    <div className="resume-intro-background">
                    </div>
                    <div className="resume-intro-text">
                        <p>Hello there, Welcome to my Portfolio!</p>
                        <div className="resume-intro-heading">
                            <p>Crafting Seamless Digital Journeys with <b className="resume-name" >Usman Tariq</b></p>
                            <p className="intro-profession-heading">A Front End Web Developer</p>
                        </div>
                    </div>
                    <div className="resume-intro-buttontype">
                        <div className="resume-button hire">
                            Hire Me
                        </div>
                        <div className="resume-button explore">
                            Explore Site
                        </div>
                    </div>
                    <div className="resume-stats">
                        <div className="resume-stats-text">
                            <h2>Empowering Brands with Code and Creativity</h2>
                        </div>
                        <div className="resume-stats-content">
                            <div className="resume-stats-block">
                                <h1>3k+</h1>
                                <p>Lorem ipsum</p>
                            </div>
                            <div className="resume-stats-divider"></div>
                            <div className="resume-stats-block">
                                <h1>7k+</h1>
                                <p>Lorem ipsum</p>
                            </div>
                            <div className="resume-stats-divider"></div>
                            <div className="resume-stats-block">
                                <h1>10+</h1>
                                <p>Lorem ipsum</p>
                            </div>
                            <div className="resume-stats-divider"></div>
                            <div className="resume-stats-block">
                                <h1>950</h1>
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resume-hero-graphics">
                    <div className="hero-animation-container">
                        <div className="project-facts detail-block1">
                            <div className="project-fact-title">
                                <h4>Global Country Reach</h4>
                            </div>
                            <div className="fact-percentage">
                                <h2>50+</h2>
                            </div>
                        </div>
                        <div className="project-facts detail-block2">
                            <div className="project-fact-title">
                                <h4>Monthly Active Users</h4>
                            </div>
                            <div className="fact-percentage">
                                <h2>150,000</h2>
                            </div>
                        </div>
                        <div className="project-facts detail-block3">
                            <div className="project-fact-title">
                                <h4>NFT Collections</h4>
                            </div>
                            <div className="fact-percentage">
                                <h2>25,000+</h2>
                            </div>
                        </div>
                        <div className="grid-item client-description">
                            <div className="client-name-title">
                                <h3>Satisfied Customer</h3>
                            </div>
                            <div className="client-details">
                                <div className="client-name">
                                    <p>Mathew Doe</p>
                                </div>
                                <div className="client-rating">
                                    <p>Rating</p>
                                    <img src={StarRating} alt="Client Rating"/>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item project-details">
                            <div className="project-title">
                                <h3>About Project</h3>
                            </div>
                            <div className="project-data">
                                <div className="project-description">
                                    <p><b className="website-name">NFT Galaxy</b> is a cutting-edge platform where
                                        artists, collectors, and enthusiasts converge to buy, sell, and trade unique
                                        digital assets. This site offers curated NFT drops, exclusive digital art, and a
                                        thriving community that values creativity and blockchain technology.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item layout-image">
                            <div className="layout-image-slider">
                                {layouts.map((layout, index) => (
                                    <div className="layout-slide" key={`${index}-${animationKey}`}>
                                        <img src={layout} alt=""/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid-item project-statistics">
                            <div className="project-statistics-title">
                                <h3>Project Stats</h3>
                            </div>
                            <div className="project-statistics-content">
                                <div className="project-bullet-facts">
                                    <div className="bullet-facts">
                                        <img src={DiamondBullet} alt=""/>
                                        <p className="fact-title">&nbsp;&nbsp;Launched&nbsp;</p>
                                        <p>March 2023</p>
                                    </div>
                                    <div className="bullet-facts">
                                        <img src={DiamondBullet} alt=""/>
                                        <p className="fact-title">&nbsp;&nbsp;Transactions&nbsp;</p>
                                        <p>Over $10 Million in Sales</p>
                                    </div>
                                    <div className="bullet-facts">
                                        <img src={DiamondBullet} alt=""/>
                                        <p className="fact-title">&nbsp;&nbsp;Creators:&nbsp;</p>
                                        <p>1,200+ verified artists and creators</p>
                                    </div>
                                    <div className="bullet-facts">
                                        <img src={DiamondBullet} alt=""/>
                                        <p className="fact-title">&nbsp;&nbsp;Technology:&nbsp;</p>
                                        <p>Built on Ethereum and Polygon blockchains</p>
                                    </div>
                                    <div className="bullet-facts">
                                        <img src={DiamondBullet} alt=""/>
                                        <p className="fact-title">&nbsp;&nbsp;Top-Selling NFT:&nbsp;</p>
                                        <p>"Galactic Dreams" – Sold for 120 ETH (~$250,000)</p>
                                    </div>
                                </div>
                                <div className="project-review-block">
                                    <div className="review-block">
                                        <div className="review-title">
                                            <h3>User Reviews</h3>
                                        </div>
                                        <div className="review-percentage">
                                            <h1>95%</h1>
                                        </div>
                                        <div className="review-description">
                                            <p>positive feedback from users</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*<div className="orbit-container">*/}
                    {/*    <div className="resume-image">*/}
                    {/*        <img src={HeroImage} alt="astonaut"/>*/}
                    {/*    </div>*/}
                    {/*    <div className="orbit orbit-1">*/}
                    {/*        <img src={Analytics} alt="" className="orbit-img"/>*/}
                    {/*        <img src={Smartphone} alt="" className="orbit-img"/>*/}
                    {/*        <img src={Cloud} alt="" className="orbit-img"/>*/}
                    {/*    </div>*/}
                    {/*    <div className="orbit orbit-2">*/}
                    {/*        <img src={Social} alt="" className="orbit-img"/>*/}
                    {/*        <img src={Currency} alt="" className="orbit-img"/>*/}
                    {/*        <img src={Layout} alt="" className="orbit-img"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="resume-hero-cloud">*/}
                    {/*    <div className="resume-hero-cloud-circle big-1"></div>*/}
                    {/*    <div className="resume-hero-cloud-circle big-2"></div>*/}
                    {/*    <div className="resume-hero-cloud-circle medium-1"></div>*/}
                    {/*    <div className="resume-hero-cloud-circle medium-2"></div>*/}
                    {/*    <div className="resume-hero-cloud-circle medium-3"></div>*/}
                    {/*    <div className="resume-hero-cloud-circle medium-4"></div>*/}
                    {/*    <div className="resume-hero-cloud-circle medium-5"></div>*/}
                    {/*    <div className="resume-hero-cloud-circle medium-6"></div>*/}
                    {/*    <div className="resume-hero-cloud-circle small-1"></div>*/}
                    {/*    <div className="resume-hero-cloud-circle small-2"></div>*/}
                    {/*    <div className="resume-hero-cloud-circle small-3"></div>*/}
                    {/*    <div className="resume-hero-cloud-circle small-4"></div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default HeroSection


// Crafting Seamless Digital Journeys

// I'm a web developer dedicated to creating seamless, responsive, and user-friendly websites. With expertise in modern technologies and an eye for design, I build scalable solutions that bring ideas to life. Let's create something exceptional together.