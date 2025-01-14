import "./MobileViewSection.css"
import FirstMobile from "./FirstMobile/FirstMobile.jsx";
import SecondMobile from "./SecondMobile/SecondMobile.jsx";

function MobileViewSection() {
    return (
        <div className="mobile-section">
            <div className="mobile-content-container">
                <div className="mobile-section-heading">
                    <h1>Mobile-Optimized Web Experiences</h1>
                </div>
                <div className="mobile-section-tobe">

                </div>
                <div className="first-mobile-content">
                    <div className="mobile-content">
                        <div className="mobile-content-heading">
                            <h1>Mobile-First Web Solutions</h1>
                        </div>
                        <div className="mobile-content-text">
                            <p>I specialize in creating visually stunning and highly functional websites that seamlessly
                                adapt to mobile devices. With a focus on captivating animations, pixel-perfect
                                responsiveness, and sleek layouts, my designs ensure an exceptional user experience.
                                Every detail is thoughtfully engineered to merge aesthetics with usability, delivering
                                intuitive navigation, fast performance, and visually compelling interfaces optimized for
                                mobile users.<br/><br/>
                                Harnessing the power of responsive design, I develop websites that perform flawlessly on
                                mobile devices. My approach integrates fluid transitions, dynamic animations, and
                                user-centric layouts to create impactful experiences. With an emphasis on accessibility,
                                speed, and quality, I ensure that websites are not only visually striking but also offer
                                unparalleled functionality, catering to diverse audiences and delivering results across
                                all devices.
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