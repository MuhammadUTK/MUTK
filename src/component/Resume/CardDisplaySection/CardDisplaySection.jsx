import "./CardDisplaySection.css"
import Moose from "../Images/Image-Hover/Moose.jpg"
import BlackMoose from "../Images/Image-Hover/Black_Moose.jpg"
import Cat from "../Images/Image-Hover/Cat.jpg"
import House from "../Images/Image-Hover/House.jpg"
import Waterfall from "../Images/Image-Hover/Waterfall.jpg"
import {useState, useRef} from "react";

const CardDisplaySection = () => {

    const [currentCursor, setCurrentCursor] = useState({x: 0, y: 0});
    const [isHovering, setHovering] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const cardRef = useRef(null);


    const mouseMove = (event) => {



        const sectionDetails = cardRef.current.getBoundingClientRect();

        if ((Math.floor(sectionDetails.height) - (event.clientY - Math.floor(sectionDetails.top) + 5)) >= 290 &&
            ((Math.floor(sectionDetails.width) - (event.clientX - Math.floor(sectionDetails.left) + 5)) >= 340)) {
            setCurrentCursor({x: event.clientX - Math.floor(sectionDetails.left) + 5,
                                    y: event.clientY - Math.floor(sectionDetails.top) + 5});
        }
        else if ((Math.floor(sectionDetails.height) - (event.clientY - Math.floor(sectionDetails.top) + 5)) < 290 &&
        ((Math.floor(sectionDetails.width) - (event.clientX - Math.floor(sectionDetails.left) + 5)) >= 340)) {
            setCurrentCursor({x: event.clientX - Math.floor(sectionDetails.left) + 5,
                y: event.clientY - Math.floor(sectionDetails.top) - 290});
        }
        else if ((Math.floor(sectionDetails.height) - (event.clientY - Math.floor(sectionDetails.top) + 5)) >= 290 &&
            ((Math.floor(sectionDetails.width) - (event.clientX - Math.floor(sectionDetails.left) + 5)) < 340)) {
            setCurrentCursor({x: event.clientX - Math.floor(sectionDetails.left) - 345,
                y: event.clientY - Math.floor(sectionDetails.top) + 5});
        }
        else if ((Math.floor(sectionDetails.height) - (event.clientY - Math.floor(sectionDetails.top) + 5)) < 290 &&
            ((Math.floor(sectionDetails.width) - (event.clientX - Math.floor(sectionDetails.left) + 5)) < 340)) {
            setCurrentCursor({x: event.clientX - Math.floor(sectionDetails.left) - 345,
                y: event.clientY - Math.floor(sectionDetails.top) - 290});
        }

        console.log(currentCursor.x, currentCursor.y, sectionDetails);

        const singleBlockHeight = Math.floor(sectionDetails.height) / Object.keys(imagesData).length;
        setImageIndex( Math.max(0, Math.floor(( event.clientY - sectionDetails.top ) / singleBlockHeight)));
        console.log(sectionDetails.height, Object.keys(imagesData).length, singleBlockHeight, imageIndex, event.clientY);

    }

    const mouseEnter = ( ) => setHovering(true);
    const mouseLeave = ( ) => setHovering(false);




    const imagesData = [
        {
            imageURL: Cat,
            photographerName: "Bastian Schulz",
            photographerURL: "https://unsplash.com/@buzztea?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            imageUnsplashURL: "https://unsplash.com/photos/a-close-up-of-a-cat-looking-at-the-camera-hJmpKUQUIXw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        {
            imageURL: House,
            photographerName: "Daniel Seßler",
            photographerURL: "https://unsplash.com/@danielsessler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            imageUnsplashURL: "https://unsplash.com/photos/a-small-village-on-a-rocky-shore-with-mountains-in-the-background-pX5PxHC1aEM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        {
            imageURL: Moose,
            photographerName: "Omar Ramadan",
            photographerURL: "https://unsplash.com/@omarvellous14?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            imageUnsplashURL: "https://unsplash.com/photos/a-large-moose-laying-on-top-of-a-dirt-field-76bZMshUstE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        {
            imageURL: BlackMoose,
            photographerName: "Shivam Kumar",
            photographerURL: "https://unsplash.com/@krishnadigitalcolorphotostudio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            imageUnsplashURL: "https://unsplash.com/photos/black-moose-lying-on-field-during-daytime-MVIqwQvkwG4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        {
            imageURL: Waterfall,
            photographerName: "Danijel Škabić",
            photographerURL: "https://unsplash.com/@silentphocro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            imageUnsplashURL: "https://unsplash.com/photos/a-waterfall-with-trees-around-it-4M81--ecrIo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        }
    ]



    return (
        <div className="card-display-section-container">
            <div className="card-section-heading">
                <h1>PopBar Gallery</h1>
            </div>
            <div className="card-section-content" ref={cardRef} onMouseMove={mouseMove} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
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
                <div className={`popup-image-container ${isHovering ? "visible" : "hidden"}`} style={{left: `${currentCursor.x}px`, top: `${currentCursor.y}px`}}>
                        <img src={imagesData[imageIndex].imageURL} alt=""/>
                        <p className="popup-image-text">
                            Photo by<a href={imagesData[imageIndex].photographerURL}>&nbsp;{imagesData[imageIndex].photographerName}</a>&nbsp;on&nbsp;<a href={imagesData[imageIndex].imageUnsplashURL}>Unsplash</a>

                        </p>
                    </div>
            </div>
        </div>
    )
}

export default CardDisplaySection;