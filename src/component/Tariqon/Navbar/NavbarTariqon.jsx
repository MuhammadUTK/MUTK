import {Link} from "react-router-dom";
import "./NavbarTariqon.css"
import Logo from '../../../assets/Tariqon_Logo.png';
import Account from '../../../assets/account.png';
import Notification from '../../../assets/notification.png';


function NavbarTariqon() {
    const mainNavbarItems = [
        {label: "Resume", link: "/"},
        {label: "Tariqon", link: "/tariqon"},
        {label: "Services", link: "/services"},
        {label: "About", link: "/about"},
        {label: "Contact", link: "/contact"},
    ]


    return (
        <div>
            <div className="tariqon-navbar">
                <div className="tariqon-nav-logo">
                    <Link to="/">
                        <img src={Logo} alt="Tariqon Logo"/>
                    </Link>
                </div>
                <div className="tariqon-nav-items">
                    <ul className="tariqon-listing-items">
                        {mainNavbarItems.map((item) => (
                            <li key={item.label} className="tariqon-nav-list-item">
                                <Link to={item.link}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="tariqon-user-info">
                    <div className="tariqon-notification">
                        <Link>
                            <img src={Notification} alt="Notifications"/>
                        </Link>
                    </div>
                    <div className="tariqon-account">
                        <Link>
                            <img src={Account} alt="Account"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarTariqon
