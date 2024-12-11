import "./CardDisplaySection.css"
import Mercury from "../Images/Image-Hover/Mercury.jpg"
import Venus from "../Images/Image-Hover/Venus.jpg"
import Earth from "../Images/Image-Hover/Earth.jpg"
import Mars from "../Images/Image-Hover/Mars.jpg"
import Jupiter from "../Images/Image-Hover/Jupiter.jpg"
import Saturn from "../Images/Image-Hover/Saturn.jpg"
import Uranus from "../Images/Image-Hover/Uranus.jpg"
import Neptune from "../Images/Image-Hover/Neptune.jpg"
import Galaxy from "../Images/Image-Hover/Galaxy.jpg"
import {useState, useRef} from "react";

const CardDisplaySection = () => {

    const [currentCursor, setCurrentCursor] = useState({x: 0, y: 0});
    const [isHovering, setHovering] = useState(false);
    const [sliderTranslate, setSliderTranslate] = useState(0);
    const cardRef = useRef(null);


    const mouseMove = (event) => {



        const sectionDetails = cardRef.current.getBoundingClientRect();

        if ((Math.floor(sectionDetails.height) - (event.clientY - Math.floor(sectionDetails.top) + 5)) >= 290 &&
            ((Math.floor(sectionDetails.width) - (event.clientX - Math.floor(sectionDetails.left) + 5)) >= 360)) {
            setCurrentCursor({x: event.clientX - Math.floor(sectionDetails.left) + 5,
                                    y: event.clientY - Math.floor(sectionDetails.top) + 5});
        }
        else if ((Math.floor(sectionDetails.height) - (event.clientY - Math.floor(sectionDetails.top) + 5)) < 290 &&
        ((Math.floor(sectionDetails.width) - (event.clientX - Math.floor(sectionDetails.left) + 5)) >= 360)) {
            setCurrentCursor({x: event.clientX - Math.floor(sectionDetails.left) + 5,
                y: event.clientY - Math.floor(sectionDetails.top) - 290});
        }
        else if ((Math.floor(sectionDetails.height) - (event.clientY - Math.floor(sectionDetails.top) + 5)) >= 290 &&
            ((Math.floor(sectionDetails.width) - (event.clientX - Math.floor(sectionDetails.left) + 5)) < 360)) {
            setCurrentCursor({x: event.clientX - Math.floor(sectionDetails.left) - 365,
                y: event.clientY - Math.floor(sectionDetails.top) + 5});
        }
        else if ((Math.floor(sectionDetails.height) - (event.clientY - Math.floor(sectionDetails.top) + 5)) < 290 &&
            ((Math.floor(sectionDetails.width) - (event.clientX - Math.floor(sectionDetails.left) + 5)) < 360)) {
            setCurrentCursor({x: event.clientX - Math.floor(sectionDetails.left) - 365,
                y: event.clientY - Math.floor(sectionDetails.top) - 290});
        }

        const singleBlockHeight = Math.floor(sectionDetails.height) / Object.keys(imagesData).length;

        setSliderTranslate( (Math.max(0, Math.floor(( event.clientY - sectionDetails.top ) / singleBlockHeight))) * 270);

    }

    const mouseEnter = ( ) => setHovering(true);
    const mouseLeave = ( ) => setHovering(false);




    const imagesData = [
        {
            imageURL: Mercury,
            planetName: "Mercury"
        },
        {
            imageURL: Venus,
            planetName: "Venus"
        },
        {
            imageURL: Earth,
            planetName: "Earth"
        },
        {
            imageURL: Mars,
            planetName: "Mars"
        },
        {
            imageURL: Jupiter,
            planetName: "Jupiter"
        },
        {
            imageURL: Saturn,
            planetName: "Saturn"
        },
        {
            imageURL: Uranus,
            planetName: "Uranus"
        },
        {
            imageURL: Neptune,
            planetName: "Neptune"
        }
    ]



    return (
        <div className="card-display-section-container">
            <div className="card-section-heading">
                <h1>Space PopBar Gallery</h1>
            </div>
            <div className="card-section-content" ref={cardRef} onMouseMove={mouseMove} onMouseEnter={mouseEnter}
                 onMouseLeave={mouseLeave}>
                <div className="card-bar bar-one">
                    <h1>Mercury</h1>
                </div>
                <div className="card-bar bar-two">
                    <h1>Venus</h1>
                </div>
                <div className="card-bar bar-three">
                    <h1>Earth</h1>
                </div>
                <div className="card-bar bar-fouth">
                    <h1>Mars</h1>
                </div>
                <div className="card-bar bar-five">
                    <h1>Jupiter</h1>
                </div>
                <div className="card-bar bar-three">
                    <h1>Saturn</h1>
                </div>
                <div className="card-bar bar-fouth">
                    <h1>Uranus</h1>
                </div>
                <div className="card-bar bar-five">
                    <h1>Neptune</h1>
                </div>
                <div className={`popup-image-container ${isHovering ? "visible" : "hidden"}`}
                     style={{left: `${currentCursor.x}px`, top: `${currentCursor.y}px`}}>
                    <div className="popup-image-slider-container">
                        {
                            imagesData.map((item, index) => (
                                <div className="popup-slider-image" key={item.planetName} style={{
                                    transform: `translateY(-${sliderTranslate}px)`,
                                    transition: "transform 0.3s ease"
                                }}>
                                    <img src={imagesData[index].imageURL} alt=""/>
                                    <p className="popup-image-text">
                                        {imagesData[index].planetName}
                                    </p>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardDisplaySection;