import "./TechnologySection.css"
import {useState, useRef, useEffect} from "react";

function TechnologySection() {

    const [componentDimensions, setComponentDimensions] = useState({width: 0, height: 0});
    const [gridData, setGridData] = useState({rows: 0, columns: 0});
    const compRef = useRef(null);

    const techGridDimensions = (width, height) => {
        const techGridColumns = Math.ceil((width - ((Math.floor(width / 100) - 1) * 15)) / 100);
        const techGridRows = Math.floor((height - ((Math.floor(height / 100) - 1) * 15)) / 100);
        setGridData( prevGridData => {
            if( prevGridData.rows != techGridRows || prevGridData.columns != techGridColumns ) {
                if (width > 1150) {
                    console.log(techGridColumns, techGridRows);
                }
                return {rows: techGridRows, columns: techGridColumns};
            }
            return prevGridData;
        })
    }

    useEffect(() => {
        const dimensionCheck = () => {
            if (compRef.current) {
                const {width, height} = compRef.current.getBoundingClientRect();
                setComponentDimensions( prevValue => {
                    techGridDimensions(width, height);
                    if (Math.abs(width - prevValue.width) > 150) {
                        console.log(width, prevValue.width, Math.abs(width - componentDimensions.width))
                        return ( {width, height} )
                    }
                    return prevValue;
                })
            }
        }

        const resizeObserve = new ResizeObserver(dimensionCheck);
        if ( compRef.current ) {
            resizeObserve.observe(compRef.current)
        }

        return () => {
            if (compRef.current) {
                resizeObserve.unobserve(compRef.current)
            }
            resizeObserve.disconnect();
        }
    }, []);

    console.log(gridData)
    console.log(componentDimensions);

    return (
        <div className="technologies-section">
            <div className="technologies-container">
                <div className="technologies-header">
                    <h1>Empowering Websites with Cutting-Edge Technologies</h1>
                </div>
                <div className="technology-content">
                    <div className="technologies-list-container" ref={compRef}>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                        <div className="hexagon"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnologySection