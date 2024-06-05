import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import {AppContext} from './context'
const Modal = () => {
  const {openModal, isModalOpen}= useContext(AppContext);
  return (
    <div className={isModalOpen? 'modal-overlay show-modal': 'modal-overlay'}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className='close-modal-btn' onClick={openModal}><FaTimes/></button>
    </div>
    </div>
  )
}

export default Modal