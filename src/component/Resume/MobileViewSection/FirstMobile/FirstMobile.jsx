import "./FirstMobile.css";
import Tasks from "./Tasks/Tasks.jsx";
import Person from "../../Images/Task-Persons/Person6.png"

const FirstMobile = () => {

    const options = { day: "2-digit", month: "short", year: "numeric" };
    const currentDate = new Date().toLocaleDateString("en-UK", options);

    // Generate dates (1 to 31)
    const dates = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="first-mobile-container">
            <div className="first-mobile-body">
                <div className="first-mobile-header">
                    <div className="account-info">
                        <div className="responsive-menu">
                            <div className="responsive-menu-bars">
                            </div>
                        </div>
                        <div className="account-image">
                            <img src={Person} alt="Person"/>
                        </div>
                    </div>
                    <div className="mobile-date">
                        <p>{currentDate}</p>
                    </div>

                </div>
                <div className="first-mobile-title">
                    <button className="mobile-menu__button">Upcoming Projects</button>
                    <h1 className="first-mobile-heading-divider"></h1>
                    <button className="mobile-menu__button">Completed Projects</button>
                </div>
                <div className="mobile-tasks-container">
                    <div className="mobile-tasks-dates">
                        {dates.map((date, index) => (
                            <div key={index} className="date-item">
                                {date}
                            </div>
                        ))}
                    </div>
                    <div className="mobile-tasks-list">
                        <div className="scroll-content">
                            <Tasks title="Delivery App" price="1350" date="15 jan" time="10:00 - 1:00" weeks="5"
                                   progressPercentage="65"/>
                            <Tasks title="Event App" price="1350" date="15 jan" time="10:00 - 1:00" weeks="2"
                                   progressPercentage="35"/>
                            <Tasks title="Tracking App" price="7560" date="12 jan" time="9:00 - 12:00" weeks="6"
                                   progressPercentage="75"/>
                            <Tasks title="Managing App" price="7420" date="19 Mar" time="10:00 - 1:00" weeks="4"
                                   progressPercentage="15"/>
                            <Tasks title="Schedule App" price="6240" date="9 Sep" time="7:00 - 9:00" weeks="9"
                                   progressPercentage="45"/>
                            <Tasks title="Health App" price="4790" date="30 Apr" time="8:00 - 9:30" weeks="15"
                                   progressPercentage="25"/>
                            <Tasks title="Todo App" price="50" date="5 Feb" time="3:00 - 6:00" weeks="1"
                                   progressPercentage="50"/>
                            <Tasks title="Protocol App" price="350" date="1 May" time="7:00 - 8:00" weeks="2"
                                   progressPercentage="85"/>
                            <Tasks title="Exercise App" price="2450" date="4 Jul" time="12:00 - 1:00" weeks="4"
                                   progressPercentage="5"/>
                        </div>
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
