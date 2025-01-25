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

function TechnologySection() {

    const technologyList = [
        {   technology: "React",
            logoImage: ReactLogo,
            shadowColor: "000000"
        },
        {   technology: "GraphQL",
            logoImage: GraphqlLogo,
            shadowColor: "000000"
        },
        {   technology: "React Router",
            logoImage: ReactRouterLogo,
            shadowColor: "000000"
        },
        {   technology: "REST Api",
            logoImage: RESTapiLogo,
            shadowColor: "000000"
        },
        {   technology: "JavaScript",
            logoImage: JavaScriptLogo,
            shadowColor: "000000"
        },
        {   technology: "Redux Toolkit",
            logoImage: ReduxLogo,
            shadowColor: "000000"
        },
        {   technology: "Git/GitHub",
            logoImage: GitHubLogo,
            shadowColor: "000000"
        },
        {   technology: "HTML",
            logoImage: HTMLLogo,
            shadowColor: "000000"
        },
        {   technology: "Axios",
            logoImage: AxiosLogo,
            shadowColor: "000000"
        },
        {   technology: "CSS",
            logoImage: CSSLogo,
            shadowColor: "000000"
        },
        {   technology: "Jest",
            logoImage: JestLogo,
            shadowColor: "000000"
        },
        {   technology: "React Query",
            logoImage: ReactQueryLogo,
            shadowColor: "000000"
        },
        {   technology: "Vercel",
            logoImage: VercelLogo,
            shadowColor: "000000"
        },
        {   technology: "Bootstrap",
            logoImage: BootstrapLogo,
            shadowColor: "000000"
        }
    ]

    const [componentDimensions, setComponentDimensions] = useState({width: 0, height: 0});
    const [gridData, setGridData] = useState({rows: 0, columns: 0, gridEmptyArray: [[]]});
    const compRef = useRef(null);
    let techArrayIndex = useRef(0);

    const techGridDimensions = (width, height) => {
        const techGridColumns = Math.floor((width - ((Math.floor(width / 100) - 1) * 15)) / 100);
        const techGridRows = Math.ceil((height - ((Math.floor(height / 100) - 1) * 35)) / 100);
        const temporaryGrid = Array.from({ length: techGridRows }, () => Array(techGridColumns).fill(null));
        setGridData( prevGridData => {
            if( prevGridData.rows != techGridRows || prevGridData.columns != techGridColumns ) {
                let techGridCell = 1;
                let contentColumns = techGridColumns - 6;
                let contentRows = Math.ceil(technologyList.length / contentColumns)

                for (let rowIndex = 0; rowIndex < techGridRows; rowIndex++) {
                    for (let colIndex = 0; colIndex < techGridColumns; colIndex++) {
                        if (0 < rowIndex && rowIndex < contentRows + 1 && colIndex > 4 && colIndex < (contentColumns + 3) && techGridCell <= technologyList.length) {
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
                techArrayIndex.current = 0;
                console.log(techArrayIndex.current);
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

    console.log(techArrayIndex.current);
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
                        {
                            gridData.gridEmptyArray.map((_, rowIndex) => (
                                <div className="technology-grid-row" key={`grid-row-${rowIndex}`}>
                                    {gridData.gridEmptyArray[rowIndex].map((cell, colIndex) => (
                                        <div className="technology-block" key={`tech-block-${rowIndex}-${colIndex}`}>
                                            {cell > 0 && (
                                                <div className="technology-image">
                                                    <img src={technologyList[cell - 1]?.logoImage}
                                                         alt={technologyList[cell - 1]?.technology}/>
                                                    <div className="technology-name">
                                                        <p>{cell}: {technologyList[cell - 1]?.technology}</p>
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