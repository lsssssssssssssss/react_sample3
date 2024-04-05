import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch, AiOutlineCompass, AiOutlineMail, AiOutlineBell, AiOutlinePlusSquare, AiOutlineUser, AiOutlineBars } from 'react-icons/ai';
import { FaHome, FaSearch, FaCompass, FaEnvelope, FaBell, FaPlusSquare, FaUser, FaBars } from 'react-icons/fa';
import './SubNavbar.css'; // Navbar의 CSS 파일
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SubNavbar(){
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

    return (
        <nav className="s-sidebar">
            <ul>
                <li>
                    <Link to="/" className={`s-logo ${isLogoClicked ? 's-logo-clicked' : ''}`}
                        onMouseDown={handleLogoClick}
                        onMouseUp={handleLogoRelease}
                        onMouseLeave={handleLogoRelease}
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </li>
                <li>
                    <CustomNavLink to="/" iconActive={<FaHome />} iconInactive={<AiOutlineHome />}></CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/search" iconActive={<FaSearch />} iconInactive={<AiOutlineSearch />}></CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/explore" iconActive={<FaCompass />} iconInactive={<AiOutlineCompass />}></CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/message" iconActive={<FaEnvelope />} iconInactive={<AiOutlineMail />}></CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/notifications" iconActive={<FaBell />} iconInactive={<AiOutlineBell />}></CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/create" iconActive={<FaPlusSquare />} iconInactive={<AiOutlinePlusSquare />}></CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/profile" iconActive={<FaUser />} iconInactive={<AiOutlineUser />}></CustomNavLink>
                </li>
                <li className="s-more-link">
                    <CustomNavLink to="/more" iconActive={<FaBars />} iconInactive={<AiOutlineBars />}></CustomNavLink>
                </li>
            </ul>
        </nav>
    );
}

function CustomNavLink({ to, iconActive, iconInactive, children }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <NavLink to={to} className={`s-nav-link ${isActive ? "active" : ""}`}>
            {isActive ? iconActive : iconInactive}
            {children}
        </NavLink>
    );
}