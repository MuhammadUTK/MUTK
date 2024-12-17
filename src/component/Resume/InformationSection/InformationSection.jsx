import "./InformationSection.css"
import Setting from "../Images/Orbit-External/Setting.png"
import Drawing from "../Images/Orbit-External/Drawing.png"
import Database from "../Images/Orbit-External/Database.png"
import Robot from "../Images/Orbit-External/telecommuting.png"
import Communicate from "../Images/Orbit-External/bluetooth.png"
import AppleScreen from "../Images/Convincing/Apple-Screen.png"


import React from 'react'

function InformationSection() {
    return (
        <div className="service-display-section">
            <div className="service-display-heading">
                <h1>Services Tailored for You</h1>
            </div>
            <div className="service-slideshow">
                <div className="service-slide">
                    <div className="slide-top-image">
                        <img src={Setting} alt=""/>
                    </div>
                    <div className="slide-content">
                        <h3>Web Solutions</h3>
                        <p>Delivering custom web development services designed to meet your unique business requirements.</p>
                    </div>
                </div>
                <div className="service-slide">
                    <div className="slide-top-image">
                        <img src={Drawing} alt=""/>
                    </div>
                    <div className="slide-content">
                        <h3>Design & Develop</h3>
                        <p>Offering end-to-end website creation, combining modern, eye-catching designs with clean, functional development. </p>
                    </div>
                </div>
                <div className="service-slide">
                    <div className="slide-top-image">
                        <img src={Database} alt=""/>
                    </div>
                    <div className="slide-content">
                        <h3>Responsiveness</h3>
                        <p>Creating mobile-first, fully responsive websites that adapt seamlessly to all screen sizes and devices.</p>
                    </div>
                </div>
                <div className="service-slide">
                    <div className="slide-top-image">
                        <img src={Robot} alt=""/>
                    </div>
                    <div className="slide-content">
                        <h3>Maintenance & Support</h3>
                        <p>Providing regular updates, bug fixes, and technical support to keep your website secure and up-to-date.</p>
                    </div>
                </div>
                <div className="service-slide">
                    <div className="slide-top-image">
                        <img src={Communicate} alt=""/>
                    </div>
                    <div className="slide-content">
                        <h3>Web Connectivity</h3>
                        <p>Seamlessly integrating APIs, third-party services, and external tools to enhance your site's functionality.</p>
                    </div>
                </div>
            </div>
            <div className="convincing-details">
                <div className="convincing-infographics">
                    <div className="convincing-infographics-screen">
                        <img src={AppleScreen} alt=""/>
                    </div>

                </div>
                <div className="convincing-text">
                    <div className="convincing-text-heading">
                        <h1>Your Partner for Digital Success</h1>
                    </div>
                    <div className="convincing-text-content">
                        <p>
                            I create tailored web solutions that combine creativity, technical expertise, and a commitment to excellence. By understanding your goals, I build websites that are visually appealing, fast, and easy to use across all devices. With clean code, responsive design, and seamless functionality.
                        </p>
                        <p>
                            I ensure your site delivers results that are reliable, professional, and aligned with your needs. When you work with me, you get a collaborative partner dedicated to bringing your vision to life and exceeding expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationSection
