import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch, AiOutlineCompass, AiOutlineMail, AiOutlineBell, AiOutlinePlusSquare, AiOutlineUser, AiOutlineBars } from 'react-icons/ai';
import { FaHome, FaSearch, FaCompass, FaEnvelope, FaBell, FaPlusSquare, FaUser, FaBars } from 'react-icons/fa';
import './SubNavbar.css'; // Navbar의 CSS 파일
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import SearchModal from "../pages/SearchModal";
import MoreModal from "../pages/MoreModal";
import SubNavbarN from "./SubNavbarN";

export default function SubNavbarSearch(props){
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");
    const [isLogoClicked, setIsLogoClicked] = useState(false);
    let [modal, setModal] = useState(false);
    let [moreModal, setMoreModal] = useState(false);
    const moreRef = useRef(null);
    const [isOpenN, setIsOpenN] = useState(false);
    const nRef = useRef(null);

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
        props.setIsOpen(!props.isOpen);
    };

    const modalOpen = () => {
        setModal(!modal);
    };

    const moreModalOpen = () => {
        setMoreModal(!moreModal);
    };

    const toggleSidebarN = () => {
        setIsOpenN(!isOpenN);
    };

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
        const handleClickOutsideN = (event) => {
        // 검색창 외부를 클릭하고, 클릭한 요소가 검색창 자식 요소가 아니면 검색창을 닫습니다.
        if (isOpenN && nRef.current && !nRef.current.contains(event.target)) {
            setIsOpenN(false);
        }
        };
        // document에 클릭 이벤트를 추가합니다.
        document.addEventListener('mousedown', handleClickOutsideN);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        return () => {
        document.removeEventListener('mousedown', handleClickOutsideN);
        };
    }, [isOpenN]);

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
                    <a className="s-nav-link" onClick={handleClick}>
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
                    <a className="s-nav-link" onClick={toggleSidebarN}>
                        <AiOutlineBell />
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
        <div ref={nRef} className={`search-bar ${isOpenN ? 'open' : ''}`}>
            {isOpenN && <SubNavbarN isOpen={isOpenN} setIsOpen={setIsOpenN} />}
            <div style={{fontSize: '24px', fontWeight: 'bold'}} className="sb-nav-link">
                알림
                <div>
                    <div style={{fontSize:'16px', fontWeight:'bold', paddingTop:'10px', paddingBottom:'10px'}}>오늘</div>
                    <div className="ms-profile" style={{marginLeft:'-25px', paddingRight:'20px'}}>
                        <div>
                            <img src="/img/hello.PNG" style={{border:'none', width:'45px', height:'45px'}} />
                        </div>
                        <div style={{paddingLeft:'13px', fontSize:'14px', paddingTop:'3px'}}>
                            lssss1sssszzzz
                            <span style={{paddingTop:'0px', fontSize:'14px', fontWeight:'lighter'}}>
                                님이 댓글을 남겼습니다: ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                            </span>
                            <span style={{color:'#777', fontSize:'13px', fontWeight:'normal'}}> 10분</span>
                        </div>
                    </div>
                    <div className="ms-profile" style={{marginLeft:'-25px', paddingRight:'20px'}}>
                        <div>
                            <img src="/img/hello6.PNG" style={{border:'none', width:'45px', height:'45px'}} />
                        </div>
                        <div style={{paddingLeft:'13px', fontSize:'14px', paddingTop:'3px'}}>
                            lssss1ssssz1123123
                            <span style={{paddingTop:'0px', fontSize:'14px', fontWeight:'lighter'}}>
                                님이 회원님을 팔로우하기 시작했습니다.
                            </span>
                            <span style={{color:'#777', fontSize:'13px', fontWeight:'normal'}}> 10분</span>
                        </div>
                    </div>
                    <div className="ms-profile" style={{marginLeft:'-25px', paddingRight:'20px'}}>
                        <div>
                            <img src="/img/hello4.PNG" style={{border:'none', width:'45px', height:'45px'}} />
                        </div>
                        <div style={{paddingLeft:'13px', fontSize:'14px', paddingTop:'3px'}}>
                            lssss1ssssz1123123
                            <span style={{paddingTop:'0px', fontSize:'14px', fontWeight:'lighter'}}>
                                님이 회원님의 사진을 좋아합니다.
                            </span>
                            <span style={{color:'#777', fontSize:'13px', fontWeight:'normal'}}> 10분</span>
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