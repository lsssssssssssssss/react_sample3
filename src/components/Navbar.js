import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch, AiOutlineCompass, AiOutlineMail, AiOutlineBell, AiOutlinePlusSquare, AiOutlineUser, AiOutlineBars } from 'react-icons/ai';
import { FaHome, FaSearch, FaCompass, FaEnvelope, FaBell, FaPlusSquare, FaUser, FaBars } from 'react-icons/fa';
import './Navbar.css'; // Navbar의 CSS 파일
import SearchModal from "../pages/SearchModal";
import SubNavbarSearch from "./SubNavbarSearch";

export default function Navbar(){
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");
    const [isLogoClicked, setIsLogoClicked] = useState(false);
    let [modal, setModal] = useState(false); // modal flag값(true : 열기, false : 닫기)

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location]);

    const handleLogoClick = () => {
        setIsLogoClicked(true);
    };

    const handleLogoRelease = () => {
        setIsLogoClicked(false);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <nav className="sidebar">
            <ul>
                <li>
                    <Link to="/" className={`logo ${isLogoClicked ? 'logo-clicked' : ''}`}
                        onMouseDown={handleLogoClick}
                        onMouseUp={handleLogoRelease}
                        onMouseLeave={handleLogoRelease}
                    >
                        Hello World
                    </Link>
                </li>
                <li>
                    <CustomNavLink to="/" iconActive={<FaHome />} iconInactive={<AiOutlineHome />}>홈</CustomNavLink>
                </li>
                <li>
                    {/* <CustomNavLink to="/search" iconActive={<FaSearch />} iconInactive={<AiOutlineSearch />} handleClick={handleClick}>검색</CustomNavLink> */}
                    <a className="nav-link sb-nav-link" onClick={toggleSidebar}>
                        <AiOutlineSearch />검색
                    </a>
                </li>
                <li>
                    <CustomNavLink to="/explore" iconActive={<FaCompass />} iconInactive={<AiOutlineCompass />}>탐색</CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/message" iconActive={<FaEnvelope />} iconInactive={<AiOutlineMail />}>메시지</CustomNavLink>
                </li>
                <li>
                    {/* <CustomNavLink to="/notifications" iconActive={<FaBell />} iconInactive={<AiOutlineBell />} handleClick={handleClick}>알림</CustomNavLink> */}
                    <a className="nav-link">
                        <AiOutlineBell />알림
                    </a>
                </li>
                <li>
                    {/* <CustomNavLink to="/create" iconActive={<FaPlusSquare />} iconInactive={<AiOutlinePlusSquare />} handleClick={handleClick}>만들기</CustomNavLink> */}
                    <a className="nav-link">
                    <AiOutlinePlusSquare />만들기
                    </a>
                </li>
                <li>
                    <CustomNavLink to="/profile" iconActive={<FaUser />} iconInactive={<AiOutlineUser />}>프로필</CustomNavLink>
                </li>
                <li className="more-link">
                    {/* <CustomNavLink to="/more" iconActive={<FaBars />} iconInactive={<AiOutlineBars />} handleClick={handleClick}>더보기</CustomNavLink> */}
                    <a className="nav-link">
                        <AiOutlineBars />더보기
                    </a>
                </li>
            </ul>
        </nav>
        <div className={`search-bar ${isOpen ? 'open' : ''}`}>
            {isOpen && <SubNavbarSearch isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
        </>
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
