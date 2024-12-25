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
import Customer1 from "../Images/Convincing/layout1.png"


function HeroSection() {
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
                        <div className="grid-item project-details">
                            <div className="project-title">
                                <h3>About Project</h3>
                            </div>
                            <div className="project-data">
                                <div className="project-description">
                                    <p><b className="website-name">NFT Galaxy</b> is a cutting-edge platform where artists, collectors, and enthusiasts converge to buy, sell, and trade unique digital assets.</p>
                                </div>
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
                                </div>
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
                        <div className="grid-item client-image">
                            <img src={Customer1} alt=""/>
                        </div>
                        <div className="grid-item project-layout">
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