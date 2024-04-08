import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch, AiOutlineCompass, AiOutlineMail, AiOutlineBell, AiOutlinePlusSquare, AiOutlineUser, AiOutlineBars } from 'react-icons/ai';
import { FaHome, FaSearch, FaCompass, FaEnvelope, FaBell, FaPlusSquare, FaUser, FaBars } from 'react-icons/fa';
import './Msgbar.css'; // Navbar의 CSS 파일
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

export default function Msgbar() {

    return (
        <div className="m-sidebar">
            <div className="ms-container">
                <div className="ms">
                    <div className="ms-header">
                        <div style={{fontSize:'18px', fontWeight:'900'}}>
                            lsssss
                            <span style={{marginLeft:'10px'}}><FontAwesomeIcon icon={faRepeat} /></span>
                        </div>
                        <div style={{fontSize:'23px'}}><FontAwesomeIcon icon={faPenToSquare} /></div>
                    </div>
                    <div style={{marginBottom:'10px'}}>
                        <div style={{marginTop:'18px', fontWeight:'bold'}}>
                            메시지
                        </div>
                    </div>
                    <div className="ms-profile">
                        <div>
                            <img src="/img/hello.PNG" />
                        </div>
                        <div style={{paddingLeft:'10px', fontSize:'14px', paddingTop:'3px'}}>
                            문재인
                            <div style={{paddingTop:'5px', fontSize:'12px', color:'#888'}}>
                                나 : Helloㆍ3일
                            </div>
                        </div>
                    </div>
                    <div className="ms-profile">
                        <div>
                            <img src="/img/hello2.PNG" />
                        </div>
                        <div style={{paddingLeft:'10px', fontSize:'14px', paddingTop:'3px'}}>
                            이재명
                            <div style={{paddingTop:'5px', fontSize:'12px', color:'#888'}}>
                                나 : Helloㆍ3일
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}