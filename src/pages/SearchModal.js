import './Modal.css'
import React from 'react';
function SearchModal(props) {
    console.log("props.isOpen", props.isOpen);
    if (!props.isOpen) return null; /* props로 넘어온 값이 false때 아무것도 안보이기 */
   /* props로 넘어온 값이 true일때 아래 내용 출력 */
    return(
      <div className="modal-overlay">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content-inner">
            {props.children} /* props로 보내준 내용 출력, 재활용 위해 호출 시 보내 줌 */
            <button className="modal-close-button" onClick={props.isClose}> /* props로 보내준 콜백함수. 클릭 시 false 변경 */
              닫기
            </button>
          </div>
        </div>
      </div>
    )
}
export default SearchModal;