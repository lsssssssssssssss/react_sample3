import React, { useState, useEffect } from 'react';
import './Profile.css'; // 프로필 페이지 스타일 import
import { FaPlus } from 'react-icons/fa'; // 추가 아이콘 import
import { FaHeart, FaComment } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import Navbar from '../components/Navbar';
import ImageModal from './ImageModal';
import SearchModal from "../pages/SearchModal";

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
  }, []);

  const list = [
    { id: 'lsssss', src: '/img/hello.PNG', content: '첫 번째 게시물입니다.' },
    { id: 'lsssss', src: '/img/hello1.PNG', content: '두 번째 게시물입니다.' },
    { id: 'lsssss', src: '/img/hello2.PNG', content: '세 번째 게시물입니다.' },
    { id: 'lsssss', src: '/img/hello3.PNG', content: '두 번째 게시물입니다.' },
    { id: 'lsssss', src: '/img/hello4.PNG', content: '세 번째 게시물입니다.' },
    { id: 'lsssss', src: '/img/hello5.PNG', content: '세 번째 게시물입니다.' },
    { id: 'lsssss', src: '/img/hello6.PNG', content: '세 번째 게시물입니다.' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const [imgModals, setImgModals] = useState(Array(list.length).fill(false));

  const toggleImgModal = (index) => {
    const newModals = [...imgModals];
    newModals[index] = !newModals[index];
    setImgModals(newModals);
  };

  let [modal, setModal] = useState(false);

  const modalOpen = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="profile">
          <div className="profile-header">
            <div className="profile-image">
              <img style={{ cursor: 'pointer' }} src="/img/hello7.PNG" alt="프로필 이미지" />
            </div>
            <div className="profile-info">
              <strong>lsssss</strong>
              <button style={{ marginLeft: '25px' }}>프로필 편집</button>
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
              <p style={{ marginTop: '10px' }}><small style={{ fontWeight: 'bold' }}>홍길동</small></p>
              <p style={{ fontSize: '14px' }}>{userList.profile}</p>
            </div>
          </div>
          <div className="profile-posts">
            <div>
              <div style={{ width: '80px', height: '80px', border: '1px solid #ccc', borderRadius: '50%', backgroundColor: '#fff', color: '#bbb', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '-30px', marginLeft: '150px', cursor: 'pointer' }} onClick={modalOpen}>
                <FaPlus style={{ fontSize: '25px' }} />
              </div>
            </div>
            <hr />
            <div className="posts-list">
              {list.map((post, index) => (
                <div key={index} className='image-container' onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave} onClick={() => toggleImgModal(index)}>
                  <img className='bsImg' src={post.src} alt='게시글 이미지' />
                  <div className='icon-overlay'><FontAwesomeIcon icon={faClone} /></div>
                  {hoveredIndex === index && (
                    <div className="text-overlay">
                      <FaHeart style={{ fontSize: '18px' }} /><span style={{ fontWeight: 'bold', marginLeft: '3px', marginRight: '20px' }}> 186</span>
                      <FaComment style={{ fontSize: '18px' }} /><span style={{ fontWeight: 'bold', marginLeft: '3px' }}> 20</span>
                    </div>
                  )}
                  {imgModals[index] &&
                    <ImageModal id={post.id} src={post.src} isOpen={imgModals[index]} isClose={() => toggleImgModal(index)}>
                    </ImageModal>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {modal &&
        <SearchModal isOpen={modal} isClose={() => setModal(false)}>
        </SearchModal>
      }
    </>
  );
};

export default Profile;
