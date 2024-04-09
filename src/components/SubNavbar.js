import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch, AiOutlineCompass, AiOutlineMail, AiOutlineBell, AiOutlinePlusSquare, AiOutlineUser, AiOutlineBars } from 'react-icons/ai';
import { FaHome, FaSearch, FaCompass, FaEnvelope, FaBell, FaPlusSquare, FaUser, FaBars } from 'react-icons/fa';
import './SubNavbar.css'; // Navbar의 CSS 파일
import './Navbar.css'; // Navbar의 CSS 파일
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import SubNavbarSearch from "./SubNavbarSearch";
import SearchModal from "../pages/SearchModal";
import MoreModal from "../pages/MoreModal";
import SubNavbarN from "./SubNavbarN";

export default function SubNavbar(){
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");
    const [isLogoClicked, setIsLogoClicked] = useState(false);
    let [modal, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenN, setIsOpenN] = useState(false);
    const searchRef = useRef(null);
    let [moreModal, setMoreModal] = useState(false);
    const moreRef = useRef(null);
    const nRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleSidebarN = () => {
        setIsOpenN(!isOpenN);
    };

    // useEffect를 사용하여 컴포넌트가 마운트될 때 document에 클릭 이벤트를 추가합니다.
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

    const handleLogoClick = () => {
        setIsLogoClicked(true);
    };

    const handleLogoRelease = () => {
        setIsLogoClicked(false);
    };

    const modalOpen = () => {
        setModal(!modal);
    };

    const moreModalOpen = () => {
        setMoreModal(!moreModal);
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
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </li>
                <li>
                    <CustomNavLink to="/" iconActive={<FaHome />} iconInactive={<AiOutlineHome />}></CustomNavLink>
                </li>
                <li>
                    {/* <CustomNavLink to="/search" iconActive={<FaSearch />} iconInactive={<AiOutlineSearch />}></CustomNavLink> */}
                    <a className="s-nav-link" onClick={toggleSidebar}>
                        <AiOutlineSearch />
                    </a>
                </li>
                <li>
                    <CustomNavLink to="/explore" iconActive={<FaCompass />} iconInactive={<AiOutlineCompass />}></CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/message" iconActive={<FaEnvelope />} iconInactive={<AiOutlineMail />}></CustomNavLink>
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
                    <CustomNavLink to="/profile" iconActive={<FaUser />} iconInactive={<AiOutlineUser />}></CustomNavLink>
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
                    {/* <div style={{borderTop:'1px solid #ddd', width:'470px', marginLeft:'-98px', marginTop:'12px'}}></div> */}
                    <div className="ms-profile" style={{backgroundColor:'#eee', marginLeft:'-25px'}}>
                        <div>
                            <img src="/img/hello.PNG" style={{border:'none', width:'48px', height:'48px'}} />
                        </div>
                        <div style={{paddingLeft:'10px', fontSize:'14px', paddingTop:'3px'}}>
                            lsssss
                            <div style={{paddingTop:'0px', fontSize:'14px', color:'#777', fontWeight:'lighter'}}>
                                문재인
                            </div>
                        </div>
                    </div>
                    <div className="ms-profile" style={{marginLeft:'-25px'}}>
                        <div>
                            <img src="/img/hello6.PNG" style={{border:'none', width:'48px', height:'48px'}} />
                        </div>
                        <div style={{paddingLeft:'10px', fontSize:'14px', paddingTop:'3px'}}>
                            helloworld
                            <div style={{paddingTop:'0px', fontSize:'14px', color:'#777', fontWeight:'lighter'}}>
                                이재명
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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