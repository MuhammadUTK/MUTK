import "./Acknowledgment.css"

function Acknowledgment( {closeBtn} ) {



    return (
        <div className="acknowledgment-container">
            <div className="acknowledgment-box">
                <div className="acknowledgment-title">
                    <h1>Acknowledgement</h1>
                </div>
                <div className="acknowledgment-content">
                    <p>All facts and figures on this website are purely hypothetical and created to showcase my MERN Stack development skills. This project demonstrates my ability to design, build, and optimize full-stack web applications, ensuring seamless functionality, responsiveness, and scalability across the entire technology stack.</p>
                </div>
                <div className="acknowledgment-button">
                    <button className="Btn" onClick={closeBtn}>
                        Acknowledged
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Acknowledgment;