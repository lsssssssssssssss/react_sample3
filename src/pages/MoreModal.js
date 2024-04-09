import './MoreModal.css'
import React from 'react';
function MoreModal(props) {
    console.log("props.isOpen", props.isOpen);
    if (!props.isOpen) return null; /* props로 넘어온 값이 false때 아무것도 안보이기 */
   /* props로 넘어온 값이 true일때 아래 내용 출력 */
    return(
      <div className="more-modal-overlay">
        <div className="more-modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="more-modal-content-inner">
            <div className='more-btn-u'>계정 전환</div>
            <div className='more-btn-d'>로그아웃</div>
          </div>
        </div>
      </div>
    )
}
export default MoreModal;