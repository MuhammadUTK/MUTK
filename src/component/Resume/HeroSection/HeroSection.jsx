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



    const [projects, setProjects] = useState(
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
                projectLayout: Layout2,
                clientName: "Samuel Roe",
                websiteName: "Urban Vogue",
                websiteDescription: " is an online fashion destination that curates the latest trends in streetwear, casual, and luxury apparel. It connects emerging designers with fashion-forward consumers, offering limited-edition drops, sustainable collections, and personalized shopping experiences.",
                projectStats: [
                    { label: "Launched:", value: "August 2022" },
                    { label: "Revenue:", value: "$17.5 Million in annual sales" },
                    { label: "Product Range:", value: "5,000+ unique items" },
                    { label: "Technology:", value: "Built with Next.js and Shopify integration" },
                    { label: "Top-Selling Product:", value: "Vintage Denim Jacket – 15,000+ units sold" }
                ],
                userReviewPercentage: 98,
                projectFacts: [
                    { label: "Countries Shipped To", value: "80+" },
                    { label: "Monthly Active Users", value: "250,000" },
                    { label: "Return Rate", value: "6%" }
                ]
            },
            {
                projectLayout: Layout3,
                clientName: "Ethan Cole",
                websiteName: "NexaAI",
                websiteDescription: "is an innovative AI-powered platform that offers tools for data analysis, automation, and intelligent content creation. NexaAI empowers businesses with machine learning models, predictive analytics, and natural language processing to drive efficiency and growth.",
                projectStats: [
                    { label: "Launched:", value: "April 2021" },
                    { label: "Revenue:", value: "$22 Million in annual revenue" },
                    { label: "Product Range:", value: "30+ AI tools and APIs" },
                    { label: "Technology:", value: "Developed with TensorFlow, PyTorch, and React" },
                    { label: "Top-Selling Product:", value: "NexaAI Automate – Used by 500+ enterprises" }
                ],
                userReviewPercentage: 94,
                projectFacts: [
                    { label: "Countries Served", value: "65+" },
                    { label: "Monthly Active Users", value: "300,000" },
                    { label: "APIs in Use", value: "10,000+" }
                ]
            },
            {
                projectLayout: Layout4,
                clientName: "Daniel Fox",
                websiteName: "DreamRide",
                websiteDescription: "is a premier online marketplace that connects buyers with dealerships and private sellers to purchase luxury, exotic, and classic cars. DreamRide offers virtual showrooms, financing options, and detailed car histories to make dream car purchases seamless and secure.",
                projectStats: [
                    { label: "Launched:", value: "June 2020" },
                    { label: "Revenue:", value: "$35 Million in annual sales" },
                    { label: "Product Range:", value: "2,000+ luxury and classic cars" },
                    { label: "Technology:", value: "Built with React, Node.js, and MongoDB" },
                    { label: "Top-Selling Car:", value: "Lamborghini Aventador – 500+ units sold" }
                ],
                userReviewPercentage: 97,
                projectFacts: [
                    { label: "Countries Shipped To", value: "40+" },
                    { label: "Monthly Active Users", value: "180,000" },
                    { label: "Customer Satisfaction Rate", value: "92%" }
                ]
            },
            {
                projectLayout: Layout5,
                clientName: "Lucas May",
                websiteName: "DigitalCanvas",
                websiteDescription: "is a vibrant marketplace for digital art and collectibles, where artists mint and auction NFTs directly to collectors. It offers exclusive drops, collaboration events, and a thriving community that celebrates the intersection of creativity and blockchain technology.",
                projectStats: [
                    { label: "Launched:", value: "April 2021" },
                    { label: "Revenue:", value: "$25 Million in total sales" },
                    { label: "Product Range:", value: "15,000+ unique NFTs" },
                    { label: "Technology:", value: "Powered by Solana and IPFS for decentralized storage" },
                    { label: "Top-Selling NFT:", value: "Ethereal Bloom – Sold for 85 ETH (~$190,000)" }
                ],
                userReviewPercentage: 96,
                projectFacts: [
                    { label: "Countries Shipped To", value: "70+" },
                    { label: "Monthly Active Users", value: "220,000" },
                    { label: "NFT Collection Size", value: "30,000+" }
                ]
            },
            {
                projectLayout: Layout6,
                clientName: "Sophia Lin",
                websiteName: "MahaBank",
                websiteDescription: "is a secure and innovative digital banking platform that provides personal and business banking solutions. Users can manage accounts, apply for loans, and invest in stocks and crypto, all through a seamless, user-friendly interface.",
                projectStats: [
                    { label: "Launched:", value: "June 2020" },
                    { label: "Revenue:", value: "$40 Million in annual transactions" },
                    { label: "Product Range:", value: "50+ financial products" },
                    { label: "Technology:", value: "Built with React, Node.js, and AWS for cloud scalability" },
                    { label: "Top-Selling Product:", value: "Smart Savings Account – 500,000+ users" }
                ],
                userReviewPercentage: 92,
                projectFacts: [
                    { label: "Countries Served", value: "30+" },
                    { label: "Monthly Active Users", value: "900,000" },
                    { label: "Loan Approval Rate", value: "85%" }
                ]
            },
            {
                projectLayout: Layout7,
                clientName: "Oliver Fay",
                websiteName: "DigiMarket Hub",
                websiteDescription: "is a global digital marketplace that enables creators to sell and buy digital products such as eBooks, templates, courses, and design assets. It offers tools for creators to monetize their work and for buyers to access high-quality digital content.",
                projectStats: [
                    { label: "Launched:", value: "April 2021" },
                    { label: "Revenue:", value: "$25 Million in total sales" },
                    { label: "Product Range:", value: "100,000+ digital products" },
                    { label: "Technology:", value: "Built with Vue.js, Laravel, and Stripe" },
                    { label: "Top-Selling Product:", value: "UI Design Kit – 50,000+ downloads" }
                ],
                userReviewPercentage: 96,
                projectFacts: [
                    { label: "Creators Onboarded", value: "20,000+" },
                    { label: "Monthly Active Users", value: "500,000" },
                    { label: "Design Products", value: "30,000+" }
                ]
            },
            {
                projectLayout: Layout8,
                clientName: "Nathan Jay",
                websiteName: "Wellness360",
                websiteDescription: "is a comprehensive health platform offering personalized wellness plans, fitness trackers, mental health resources, and expert advice. It aims to empower individuals to lead healthier lives through tailored content, professional guidance, and community support.",
                projectStats: [
                    { label: "Launched:", value: "January 2020" },
                    { label: "Revenue:", value: "$12 Million in annual revenue" },
                    { label: "Product Range:", value: "300+ wellness plans, 50+ fitness programs" },
                    { label: "Technology:", value: "Built with MERN, integrated with health tracking APIs" },
                    { label: "Top-Selling Product:", value: "Personalized Fitness Plan – 120,000+ users" }
                ],
                userReviewPercentage: 93,
                projectFacts: [
                    { label: "Countries Served", value: "40+" },
                    { label: "Monthly Active Users", value: "750,000" },
                    { label: "Customer Retention Rate", value: "85%" }
                ]
            },
            {
                projectLayout: Layout9,
                clientName: "Rachel Kay",
                websiteName: "NFTXchange",
                websiteDescription: "is a decentralized marketplace for buying, selling, and trading unique digital assets, including NFTs, digital art, and virtual collectibles. It connects artists, collectors, and investors, offering an innovative platform for minting and acquiring exclusive NFTs.",
                projectStats: [
                    { label: "Launched:", value: "June 2021" },
                    { label: "Revenue:", value: "$25 Million in NFT sales" },
                    { label: "Product Range:", value: "50,000+ unique NFTs listed" },
                    { label: "Technology:", value: "Built on Ethereum and Flow blockchain" },
                    { label: "Top-Selling NFT:", value: "CyberPunk #2835 – Sold for 200 ETH (~$500,000)" }
                ],
                userReviewPercentage: 92,
                projectFacts: [
                    { label: "Countries Served", value: "100+" },
                    { label: "Monthly Active Users", value: "750,000" },
                    { label: "NFT Listings", value: "40,000+" }
                ]
            },
            {
                projectLayout: Layout10,
                clientName: "Megan Poe",
                websiteName: "SkyBooker",
                websiteDescription: "is an airline booking platform that offers users the ability to search, compare, and book flights across multiple airlines worldwide. It provides real-time availability, discounted fares, and personalized travel recommendations, ensuring seamless travel planning.",
                projectStats: [
                    { label: "Launched:", value: "January 2020" },
                    { label: "Revenue:", value: "$60 Million in annual bookings" },
                    { label: "Flight Options:", value: "200+ airlines and 1,500+ destinations" },
                    { label: "Technology:", value: "Built with React Native for seamless experience" },
                    { label: "Most Booked Route:", value: "New York to London – 100,000+ bookings" }
                ],
                userReviewPercentage: 89,
                projectFacts: [
                    { label: "Countries Served", value: "150+" },
                    { label: "Monthly Active Users", value: "500,000" },
                    { label: "Average Booking Time", value: "7 min" }
                ]
            }
            ])
    const [animationKey, setAnimationKey] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProjects( (prev) => {
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
                            <p>Crafting Seamless Digital Journeys with <b className="resume-name" >Muhammad Usman Tariq Khan</b></p>
                            <p className="intro-profession-heading">A MERN Stack Developer</p>
                        </div>
                    </div>
                    <div className="resume-intro-buttontype">
                        <div className="resume-button">
                            Hire Me
                        </div>
                        <div className="resume-button">
                            Explore Site
                        </div>
                    </div>
                    <div className="resume-stats">
                        <div className="resume-stats-text">
                            <h2>Empowering Brands with Code and Creativity</h2>
                        </div>
                        <div className="resume-stats-content">
                            <div className="resume-stats-block">
                                <h1>1k+</h1>
                                <p>Projects Completed</p>
                            </div>
                            <div className="resume-stats-divider"></div>
                            <div className="resume-stats-block">
                                <h1>1300</h1>
                                <p>Satisfied Clients</p>
                            </div>
                            <div className="resume-stats-divider"></div>
                            <div className="resume-stats-block">
                                <h1>10+</h1>
                                <p>Web Application</p>
                            </div>
                            <div className="resume-stats-divider"></div>
                            <div className="resume-stats-block">
                                <h1>950</h1>
                                <p>Websites Launched</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resume-hero-graphics">
                    <div className="hero-animation-container">
                        <div className="grid-item client-description">
                            <div className="client-name-title">
                                <h2>Satisfied Customer</h2>
                            </div>
                            <div className="client-details">
                                <div className="client-name-list">
                                    {projects.map((project, index) => (
                                        <div className="client-data" key={`clientName-${index}-${animationKey}`}>
                                            <div className="client-name">
                                                <p>{project.clientName}</p>
                                            </div>
                                            <div className="client-rating">
                                                <p>Rating</p>
                                                <img src={StarRating} alt="Client Rating"/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid-item project-details">
                            <div className="project-title">
                                <h2>About Project</h2>
                            </div>
                            <div className="project-description-list">
                                {projects.map((project, index) => (
                                    <div className="project-description" key={`projectDescription-${index}-${animationKey}`}>
                                        <p><b
                                            className="website-name">{project.websiteName}&nbsp;</b>{project.websiteDescription}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid-item layout-image">
                            <div className="layout-image-slider">
                                {projects.map((project, index) => (
                                    <div className="layout-slide" key={`${index}-${animationKey}`}>
                                        <img src={project.projectLayout} alt=""/>
                                    </div>
                                ))}
                            </div>
                            {projects[0].projectFacts.map((fact, index) => (
                                <div className={`project-facts detail-block${index + 1}`}
                                     key={`project-fact-${index}-${animationKey}`}>
                                    <div className="project-fact-title">
                                        <h4>{fact.label}</h4>
                                    </div>
                                    <div className="fact-percentage">
                                        <h2>{fact.value}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="grid-item project-statistics">
                            <div className="project-statistics-title">
                                <h2>Project Stats</h2>
                            </div>
                            <div className="project-statistics-content">
                                <div className="project-bullet-list">
                                    {projects.map((project,index) => (
                                        <div className="project-bullet-facts" key={`projectStatBlock-${index}-${animationKey}`}>
                                            {project.projectStats.map((projectStat, index) => (
                                                <div className="bullet-facts"
                                                     key={`projectStatItem-${index}-${animationKey}`}>
                                                    <img src={DiamondBullet} alt="Diamond Bullet"/>
                                                    <p className="fact-title">&nbsp;&nbsp;{projectStat.label}&nbsp;</p>
                                                    <p>{projectStat.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                <div className="project-review-block">
                                    <div className="review-block" key={`project-review-${animationKey}`}>
                                        <div className="review-title">
                                            <h2>User Reviews</h2>
                                        </div>
                                        <div className="review-percentage">
                                            <h1>{projects[0].userReviewPercentage}%</h1>
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