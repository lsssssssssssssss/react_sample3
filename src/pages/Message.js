import React, { useState, useEffect, useRef } from 'react';
import './Message.css';
import SubNavbar from '../components/SubNavbar';
import Msgbar from '../components/Msgbar';

const Message = () => {
  
  const numbers = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

  const messageContainerRef = useRef(null); // 스크롤 컨테이너를 참조하기 위한 useRef 훅

  useEffect(() => {
    // 페이지가 로드될 때 스크롤 컨테이너를 맨 아래로 스크롤
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, []); // 빈 배열을 두번째 인자로 넣어 페이지가 처음 로드될 때만 실행되도록 함

  return (
    <div className='msg-container'>
        <SubNavbar />
        <Msgbar />
        <div className='msg-header'>
          <div className='msg-header-image'>
            <img src="/img/hello.PNG" />
          </div>
          <div className='msg-header-name'>
            문재인
          </div>
        </div>
        <div className='msg-section'>
          <div className='msg-section-header'>
            <div className='msg-section-image'>
              <img src='/img/hello.PNG' />
            </div>
            <div style={{paddingTop:'10px',fontSize:'20px',fontWeight:'bold'}}>
              문재인
            </div>
            <div style={{fontSize:'14px',color:'#777'}}>
              lsssss
            </div>
            <div>
              <button style={{border:'none', borderRadius:'8px', padding:'5px 13px', marginTop:'15px', fontSize:'14px', fontWeight:'bold'}}>프로필 보기</button>
            </div>
          </div>
          <div className='message-container' ref={messageContainerRef}>
            <div className='message-section-date'>
              2024년 4월 8일 금요일
            </div>
            {numbers.map((number, index) => (
              <div key={index} className='message-tag-l'>
                <div className="message left">
                  Left Message
                </div>
                <span className='message-date-l'>오전 10:43</span>
              </div>
              ))}
              <div className='message-tag-r'>
                <span className='message-date-r'>오전 10:43</span>
                <div className="message right">Right Message</div>
              </div>
              <div className='message-tag-l'>
                <div className="message left">Another Left Message</div>
                <span className='message-date-l'>오전 10:43</span>
              </div>
          </div>
            <div className='message-send'>
              <input type='text' className='message-input' placeholder='메시지 입력...' />
              <button className='message-btn'>보내기</button>
            </div>
        </div>
    </div>
  );
};

export default Message;