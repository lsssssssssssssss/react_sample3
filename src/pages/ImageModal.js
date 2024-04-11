import './ImageModal.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BiDotsHorizontal } from 'react-icons/bi';
import { FaRegHeart, FaRegComment, FaHeart } from 'react-icons/fa';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

function ImageModal(props) {
  console.log("props.isOpen", props.isOpen);
  if (!props.isOpen) return null; /* props로 넘어온 값이 false때 아무것도 안보이기 */
  /* props로 넘어온 값이 true일때 아래 내용 출력 */
  return (
    <div className="i-modal-overlay" onClick={props.isClose}>
      <div className="i-modal-content">
        <div className="i-modal-content-inner" onClick={(e) => {
          e.stopPropagation();
        }}>
          <div className='i-modal-main'>
            <img src={props.src} />
            <div className='i-modal-save'>
              <div className='i-modal-cmt' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', width:'450px' }}>
                  <img src={props.src} />
                  <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{props.id}</span>
                </div>
                <a style={{ fontSize: '20px', fontWeight: 'normal', cursor:'pointer' }}><BiDotsHorizontal /></a>
              </div>
              <div className='i-modal-cmt' style={{ border: 'none' }}>
                <img src={props.src} />
                <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{props.id}</span>
                <span style={{ fontWeight: 'normal', fontSize: '14px', marginLeft: '4px' }}>Hello😉<span style={{ color: '#777', fontSize: '12px' }}> ㆍ1일</span></span>
              </div>
              <div className='i-modal-cmt' style={{ border: 'none' }}>
                <img src='/img/hello7.PNG' />
                <span style={{ fontSize: '15px', fontWeight: 'bold' }}>shinyeeun</span>
                <span style={{ fontWeight: 'normal', fontSize: '14px', marginLeft: '4px' }}>Good~!<span style={{ color: '#777', fontSize: '12px' }}> ㆍ1일</span></span>
              </div>
              <div className='i-modal-cmt' style={{ border: 'none' }}>
                <img src='/img/hihi.PNG' />
                <span style={{ fontSize: '15px', fontWeight: 'bold' }}>chaechae_1</span>
                <span style={{ fontWeight: 'normal', fontSize: '14px', marginLeft: '4px' }}>Hello World~~!!!💗💗💗<span style={{ color: '#777', fontSize: '12px' }}> ㆍ1일</span></span>
              </div>
              <div className='i-modal-bottom'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <span style={{ fontSize: '23px', marginRight: '13px' }}><FaRegHeart /></span>
                  <span style={{ fontSize: '23px', marginRight: '13px' }}><FaRegComment /></span>
                  <span style={{ fontSize: '23px', marginRight: '13px' }}><FontAwesomeIcon icon={faPaperPlane} /></span>
                </div>
                <div style={{ fontSize: '14px', marginTop: '10px' }}>좋아요 186개</div>
                <div style={{ fontSize: '12px', color: '#777', fontWeight: 'lighter', borderBottom: '1px solid #eee', width: '500px', textAlign: 'left', marginLeft: '-15px', paddingLeft: '15px', paddingBottom: '10px' }}>1일 전</div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <input className='i-modal-input' type='text' placeholder='댓글 달기...' />
                  <strong style={{ float: 'right', fontSize: '13px', color: 'rgb(66 149 246)', cursor: 'pointer' }}>게시</strong>
                </div>
              </div>
            </div>
          </div>
          <a className="i-modal-close-button" onClick={props.isClose}>
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </div>
      </div>
    </div>
  )
}
export default ImageModal;