import React, { useState, useEffect } from 'react';
import Post from '../components/Menu';
import './Profile.css'; // 프로필 페이지 스타일 import
import { FaPlus } from 'react-icons/fa'; // 추가 아이콘 import
import Navbar from '../components/Navbar';

const Explore = () => {
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
    },[]);
 
  const list = [
      {id: 1, src: '/img/hello.PNG', content: '첫 번째 게시물입니다.'},
      {id: 2, src: '/img/hello1.PNG', content: '두 번째 게시물입니다.'},
      {id: 3, src: '/img/hello2.PNG', content: '세 번째 게시물입니다.'},
      {id: 4, src: '/img/hello3.PNG', content: '두 번째 게시물입니다.'},
      {id: 5, src: '/img/hello4.PNG', content: '세 번째 게시물입니다.'},
      {id: 6, src: '/img/hello5.PNG', content: '세 번째 게시물입니다.'},
      {id: 7, src: '/img/hello6.PNG', content: '세 번째 게시물입니다.'},
      {id: 8, src: '/img/hello.PNG', content: '첫 번째 게시물입니다.'},
      {id: 9, src: '/img/hello1.PNG', content: '두 번째 게시물입니다.'},
      {id: 10, src: '/img/hello2.PNG', content: '세 번째 게시물입니다.'},
      {id: 11, src: '/img/hello3.PNG', content: '두 번째 게시물입니다.'},
      {id: 12, src: '/img/hello4.PNG', content: '세 번째 게시물입니다.'},
      {id: 13, src: '/img/hello5.PNG', content: '세 번째 게시물입니다.'},
      {id: 14, src: '/img/hello6.PNG', content: '세 번째 게시물입니다.'},
  ];

  return (
    <div className="container">
        <Navbar />
      <div className="profile" style={{marginTop:'5px'}}>
          <div className="posts-list">
            {list.map(post => (
              <div key={post.id}>
                <img src={post.src} alt='게시글 이미지' />
              </div>
            ))}
          </div>
      </div> 
    </div>
  );
};

export default Explore;