import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch, AiOutlineCompass, AiOutlineMail, AiOutlineBell, AiOutlinePlusSquare, AiOutlineUser, AiOutlineBars } from 'react-icons/ai';
import { FaHome, FaSearch, FaCompass, FaEnvelope, FaBell, FaPlusSquare, FaUser, FaBars } from 'react-icons/fa';
import './SubNavbar.css'; // Navbar의 CSS 파일
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SubNavbarSearch(props){
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");
    const [isLogoClicked, setIsLogoClicked] = useState(false);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location]);

    const handleLogoClick = () => {
        setIsLogoClicked(true);
    };

    const handleLogoRelease = () => {
        setIsLogoClicked(false);
    };

    const handleClick = () => {
        props.setIsOpen(false);
    };

    return (
        <nav className="s-sidebar">
            <ul>
                <li>
                    <Link to="/" className={`s-logo ${isLogoClicked ? 's-logo-clicked' : ''}`}
                        onMouseDown={handleLogoClick}
                        onMouseUp={handleLogoRelease}
                        onMouseLeave={handleLogoRelease}
                        onClick={handleClick}
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </li>
                <li>
                    <CustomNavLink to="/" iconActive={<FaHome />} iconInactive={<AiOutlineHome />} handleClick={handleClick}></CustomNavLink>
                </li>
                <li>
                    {/* <CustomNavLink to="/search" iconActive={<FaSearch />} iconInactive={<AiOutlineSearch />}></CustomNavLink> */}
                    <a className="s-nav-link">
                        <FaSearch />
                    </a>
                </li>
                <li>
                    <CustomNavLink to="/explore" iconActive={<FaCompass />} iconInactive={<AiOutlineCompass />} handleClick={handleClick}></CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/message" iconActive={<FaEnvelope />} iconInactive={<AiOutlineMail />} handleClick={handleClick}></CustomNavLink>
                </li>
                <li>
                    {/* <CustomNavLink to="/notifications" iconActive={<FaBell />} iconInactive={<AiOutlineBell />}></CustomNavLink> */}
                    <a className="s-nav-link">
                        <AiOutlineBell />
                    </a>
                </li>
                <li>
                    {/* <CustomNavLink to="/create" iconActive={<FaPlusSquare />} iconInactive={<AiOutlinePlusSquare />}></CustomNavLink> */}
                    <a className="s-nav-link">
                        <AiOutlinePlusSquare />
                    </a>
                </li>
                <li>
                    <CustomNavLink to="/profile" iconActive={<FaUser />} iconInactive={<AiOutlineUser />} handleClick={handleClick}></CustomNavLink>
                </li>
                <li className="s-more-link">
                    {/* <CustomNavLink to="/more" iconActive={<FaBars />} iconInactive={<AiOutlineBars />}></CustomNavLink> */}
                    <a className="s-nav-link">
                        <AiOutlineBars />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

function CustomNavLink({ to, iconActive, iconInactive, children, handleClick }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <NavLink to={to} className={`s-nav-link ${isActive ? "active" : ""}`} onClick={handleClick}>
            {iconInactive}
            {children}
        </NavLink>
    );
}