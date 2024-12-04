import "./HeroSection.css"
import HeroImage from "../Images/Astronaut.png"
import Analytics from "../Images/Orbit/analytics.png"
import Cloud from "../Images/Orbit/cloud.png"
import Currency from "../Images/Orbit/currency.png"
import Layout from "../Images/Orbit/layout.png"
import Social from "../Images/Orbit/social.png"
import Smartphone from "../Images/Orbit/smartphone.png"
import Setting from "../Images/Orbit-External/Setting.png"
import Drawing from "../Images/Orbit-External/Drawing.png"
import Database from "../Images/Orbit-External/Database.png"
import Robot from "../Images/Orbit-External/telecommuting.png"
import Communicate from "../Images/Orbit-External/bluetooth.png"


function HeroSection() {
    return (
        <div className="resume-hero-container">
            <div className="resume-mainbody">
                <div className="resume-intro">
                    <div className="resume-intro-heading">
                        <h1>Crafting Seamless Digital Journeys</h1>
                    </div>
                    <div className="resume-intro-text">
                        <p>I'm a web developer dedicated to creating seamless, responsive, and user-friendly websites. With expertise in modern technologies and an eye for design, I build scalable solutions that bring ideas to life. Let's create something exceptional together.</p>
                    </div>
                    <div className="hero-input-container">
                        <form className="hero-form">
                            <input type="email" placeholder="Enter your email to begin your journey"
                                   required/>
                            <button type="submit">Get Started</button>
                        </form>
                    </div>
                </div>
                <div className="resume-hero-graphics">
                    <div className="orbit-container">
                        <div className="resume-image">
                            <img src={HeroImage} alt="astonaut"/>
                        </div>
                        <div className="orbit orbit-1">
                            <img src={Analytics} alt="" className="orbit-img"/>
                            <img src={Smartphone} alt="" className="orbit-img"/>
                            <img src={Cloud} alt="" className="orbit-img"/>
                        </div>
                        <div className="orbit orbit-2">
                            <img src={Social} alt="" className="orbit-img"/>
                            <img src={Currency} alt="" className="orbit-img"/>
                            <img src={Layout} alt="" className="orbit-img"/>
                        </div>
                        <div className="orbit-external">
                            <div className="orbit-external-container">
                                <img src={Setting} alt="" className="orbit-external-img"/>
                                <p className="orbit-external-text">Web Solutions</p>
                            </div>
                            <div className="orbit-external-container">
                                <img src={Database} alt="" className="orbit-external-img"/>
                                <p className="orbit-external-text">Responsiveness</p>
                            </div>
                            <div className="orbit-external-container">
                                <img src={Drawing} alt="" className="orbit-external-img"/>
                                <p className="orbit-external-text">Design, Develop</p>
                            </div>
                            <div className="orbit-external-container">
                                <img src={Robot} alt="" className="orbit-external-img"/>
                                <p className="orbit-external-text">Code Crafted</p>
                            </div>
                            <div className="orbit-external-container">
                                <img src={Communicate} alt="" className="orbit-external-img"/>
                                <p className="orbit-external-text">Web Connectivity</p>
                            </div>
                        </div>
                    </div>
                    <div className="resume-hero-cloud">
                        <div className="resume-hero-cloud-circle big-1"></div>
                        <div className="resume-hero-cloud-circle big-2"></div>
                        <div className="resume-hero-cloud-circle medium-1"></div>
                        <div className="resume-hero-cloud-circle medium-2"></div>
                        <div className="resume-hero-cloud-circle medium-3"></div>
                        <div className="resume-hero-cloud-circle medium-4"></div>
                        <div className="resume-hero-cloud-circle medium-5"></div>
                        <div className="resume-hero-cloud-circle medium-6"></div>
                        <div className="resume-hero-cloud-circle small-1"></div>
                        <div className="resume-hero-cloud-circle small-2"></div>
                        <div className="resume-hero-cloud-circle small-3"></div>
                        <div className="resume-hero-cloud-circle small-4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
