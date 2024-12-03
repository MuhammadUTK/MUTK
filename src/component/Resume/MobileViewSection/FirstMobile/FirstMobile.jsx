import "./FirstMobile.css";

const FirstMobile = () => {

    const options = { day: "2-digit", month: "short", year: "numeric" };
    const currentDate = new Date().toLocaleDateString("en-UK", options);


    // Generate dates (1 to 31)
    const dates = Array.from({ length: 31 }, (_, i) => i + 1);
    console.log(dates);

    return (
        <div className="first-mobile-container">
            <div className="first-mobile-body">
                <div className="mobile-date">
                    <h4>{currentDate}</h4>
                </div>
                <div className="first-mobile-title">
                    <button className="mobile-menu__button">Upcoming Projects</button>
                    <h1 className="first-mobile-heading-divider"></h1>
                    <button className="mobile-menu__button">Completed Projects</button>
                </div>
                <div className="mobile-tasks-container">
                    <div
                        className="mobile-tasks-dates">
                        {dates.map((date, index) => (
                            <div key={index} className="date-item">
                                {date}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mobile-frame__button--power">
            </div>
            <div className="mobile-frame__button--sound">
            </div>
        </div>
    );
};

export default FirstMobile;
