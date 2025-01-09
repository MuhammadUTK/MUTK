import "./InformationSection.css"
import Setting from "../Images/Orbit-External/Setting.png"
import Drawing from "../Images/Orbit-External/Drawing.png"
import Database from "../Images/Orbit-External/Database.png"
import Robot from "../Images/Orbit-External/telecommuting.png"
import Communicate from "../Images/Orbit-External/bluetooth.png"
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


import React, {useEffect, useState} from 'react'

function InformationSection() {

    const imagesList = [Layout1, Layout2, Layout3, Layout4, Layout5, Layout6, Layout7, Layout8, Layout9, Layout10]

    const sampleLayouts = [ "sample-one", "sample-two", "sample-three", "sample-four", "sample-five", "sample-six", "sample-seven", "sample-eight", "sample-nine", "sample-ten" ]

    const [layoutPosition, setLayoutPosition] = useState(sampleLayouts)
    const [animationKey, setAnimationKey] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setLayoutPosition((prev) => {
                const sampleLayoutCopy = [...prev]
                const lastSample = sampleLayoutCopy.pop();
                sampleLayoutCopy.unshift(lastSample);
                console.log("New List", sampleLayoutCopy)
                return sampleLayoutCopy;
            })
            setAnimationKey(prevKey => prevKey + 1)
        }, 3000)

        return () => {clearInterval(interval)}
    }, []);

    return (
        <div className="service-display-section-container">
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
                            <h2>Web Solutions</h2>
                            <p>Delivering custom web development services designed to meet your unique business
                                requirements.</p>
                        </div>
                    </div>
                    <div className="service-slide">
                        <div className="slide-top-image">
                            <img src={Drawing} alt=""/>
                        </div>
                        <div className="slide-content">
                            <h2>Design & Develop</h2>
                            <p>Offering end-to-end website creation, combining modern, eye-catching designs with clean,
                                functional development. </p>
                        </div>
                    </div>
                    <div className="service-slide">
                        <div className="slide-top-image">
                            <img src={Database} alt=""/>
                        </div>
                        <div className="slide-content">
                            <h2>Responsiveness</h2>
                            <p>Creating mobile-first, fully responsive websites that adapt seamlessly to all screen
                                sizes and devices.</p>
                        </div>
                    </div>
                    <div className="service-slide">
                        <div className="slide-top-image">
                            <img src={Robot} alt=""/>
                        </div>
                        <div className="slide-content">
                            <h2>Maintenance & Support</h2>
                            <p>Providing regular updates, bug fixes, and technical support to keep your website secure
                                and up-to-date.</p>
                        </div>
                    </div>
                    <div className="service-slide">
                        <div className="slide-top-image">
                            <img src={Communicate} alt=""/>
                        </div>
                        <div className="slide-content">
                            <h2>Web Connectivity</h2>
                            <p>Seamlessly integrating APIs, third-party services, and external tools to enhance your
                                site's functionality.</p>
                        </div>
                    </div>
                </div>
                <div className="convincing-details">
                    <div className="convincing-infographics">
                        <div className="convincing-infographics-gradient"></div>
                        <div className="layout-sample-container">
                            <div className="layout-orbit"></div>
                            {layoutPosition.map((item, index) => (
                                <div className={`layout-sample ${item}`} key={`${item}-${animationKey}`}>
                                    <img src={imagesList[index]} alt=""/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="convincing-text">
                        <div className="convincing-text-heading">
                            <h1>Your Partner for Digital Success</h1>
                        </div>
                        <div className="convincing-text-content">
                            <p>
                                I create tailored web solutions that combine creativity, technical expertise, and a
                                commitment to excellence. By understanding your goals, I build websites that are
                                visually appealing, fast, and easy to use across all devices. With clean code,
                                responsive design, and seamless functionality.<br/><br/>
                                I ensure your site delivers results that are reliable, professional, and aligned with
                                your needs. When you work with me, you get a collaborative partner dedicated to bringing
                                your vision to life and exceeding expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InformationSection
