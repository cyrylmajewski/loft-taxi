import { NavLink } from "react-router-dom"
import LogoHeader from '../assets/logo-header.svg';
import { withAuth, IAuthContext } from "../Contexts/AuthContext";

const Navigation = ({ logOut }: IAuthContext): JSX.Element => {
    return (
        <header className="navigation">
            <div className="navigation__logo">
                <img src={LogoHeader} alt="Logo header" />
            </div>
            <nav className="navigation__container">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <NavLink to="/map">Map</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink onClick={() => logOut()} to="/">Sign Out</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default withAuth(Navigation);