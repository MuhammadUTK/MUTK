import "./TechnologySection.css"
import {useState, useRef, useEffect} from "react";

import ReactLogo from "../Images/Technologies/React.png"
import HTMLLogo from "../Images/Technologies/HTML.png"
import CSSLogo from "../Images/Technologies/CSS.png"
import JavaScriptLogo from "../Images/Technologies/JavaScript.png"
import ReduxLogo from "../Images/Technologies/Redux.png"
import AxiosLogo from "../Images/Technologies/Axios.png"
import GraphqlLogo from "../Images/Technologies/GraphQL.png"
import GitHubLogo from "../Images/Technologies/Github.png"
import ReactQueryLogo from "../Images/Technologies/ReactQuery.png"
import RESTapiLogo from "../Images/Technologies/RESTapi.png"
import BootstrapLogo from "../Images/Technologies/Bootstrap.png"
import VercelLogo from "../Images/Technologies/Vercel.png"
import JestLogo from "../Images/Technologies/Jest.png"
import ReactRouterLogo from "../Images/Technologies/ReactRouter.png"
import TypeScriptLogo from "../Images/Technologies/TypeScript.png"
import TailwindLogo from "../Images/Technologies/Tailwind.png"

function TechnologySection() {

    const technologyList = [
        {   technology: "React",
            logoImage: ReactLogo,
            shadowColor: "#00d6fd"
        },
        {   technology: "GraphQL",
            logoImage: GraphqlLogo,
            shadowColor: "#ff09ba"
        },
        {   technology: "REST Api",
            logoImage: RESTapiLogo,
            shadowColor: "#0ba4da"
        },
        {   technology: "JavaScript",
            logoImage: JavaScriptLogo,
            shadowColor: "#f0db4e"
        },
        {   technology: "Redux Toolkit",
            logoImage: ReduxLogo,
            shadowColor: "#7851be"
        },
        {   technology: "TypeScript",
            logoImage: TypeScriptLogo,
            shadowColor: "#047bcb"
        },
        {   technology: "Axios",
            logoImage: AxiosLogo,
            shadowColor: "#3a6be2"
        },
        {   technology: "Jest",
            logoImage: JestLogo,
            shadowColor: "#d43f18"
        },
        {   technology: "Tailwind",
            logoImage: TailwindLogo,
            shadowColor: "#5dccba"
        },
        {   technology: "Git/GitHub",
            logoImage: GitHubLogo,
            shadowColor: "#f5cbb3"
        },
        {   technology: "React Router",
            logoImage: ReactRouterLogo,
            shadowColor: "#fd494c"
        },
        {   technology: "HTML",
            logoImage: HTMLLogo,
            shadowColor: "#f0652a"
        },
        {   technology: "CSS",
            logoImage: CSSLogo,
            shadowColor: "#4382df"
        },
        {   technology: "React Query",
            logoImage: ReactQueryLogo,
            shadowColor: "#fe4253"
        },
        {   technology: "Bootstrap",
            logoImage: BootstrapLogo,
            shadowColor: "#c484fc"
        },
        {   technology: "Vercel",
            logoImage: VercelLogo,
            shadowColor: "#808080"
        }
    ]

    const [componentDimensions, setComponentDimensions] = useState({width: 0, height: 0});
    const [gridData, setGridData] = useState({rows: 0, columns: 0, gridEmptyArray: [[]]});
    const compRef = useRef(null);

    const techGridDimensions = (width, height) => {
        let techPerRow;
        let gridGap;
        let gridRowBottomMargin;
        let techBlockWidthHeight;
        if (width >= 1700) {
            (techPerRow = 9, gridRowBottomMargin = 35, gridGap = 15, techBlockWidthHeight = 100)
        }
        else if (width < 1700 && width >= 1500) {
            (techPerRow = 8, gridRowBottomMargin = 35, gridGap = 15, techBlockWidthHeight = 100)
        }
        else if (width < 1500 && width >= 1300) {
            (techPerRow = 7, gridRowBottomMargin = 35, gridGap = 15, techBlockWidthHeight = 100)
        }
        else if (width < 1300 && width >= 1100) {
            (techPerRow = 6, gridRowBottomMargin = 35, gridGap = 15, techBlockWidthHeight = 85)
        }
        else if (width < 1100 && width >= 1000) {
            (techPerRow = 7, gridRowBottomMargin = 25, gridGap = 15, techBlockWidthHeight = 70)
        }
        else if (width < 1000 && width >= 900) {
            (techPerRow = 6, gridRowBottomMargin = 25, gridGap = 15, techBlockWidthHeight = 70)
        }
        else if (width < 900 && width >= 750) {
            (techPerRow = 7, gridRowBottomMargin = 25, gridGap = 15, techBlockWidthHeight = 55)
        }
        else if (width < 750 && width >= 600) {
            (techPerRow = 6, gridRowBottomMargin = 20, gridGap = 10, techBlockWidthHeight = 50)
        }
        else if (width < 600 && width >= 550) {
            (techPerRow = 5, gridRowBottomMargin = 25, gridGap = 10, techBlockWidthHeight = 70)
        }
        else if (width < 550 && width >= 500) {
            (techPerRow = 4, gridRowBottomMargin = 25, gridGap = 10, techBlockWidthHeight = 70)
        }
        else if (width < 500 && width >= 450) {
            (techPerRow = 5, gridRowBottomMargin = 20, gridGap = 10, techBlockWidthHeight = 55)
        }
        else if (width < 450 && width >= 400) {
            (techPerRow = 4, gridRowBottomMargin = 25, gridGap = 10, techBlockWidthHeight = 55)
        }
        else if (width < 400 ) {
            (techPerRow = 4, gridRowBottomMargin = 20, gridGap = 10, techBlockWidthHeight = 45)
        }

        const techGridColumns = Math.floor((width - ((Math.floor(width / techBlockWidthHeight) - 1) * gridGap)) / techBlockWidthHeight);
        const techGridRows = Math.ceil((height - ((Math.floor(height / techBlockWidthHeight) - 1) * gridRowBottomMargin)) / techBlockWidthHeight);
        setGridData( prevGridData => {
            if( prevGridData.rows != techGridRows || prevGridData.columns != techGridColumns ) {
                const temporaryGrid = Array.from({ length: techGridRows }, () => Array(techGridColumns).fill(null));
                let techGridCell = 1;
                for (let rowIndex = 0; rowIndex < techGridRows; rowIndex++) {
                    let columnGap = technologyList.length - (techGridCell - 1) >= techPerRow ? Math.floor(techGridColumns - techPerRow - 1) / 2 : Math.floor(techGridColumns - (technologyList.length - (techGridCell - 1)) - 1) / 2 ;
                    let contentRows = Math.ceil(technologyList.length / techPerRow)
                    for (let colIndex = 0; colIndex < techGridColumns; colIndex++) {
                        if (0 < rowIndex && rowIndex < contentRows + 1 && colIndex > columnGap && colIndex <= (techPerRow + (columnGap)) && techGridCell <= technologyList.length) {
                            temporaryGrid[rowIndex][colIndex] = techGridCell;
                            techGridCell++;
                        }
                    }
                }
                return {rows: techGridRows, columns: techGridColumns, gridEmptyArray: temporaryGrid};
            }
            return prevGridData;
        })
    }

    useEffect(() => {
        const dimensionCheck = () => {
            if (compRef.current) {
                const {width, height} = compRef.current.getBoundingClientRect();
                techGridDimensions(width, height);
                setComponentDimensions( prevValue => {
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

    return (
        <div className="technologies-section">
            <div className="technologies-container">
                <div className="technologies-header">
                    <h1>Empowering Websites with Cutting-Edge Technologies</h1>
                </div>
                <div className="technology-content">
                    <div className="technologies-list-container" ref={compRef}>
                        {
                            gridData.gridEmptyArray.map((_, rowIndex) => (
                                <div className="technology-grid-row" key={`grid-row-${rowIndex}`}>
                                    {gridData.gridEmptyArray[rowIndex].map((cell, colIndex) => (
                                        <div className="technology-block" style={{ '--bg-glow-color': technologyList[cell - 1]?.shadowColor }} key={`tech-block-${rowIndex}-${colIndex}`}>
                                            {cell > 0 && (
                                                <div className="technology-block-content">
                                                    <img src={technologyList[cell - 1]?.logoImage}
                                                         alt={technologyList[cell - 1]?.technology}/>
                                                    <div className="technology-name">
                                                        <p>{technologyList[cell - 1]?.technology}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnologySection