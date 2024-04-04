import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch, AiOutlineCompass, AiOutlineMail, AiOutlineBell, AiOutlinePlusSquare, AiOutlineUser, AiOutlineBars } from 'react-icons/ai';
import { FaHome, FaSearch, FaCompass, FaEnvelope, FaBell, FaPlusSquare, FaUser, FaBars } from 'react-icons/fa';
import './Navbar.css'; // Navbar의 CSS 파일

export default function Navbar(){
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location]);

    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <Link to="/" className="logo">Hello World</Link>
                </li>
                <li>
                    <CustomNavLink to="/" iconActive={<FaHome />} iconInactive={<AiOutlineHome />}>홈</CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/search" iconActive={<FaSearch />} iconInactive={<AiOutlineSearch />}>검색</CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/explore" iconActive={<FaCompass />} iconInactive={<AiOutlineCompass />}>탐색</CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/messages" iconActive={<FaEnvelope />} iconInactive={<AiOutlineMail />}>메시지</CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/notifications" iconActive={<FaBell />} iconInactive={<AiOutlineBell />}>알림</CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/create" iconActive={<FaPlusSquare />} iconInactive={<AiOutlinePlusSquare />}>만들기</CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/profile" iconActive={<FaUser />} iconInactive={<AiOutlineUser />}>프로필</CustomNavLink>
                </li>
                <li className="more-link">
                    <CustomNavLink to="/more" iconActive={<FaBars />} iconInactive={<AiOutlineBars />}>더보기</CustomNavLink>
                </li>
            </ul>
        </nav>
    );
}

function CustomNavLink({ to, iconActive, iconInactive, children }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <NavLink to={to} className={`nav-link ${isActive ? "active" : ""}`}>
            {isActive ? iconActive : iconInactive}
            {children}
        </NavLink>
    );
}