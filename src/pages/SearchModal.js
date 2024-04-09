import './Modal.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function SearchModal(props) {
    console.log("props.isOpen", props.isOpen);
    if (!props.isOpen) return null; /* props로 넘어온 값이 false때 아무것도 안보이기 */
   /* props로 넘어온 값이 true일때 아래 내용 출력 */
    return(
      <div className="modal-overlay" onClick={props.isClose}>
        <div className="modal-content" onClick={(e) => {
          e.stopPropagation();
          props.isClose();
          }}>
          <div className="modal-content-inner">
            새 게시물 만들기
            <div style={{borderTop:'1px solid #ddd', width:'747px', marginLeft:'-11px', marginTop:'8px'}}></div>
            <div className='modal-main'>
              <div>
                <img src='/img/helloimg.PNG'/>
              </div>
              <div style={{fontSize:'20px', fontWeight:'normal', paddingTop:'5px'}}>사진을 여기에 끌어다 놓으세요</div>
              <button className='modal-btn'>
                컴퓨터에서 선택
              </button>
            </div>
            <a className="modal-close-button" onClick={props.isClose}>
              <FontAwesomeIcon icon={faTimes} />
            </a>
          </div>
        </div>
      </div>
    )
}
export default SearchModal;