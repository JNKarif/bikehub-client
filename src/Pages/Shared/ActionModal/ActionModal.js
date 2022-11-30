import React from 'react';

const ActionModal = ({title, message, closeModal,successButtonName, successAction, modalData}) => {
    return (
        <div>
           {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="action-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
   
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label htmlFor="action-modal" onClick={()=>successAction(modalData)} className="btn">{successButtonName}</label>
      <button onClick={closeModal} type="" className='btn btn-error'>Cancel</button>
    </div>
  </div>

</div> 
        </div>
    );
};

export default ActionModal;