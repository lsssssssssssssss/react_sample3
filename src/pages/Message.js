import React, { useState, useEffect, useRef } from 'react';
import './Message.css';
import SubNavbar from '../components/SubNavbar';
import Msgbar from '../components/Msgbar';

const Message = () => {

  const [msgTab, setMsgTab] = useState(1);

  const handleMsgTab1 = () => {
    setMsgTab(1);
  };
  const handleMsgTab2 = () => {
    setMsgTab(2);
  };
  const handleMsgTab3 = () => {
    setMsgTab(3);
  };

  const numbers = [1, 2, 3];
  const numbers2 = [1, 2];

  const messageContainerRef = useRef(null); // 스크롤 컨테이너를 참조하기 위한 useRef 훅

  useEffect(() => {
    // 페이지가 로드될 때 스크롤 컨테이너를 맨 아래로 스크롤
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [msgTab]); // 빈 배열을 두번째 인자로 넣어 페이지가 처음 로드될 때만 실행되도록 함

  return (
    <>
      <SubNavbar />
      <Msgbar handleMsgTab1={handleMsgTab1} handleMsgTab2={handleMsgTab2} handleMsgTab3={handleMsgTab3} msgTab={msgTab} />
      {msgTab == 1 &&
        <div className='msg-container'>
          <div className='msg-header'>
            <div className='msg-header-image'>
              <img src="/img/hello.PNG" />
            </div>
            <div className='msg-header-name'>
              홍길동
            </div>
          </div>
          <div className='msg-section'>
            <div className='msg-section-header'>
              <div className='msg-section-image'>
                <img src='/img/hello.PNG' />
              </div>
              <div style={{ paddingTop: '10px', fontSize: '20px', fontWeight: 'bold' }}>
                홍길동
              </div>
              <div style={{ fontSize: '14px', color: '#777' }}>
                lsssss
              </div>
              <div>
                <button style={{ border: 'none', borderRadius: '8px', padding: '5px 13px', marginTop: '15px', fontSize: '14px', fontWeight: 'bold' }}>프로필 보기</button>
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
                  <span className='message-date-l'>오전 9:33</span>
                </div>
              ))}
              {numbers2.map((number, index) => (
                <div key={index} className='message-tag-r'>
                  <span className='message-date-r'>오전 10:43</span>
                  <div className="message right">Right Message</div>
                </div>
              ))}
              <div className='message-tag-l'>
                <div className="message left">Left Message</div>
                <span className='message-date-l'>오전 11:13</span>
              </div>
              {numbers.map((number, index) => (
                <div key={index} className='message-tag-l'>
                  <div className="message left">
                    Left Message
                  </div>
                  <span className='message-date-l'>오전 11:23</span>
                </div>
              ))}
              {numbers2.map((number, index) => (
                <div key={index} className='message-tag-r'>
                  <span className='message-date-r'>오후 12:05</span>
                  <div className="message right">Right Message</div>
                </div>
              ))}
              <div className='message-tag-l'>
                <div className="message left">Left Message</div>
                <span className='message-date-l'>오후 01:44</span>
              </div>
              {numbers.map((number, index) => (
                <div key={index} className='message-tag-l'>
                  <div className="message left">
                    Left Message
                  </div>
                  <span className='message-date-l'>오후 01:45</span>
                </div>
              ))}
              {numbers2.map((number, index) => (
                <div key={index} className='message-tag-r'>
                  <span className='message-date-r'>오후 02:03</span>
                  <div className="message right">Right Message</div>
                </div>
              ))}
              <div className='message-tag-l'>
                <div className="message left">Left Message</div>
                <span className='message-date-l'>오후 03:55</span>
              </div>
            </div>
            <div className='message-send'>
              <input type='text' className='message-input' placeholder='메시지 입력...' />
              <button className='message-btn'>보내기</button>
            </div>
          </div>
        </div>
      }
      {msgTab == 2 &&
        <div className='msg-container'>
          <div className='msg-header'>
            <div className='msg-header-image'>
              <img src="/img/hello2.PNG" />
            </div>
            <div className='msg-header-name'>
              유재석
            </div>
          </div>
          <div className='msg-section'>
            <div className='msg-section-header'>
              <div className='msg-section-image'>
                <img src='/img/hello2.PNG' />
              </div>
              <div style={{ paddingTop: '10px', fontSize: '20px', fontWeight: 'bold' }}>
                유재석
              </div>
              <div style={{ fontSize: '14px', color: '#777' }}>
                helloworld
              </div>
              <div>
                <button style={{ border: 'none', borderRadius: '8px', padding: '5px 13px', marginTop: '15px', fontSize: '14px', fontWeight: 'bold' }}>프로필 보기</button>
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
                  <span className='message-date-l'>오전 9:33</span>
                </div>
              ))}
              {numbers2.map((number, index) => (
                <div key={index} className='message-tag-r'>
                  <span className='message-date-r'>오전 10:43</span>
                  <div className="message right">Right Message</div>
                </div>
              ))}
              <div className='message-tag-l'>
                <div className="message left">Left Message</div>
                <span className='message-date-l'>오전 11:13</span>
              </div>
              {numbers.map((number, index) => (
                <div key={index} className='message-tag-l'>
                  <div className="message left">
                    Left Message
                  </div>
                  <span className='message-date-l'>오전 11:23</span>
                </div>
              ))}
              {numbers2.map((number, index) => (
                <div key={index} className='message-tag-r'>
                  <span className='message-date-r'>오후 12:05</span>
                  <div className="message right">Right Message</div>
                </div>
              ))}
              <div className='message-tag-l'>
                <div className="message left">Left Message</div>
                <span className='message-date-l'>오후 01:44</span>
              </div>
              {numbers.map((number, index) => (
                <div key={index} className='message-tag-l'>
                  <div className="message left">
                    Left Message
                  </div>
                  <span className='message-date-l'>오후 01:45</span>
                </div>
              ))}
              {numbers2.map((number, index) => (
                <div key={index} className='message-tag-r'>
                  <span className='message-date-r'>오후 02:03</span>
                  <div className="message right">Right Message</div>
                </div>
              ))}
              {numbers2.map((number, index) => (
                <div key={index} className='message-tag-r'>
                  <span className='message-date-r'>오후 02:03</span>
                  <div className="message right">Right Message</div>
                </div>
              ))}
              {numbers2.map((number, index) => (
                <div key={index} className='message-tag-r'>
                  <span className='message-date-r'>오후 02:03</span>
                  <div className="message right">Right Message</div>
                </div>
              ))}
              {numbers2.map((number, index) => (
                <div key={index} className='message-tag-r'>
                  <span className='message-date-r'>오후 02:03</span>
                  <div className="message right">Right Message</div>
                </div>
              ))}
              <div className='message-tag-l'>
                <div className="message left">Left Message</div>
                <span className='message-date-l'>오후 03:55</span>
              </div>
            </div>
            <div className='message-send'>
              <input type='text' className='message-input' placeholder='메시지 입력...' />
              <button className='message-btn'>보내기</button>
            </div>
          </div>
        </div>
      }
      {msgTab == 3 &&
        <div className='msg-container'>
          <div className='msg-header'>
            <div className='msg-header-image'>
              <img src="/img/hello7.PNG" />
            </div>
            <div className='msg-header-name'>
              신예은
            </div>
          </div>
          <div className='msg-section'>
            <div className='msg-section-header'>
              <div className='msg-section-image'>
                <img src='/img/hello7.PNG' />
              </div>
              <div style={{ paddingTop: '10px', fontSize: '20px', fontWeight: 'bold' }}>
                신예은
              </div>
              <div style={{ fontSize: '14px', color: '#777' }}>
                shinyeeun
              </div>
              <div>
                <button style={{ border: 'none', borderRadius: '8px', padding: '5px 13px', marginTop: '15px', fontSize: '14px', fontWeight: 'bold' }}>프로필 보기</button>
              </div>
            </div>
            <div className='message-container' ref={messageContainerRef}>
              <div className='message-section-date'>
                2024년 4월 8일 금요일
              </div>
              {numbers2.map((number, index) => (
                <div key={index} className='message-tag-l'>
                  <div className="message left">
                    Left Message
                  </div>
                  <span className='message-date-l'>오전 9:33</span>
                </div>
              ))}
              {numbers.map((number, index) => (
                <div key={index} className='message-tag-r'>
                  <span className='message-date-r'>오전 10:43</span>
                  <div className="message right">Right Message</div>
                </div>
              ))}
              <div className='message-tag-l'>
                <div className="message left">Left Message</div>
                <span className='message-date-l'>오전 11:13</span>
              </div>
              {numbers2.map((number, index) => (
                <div key={index} className='message-tag-l'>
                  <div className="message left">
                    Left Message
                  </div>
                  <span className='message-date-l'>오전 11:23</span>
                </div>
              ))}
              {numbers.map((number, index) => (
                <div key={index} className='message-tag-r'>
                  <span className='message-date-r'>오후 12:05</span>
                  <div className="message right">Right Message</div>
                </div>
              ))}
              <div className='message-tag-l'>
                <div className="message left">Left Message</div>
                <span className='message-date-l'>오후 01:44</span>
              </div>
              {numbers2.map((number, index) => (
                <div key={index} className='message-tag-l'>
                  <div className="message left">
                    Left Message
                  </div>
                  <span className='message-date-l'>오후 01:45</span>
                </div>
              ))}
              {numbers.map((number, index) => (
                <div key={index} className='message-tag-r'>
                  <span className='message-date-r'>오후 02:03</span>
                  <div className="message right">Right Message</div>
                </div>
              ))}
              <div className='message-tag-l'>
                <div className="message left">Left Message</div>
                <span className='message-date-l'>오후 03:55</span>
              </div>
            </div>
            <div className='message-send'>
              <input type='text' className='message-input' placeholder='메시지 입력...' />
              <button className='message-btn'>보내기</button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Message;