import React, { useState, useEffect } from 'react';
import Post from '../components/Menu';
import './Home.css'; // 프로필 페이지 스타일 import
import { FaRegHeart, FaRegComment, FaHeart } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    async function fetchUserList() {
      try {
        const response = await fetch(`http://localhost:4000/userList.dox?userId=user1`);
        const jsonData = await response.json();
        setUserList(jsonData);
      } catch (error) {
        console.error("에러!");
      }
    }
    fetchUserList();
  }, []);

  const [list, setList] = useState([
    { id: 1, src: '/img/hello.PNG', content: '첫 번째 게시물입니다.', isLiked: false },
    { id: 2, src: '/img/hello1.PNG', content: '두 번째 게시물입니다.', isLiked: false },
    { id: 3, src: '/img/hello6.PNG', content: '세 번째 게시물입니다.', isLiked: false },
    { id: 4, src: '/img/hello2.PNG', content: '두 번째 게시물입니다.', isLiked: false },
    { id: 5, src: '/img/hello4.PNG', content: '세 번째 게시물입니다.', isLiked: false },
    { id: 6, src: '/img/hello5.PNG', content: '세 번째 게시물입니다.', isLiked: false },
    { id: 7, src: '/img/hello3.PNG', content: '세 번째 게시물입니다.', isLiked: false },
  ]);

  const handleLikeClick = (id) => {
    setList(prevList => prevList.map(item => {
      if (item.id === id) {
        return { ...item, isLiked: !item.isLiked };
      }
      return item;
    }));
  };

  const [comment, setComment] = useState('');

  // input 값이 변경될 때 호출되는 함수
  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="home-container">
      <Navbar />
      {list.map((item) => (
      <div key={item.id} className="home">
        <div className="home-header">
          <div className="home-image">
            <img style={{ cursor: 'pointer' }} src="/img/hello.PNG" alt="프로필 이미지" />
          </div>
          <div className="home-info">
            <span>lsssss</span>
            <span style={{ color: '#888' }}> ㆍ</span>
            <span style={{ color: '#888', fontWeight: 'normal', marginLeft: '-1px' }}>3일</span>
          </div>
        </div>
        <div className="home-posts">
          <img src={item.src} alt='게시글 이미지' />
          <div className='home-posts-icon'>
            <span style={{ cursor: 'pointer', marginRight: '12px' }} onClick={() => handleLikeClick(item.id)}>
              {item.isLiked ? <FaHeart className="liked" /> : <FaRegHeart className='noLiked' />}
            </span>
            <span style={{ cursor: 'pointer', marginRight: '12px' }}>
              <FaRegComment />
            </span>
            <span style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
          </div>
          <div>
            <strong style={{ fontSize: '14px' }}>
              좋아요 10개
            </strong>
          </div>
          <span style={{ fontSize: '13px', fontWeight: 'bold', marginTop: '5px' }}>
            lsssss
          </span>
          <span style={{ fontSize: '13.5px', fontWeight: 'lighter', marginLeft: '5px' }}>Celebrating the new prada Re-Nylon Bag.</span>
          <div style={{ fontSize: '14px', color: '#888', margin: '4px 0 2px 0', cursor:'pointer' }}>
            댓글 10개 모두 보기
          </div>
          <div style={{ width: '468px', borderBottom:'1px solid #ddd', paddingBottom:'15px' }}>
            <input
              className='commentInput'
              type='text'
              placeholder='댓글 달기...'
              value={comment} // input 요소의 값
              onChange={handleInputChange} // input 값이 변경될 때 호출되는 함수
            />
            {/* 게시 버튼 */}
            {comment.trim() ? ( // input 값이 비어있지 않으면
              <strong style={{ float: 'right', fontSize: '13px', color: 'rgb(66 149 246)', cursor: 'pointer' }}>게시</strong>
            ) : (
              // input 값이 비어있으면 strong 태그 숨기기
              null
            )}
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Home;