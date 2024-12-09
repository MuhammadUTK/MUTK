import "./CardDisplaySection.css"
import Moose from "../Images/Image-Hover/Moose.jpg"
import BlackMoose from "../Images/Image-Hover/Black_Moose.jpg"
import Cat from "../Images/Image-Hover/Cat.jpg"
import House from "../Images/Image-Hover/House.jpg"
import {useState, useRef} from "react";

const CardDisplaySection = () => {

    const [currentCursor, setCurrentCursor] = useState({x: 0, y: 0});
    const [isHovering, setHovering] = useState(false);
    const cardRef = useRef(null);

    const mouseMove = (event) => {
        const sectionDetails = cardRef.current.getBoundingClientRect();
        setCurrentCursor({x: event.clientX - sectionDetails.left + 10,
                                y: event.clientY - sectionDetails.top + 10});
        console.log(currentCursor.x, currentCursor.y, sectionDetails);
    }

    const mouseEnter = ( ) => setHovering(true);
    const mouseLeave = ( ) => setHovering(false);


    const imagesData = {
        image1: {
            imageURL: Cat,
            photographerURL: "https://unsplash.com/@buzztea?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            imageUnsplashURL: "https://unsplash.com/photos/a-close-up-of-a-cat-looking-at-the-camera-hJmpKUQUIXw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        image2: {
            imageURL: House,
            photographerURL: "https://unsplash.com/@danielsessler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            imageUnsplashURL: "https://unsplash.com/photos/a-small-village-on-a-rocky-shore-with-mountains-in-the-background-pX5PxHC1aEM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        image3: {
            imageURL: Moose,
            photographerURL: "https://unsplash.com/@omarvellous14?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            imageUnsplashURL: "https://unsplash.com/photos/a-large-moose-laying-on-top-of-a-dirt-field-76bZMshUstE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        image4: {
            imageURL: BlackMoose,
            photographerURL: "https://unsplash.com/@krishnadigitalcolorphotostudio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            imageUnsplashURL: "https://unsplash.com/photos/black-moose-lying-on-field-during-daytime-MVIqwQvkwG4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
    }



    return (
        <div className="card-display-section-container">
            <div className="card-section-heading">
                <h1>PopBar Gallery</h1>
            </div>
            <div className="card-section-content" ref={cardRef} onMouseMove={mouseMove} onMouseEnter={mouseEnter}
                 onMouseLeave={mouseLeave}>
                <div className="card-bar bar-one">
                    <h1>Float Frames</h1>
                </div>
                <div className="card-bar bar-two">
                    <h1>Image Puff</h1>
                </div>
                <div className="card-bar bar-three">
                    <h1>Hover Portal</h1>
                </div>
                <div className="card-bar bar-fouth">
                    <h1>Bar Hopper</h1>
                </div>
                <div className="card-bar bar-five">
                    <h1>Peek-a-Bar</h1>
                </div>
                {
                    isHovering && (<div className="popup-image-container">
                        {/*<img src={Cat} alt=""/>*/}
                    </div>)
                }
            </div>
        </div>
    )
}

export default CardDisplaySection;



//
// style={{left: `${currentCursor.x}px`,
//     top: `${currentCursor.y}px`}}