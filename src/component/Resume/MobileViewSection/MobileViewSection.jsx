import "./MobileViewSection.css"
import FirstMobile from "./FirstMobile/FirstMobile.jsx";
import SecondMobile from "./SecondMobile/SecondMobile.jsx";
import Smartphone from "../Images/Mobile-Reasons/Smartphone.png"
import Search from "../Images/Mobile-Reasons/search.png"
import Share from "../Images/Mobile-Reasons/share.png"
import Gallery from "../Images/Mobile-Reasons/Gallery.png"
import Keyboard from "../Images/Mobile-Reasons/keyboard.png"
import SocialMedia from "../Images/Mobile-Reasons/Social-media.png"

function MobileViewSection() {
    return (
        <div className="mobile-section">
            <div className="mobile-content-container">
                <div className="mobile-section-heading">
                    <h1>Mobile-Optimized Web Experiences</h1>
                </div>
                <div className="mobile-reasons-section">
                    <div className="mobile-reasons-container">
                        <div className="mobile-reason">
                            <div className="reason-image">
                                <img src={Smartphone} alt=""/>
                            </div>
                            <div className="reason-content">
                                <div className="reason-heading">
                                    <h2>Improved Accessibility</h2>
                                </div>
                                <div className="reason-description">
                                    <p>Responsive layouts make websites accessible to users across a wide range of
                                        devices, increasing reach and usability.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-reason">
                            <div className="reason-image">
                                <img src={Share} alt=""/>
                            </div>
                            <div className="reason-content">
                                <div className="reason-heading">
                                    <h2>Broader Audience Reach</h2>
                                </div>
                                <div className="reason-description">
                                    <p>With mobile usage surpassing desktop, responsive designs cater to a larger and
                                        growing audience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-reason">
                            <div className="reason-image">
                                <img src={Gallery} alt=""/>
                            </div>
                            <div className="reason-content">
                                <div className="reason-heading">
                                    <h2>Consistent Branding</h2>
                                </div>
                                <div className="reason-description">
                                    <p>Responsive designs maintain visual and functional consistency, enhancing brand
                                        identity across all platforms.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-reason">
                            <div className="reason-image">
                                <img src={Search} alt=""/>
                            </div>
                            <div className="reason-content">
                                <div className="reason-heading">
                                    <h2>Higher Search Engine Rankings</h2>
                                </div>
                                <div className="reason-description">
                                    <p>Search engines prioritize mobile-friendly websites, boosting visibility and
                                        organic traffic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-reason">
                            <div className="reason-image">
                                <img src={SocialMedia} alt=""/>
                            </div>
                            <div className="reason-content">
                                <div className="reason-heading">
                                    <h2>Cost-Effectiveness</h2>
                                </div>
                                <div className="reason-description">
                                    <p>A single responsive design eliminates the need for separate mobile and desktop
                                        websites, reducing development and maintenance costs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-reason">
                            <div className="reason-image">
                                <img src={Keyboard} alt=""/>
                            </div>
                            <div className="reason-content">
                                <div className="reason-heading">
                                    <h2>Improved Conversion Rates</h2>
                                </div>
                                <div className="reason-description">
                                    <p>A seamless experience across devices increases the likelihood of users completing
                                        actions like purchases or form submissions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-section-content">
                    <div className="mobile-content">
                        <div className="mobile-content-heading">
                            <h1>Mobile-First Web Solutions</h1>
                        </div>
                        <div className="mobile-content-text">
                            <p>
                                I craft visually stunning, highly functional websites optimized for mobile devices. With
                                captivating animations, pixel-perfect responsiveness, and sleek layouts, my designs
                                offer an exceptional user experience by merging aesthetics with usability. Every element
                                is engineered for intuitive navigation, fast performance, and visually engaging
                                interfaces.
                                <br/><br/>
                                Focused on responsive design, I create websites that perform seamlessly on mobile
                                devices. By integrating fluid transitions, dynamic animations, and user-centric layouts,
                                I deliver impactful, accessible, and high-quality solutions. My designs ensure that
                                websites look impressive and function flawlessly across all devices, catering to diverse
                                audiences effectively.
                            </p>
                        </div>
                    </div>
                    <div className="mobile-container">
                        <FirstMobile/>
                        <SecondMobile/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileViewSection