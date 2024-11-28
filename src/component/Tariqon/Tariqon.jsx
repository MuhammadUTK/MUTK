import {MainContent, SideBar} from "./Index.jsx";
import "./Tariqon.css"
import NavbarTariqon from "./Navbar/NavbarTariqon.jsx";

function Tariqon() {
    return (
        <>
            <NavbarTariqon />
            <div className="main-page">
                <div className="sidebar-section">
                    <SideBar />
                </div>
                <div className="main-section">
                    <MainContent />
                </div>
            </div>
        </>
    )
}

export default Tariqon
