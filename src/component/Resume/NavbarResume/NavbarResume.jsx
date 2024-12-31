import {Link} from "react-router-dom";
import "./NavbarResume.css"


function NavbarResume() {
    const mainNavbarItems = [
        {label: "Portfolio", link: "/"},
        {label: "Tariqon", link: "/tariqon"},
        {label: "Services", link: "/services"},
        {label: "About", link: "/about"},
        {label: "Contact", link: "/contact"},
    ]


    return (
        <div>
            <div className="resume-navbar">
                <div className="resume-nav-items">
                    <ul className="resume-listing-items">
                        {mainNavbarItems.map((item) => (
                            <li key={item.label} className="resume-nav-list-item">
                                <Link to={item.link}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavbarResume
