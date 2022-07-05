import Logo from '../assets/logo.svg';

export const Sidebar = (): JSX.Element => {
    return (
        <aside className="sidebar">
            <img className="sidebar__logo" src={Logo} alt="Loft-Taxi logo" />
        </aside>
    )
}