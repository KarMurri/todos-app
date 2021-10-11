import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { MdClose } from "react-icons/md";
import { TodoContext } from '../TodoContext/TodoContext';

function Modal({ children }) {
    const { setOpenModal } = React.useContext(TodoContext);
    const closeModalButton = () => {
        setOpenModal(false);
    }

    return ReactDOM.createPortal(
        
        <div className="container">
            <div className="cookiesContent" id="cookiesPopup">
                <button className="close" onClick={closeModalButton}>
                    <MdClose />
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal };