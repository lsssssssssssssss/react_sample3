import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch, AiOutlineCompass, AiOutlineMail, AiOutlineBell, AiOutlinePlusSquare, AiOutlineUser, AiOutlineBars } from 'react-icons/ai';
import { FaHome, FaSearch, FaCompass, FaEnvelope, FaBell, FaPlusSquare, FaUser, FaBars } from 'react-icons/fa';
import './SubNavbar.css'; // Navbar의 CSS 파일
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import SearchModal from "../pages/SearchModal";
import MoreModal from "../pages/MoreModal";
import SubNavbarSearch from "./SubNavbarSearch";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function SubNavbarN(props){
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");
    const [isLogoClicked, setIsLogoClicked] = useState(false);
    let [modal, setModal] = useState(false);
    let [moreModal, setMoreModal] = useState(false);
    const moreRef = useRef(null);
    const searchRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutsideMoreModal = (event) => {
        // 검색창 외부를 클릭하고, 클릭한 요소가 검색창 자식 요소가 아니면 검색창을 닫습니다.
        if (moreModal && moreRef.current && !moreRef.current.contains(event.target)) {
            setMoreModal(false);
        }
        };
        // document에 클릭 이벤트를 추가합니다.
        document.addEventListener('mousedown', handleClickOutsideMoreModal);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        return () => {
        document.removeEventListener('mousedown', handleClickOutsideMoreModal);
        };
    }, [moreModal]);

    useEffect(() => {
        setActiveTab(location.pathname);
        const handleClickOutside = (event) => {
        // 검색창 외부를 클릭하고, 클릭한 요소가 검색창 자식 요소가 아니면 검색창을 닫습니다.
        if (isOpen && searchRef.current && !searchRef.current.contains(event.target)) {
            setIsOpen(false);
        }
        };
        // document에 클릭 이벤트를 추가합니다.
        document.addEventListener('mousedown', handleClickOutside);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, location]);

    const handleLogoClick = () => {
        setIsLogoClicked(true);
    };

    const handleLogoRelease = () => {
        setIsLogoClicked(false);
    };

    const handleClick = () => {
        props.setIsOpen(!props.isOpen);
    };

    const modalOpen = () => {
        setModal(!modal);
    };

    const moreModalOpen = () => {
        setMoreModal(!moreModal);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
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
                    <a className="s-nav-link" onClick={toggleSidebar}>
                        <AiOutlineSearch />
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
                    <a className="s-nav-link" onClick={handleClick}>
                        <FaBell />
                    </a>
                </li>
                <li>
                    {/* <CustomNavLink to="/create" iconActive={<FaPlusSquare />} iconInactive={<AiOutlinePlusSquare />}></CustomNavLink> */}
                    <a className="s-nav-link" onClick={modalOpen}>
                        <AiOutlinePlusSquare />
                    </a>
                </li>
                <li>
                    <CustomNavLink to="/profile" iconActive={<FaUser />} iconInactive={<AiOutlineUser />} handleClick={handleClick}></CustomNavLink>
                </li>
                <li className="s-more-link">
                    {/* <CustomNavLink to="/more" iconActive={<FaBars />} iconInactive={<AiOutlineBars />}></CustomNavLink> */}
                    <a className="nav-link" onClick={moreModalOpen}>
                        {moreModal && <FaBars />}
                        {!moreModal && <AiOutlineBars />}
                    </a>
                </li>
            </ul>
        </nav>
        <div ref={searchRef} className={`search-bar ${isOpen ? 'open' : ''}`}>
            {isOpen && <SubNavbarSearch isOpen={isOpen} setIsOpen={setIsOpen} />}
            <div style={{fontSize: '24px', fontWeight: 'bold'}} className="sb-nav-link">
                검색
                <div>
                    <input style={{fontSize:'16px',fontWeight:'normal'}} className="searchBox" type="text" placeholder="검색" />
                    <button className="searchIcon"><AiOutlineSearch /></button>
                    <div style={{borderTop:'1px solid #ddd', width:'470px', marginLeft:'-98px', marginTop:'12px'}}></div>
                    <div style={{fontSize:'16px', marginTop:'20px', marginBottom:'5px'}}>최근 검색 항목<span style={{color:'rgb(49 169 248)', fontSize:'14px', float:'right', marginRight:'20px', cursor:'pointer'}}>모두 지우기</span></div>
                    <div className="ms-profile" style={{marginLeft:'-25px'}}>
                        <div>
                            <img src="/img/hello.PNG" style={{border:'none', width:'48px', height:'48px'}} />
                        </div>
                        <div style={{paddingLeft:'10px', fontSize:'14px', paddingTop:'3px'}}>
                            lsssss
                            <div style={{paddingTop:'0px', fontSize:'14px', color:'#777', fontWeight:'lighter'}}>
                                홍길동
                            </div>
                            <div style={{position:'absolute', top:'221px', left:'425px', fontSize:'20px', color:'#666', cursor:'pointer'}}><FontAwesomeIcon icon={faTimes} /></div>
                        </div>
                    </div>
                    <div className="ms-profile" style={{marginLeft:'-25px'}}>
                        <div>
                            <img src="/img/hello6.PNG" style={{border:'none', width:'48px', height:'48px'}} />
                        </div>
                        <div style={{paddingLeft:'10px', fontSize:'14px', paddingTop:'3px'}}>
                            helloworld
                            <div style={{paddingTop:'0px', fontSize:'14px', color:'#777', fontWeight:'lighter'}}>
                                유재석
                            </div>
                            <div style={{position:'absolute', top:'289px', left:'425px', fontSize:'20px', color:'#666', cursor:'pointer'}}><FontAwesomeIcon icon={faTimes} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {modal &&
            <SearchModal isOpen={modal} isClose={()=>setModal(false)}>
            </SearchModal>
        }
        {moreModal &&
            <div ref={moreRef}>
                <MoreModal isOpen={moreModal} isClose={()=>setMoreModal(false)}>
                </MoreModal>
            </div>
        }
        </>
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