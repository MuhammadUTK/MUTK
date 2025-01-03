import "./Acknowledgment.css"

function Acknowledgment( {closeBtn} ) {



    return (
        <div className="acknowledgment-container">
            <div className="acknowledgment-box">
                <div className="acknowledgment-title">
                    <h1>Acknowledgement</h1>
                </div>
                <div className="acknowledgment-content">
                    <p>All facts and figures on this website are purely hypothetical and created to showcase my front-end web development skills. This project highlights my ability to design and build interactive, responsive, and visually engaging web experiences.</p>
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