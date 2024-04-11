import React, { useState } from 'react';
import './Profile.css'; // 프로필 페이지 스타일 import
import { FaHeart, FaComment } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import Navbar from '../components/Navbar';
import ImageModal from './ImageModal';

const Explore = () => {

  const list = [
      {id: 'lsssss', src: '/img/hello.PNG', content: '첫 번째 게시물입니다.'},
      {id: 'helloworld', src: '/img/hello1.PNG', content: '두 번째 게시물입니다.'},
      {id: 'shinyeeun', src: '/img/hi1.PNG', content: '세 번째 게시물입니다.'},
      {id: 'xxxibgdrgn', src: '/img/hi6.PNG', content: '두 번째 게시물입니다.'},
      {id: 'dslslsl', src: '/img/hi2.PNG', content: '세 번째 게시물입니다.'},
      {id: 'qqqqqqq', src: '/img/hello5.PNG', content: '세 번째 게시물입니다.'},
      {id: 'bnlsacsa', src: '/img/hi4.PNG', content: '세 번째 게시물입니다.'},
      {id: 'dqw_123', src: '/img/hello7.PNG', content: '첫 번째 게시물입니다.'},
      {id: 'hello1234', src: '/img/hello2.PNG', content: '두 번째 게시물입니다.'},
      {id: 'dkqw883', src: '/img/hello4.PNG', content: '세 번째 게시물입니다.'},
      {id: 'user001', src: '/img/hi3.PNG', content: '두 번째 게시물입니다.'},
      {id: 'hong123', src: '/img/hello6.PNG', content: '세 번째 게시물입니다.'},
      {id: 'test_123', src: '/img/hi5.PNG', content: '세 번째 게시물입니다.'},
      {id: 'h1odl_sss', src: '/img/hello3.PNG', content: '세 번째 게시물입니다.'},
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

  return (
    <div className="container">
        <Navbar />
      <div className="profile" style={{marginTop:'5px'}}>
          <div className="posts-list">
            {list.map((post,index) => (
                <div key={post.id} className='image-container' onMouseEnter={() => handleMouseEnter(index)} 
                onMouseLeave={handleMouseLeave} onClick={() => toggleImgModal(index)}>
                  <img className='bsImg' src={post.src} alt='게시글 이미지' />
                  <div className='icon-overlay'><FontAwesomeIcon icon={faClone} /></div>
                  {hoveredIndex === index && (
                    <div className="text-overlay">
                        <FaHeart style={{fontSize:'18px'}} /><span style={{fontWeight:'bold', marginLeft:'3px', marginRight:'20px'}}> 186</span>
                        <FaComment style={{fontSize:'18px'}} /><span style={{fontWeight:'bold', marginLeft:'3px'}}> 20</span>
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
  );
};

export default Explore;