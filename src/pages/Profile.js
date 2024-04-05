import React, { useState, useEffect } from 'react';
import Post from '../components/Menu';
import './Profile.css'; // 프로필 페이지 스타일 import
import { FaPlus } from 'react-icons/fa'; // 추가 아이콘 import
import Navbar from '../components/Navbar';

const Profile = () => {
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
  ];

  return (
    <div className="container">
      <Navbar />
      <div className="profile">
        <div className="profile-header">
          <div className="profile-image">
            <img style={{cursor:'pointer'}} src="data:image/jpeg;base64,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" alt="프로필 이미지" />
          </div>
          <div className="profile-info">
            <strong>lsssss</strong>
            <button style={{marginLeft:'25px'}}>프로필 편집</button>
            <button>로그아웃</button>
            <div className="profile-stats">
              <div>
                <span>게시물<strong> 20</strong></span>
              </div>
              <div>
                <span>팔로워<strong> {userList.follower}</strong></span>
              </div>
              <div>
                <span>팔로잉<strong> {userList.following}</strong></span>
              </div>
            </div>
            <p style={{marginTop:'10px'}}><small style={{fontWeight:'bold'}}>홍길동</small></p>
            <p style={{fontSize:'14px'}}>{userList.profile}</p>
          </div>
        </div>
        <div className="profile-posts">
        <div>
            <div style={{ width: '80px', height: '80px', border:'1px solid #ccc', borderRadius: '50%', backgroundColor: '#fff', color: '#bbb', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'-30px', marginLeft:'150px', cursor:'pointer' }}>
              <FaPlus style={{ fontSize: '25px' }} />
            </div>
        </div>
          <hr />
          <div className="posts-list">
            {list.map(post => (
              <div key={post.id}>
                <img src={post.src} alt='게시글 이미지' />
              </div>
            ))}
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Profile;