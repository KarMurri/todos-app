import React from 'react';
import { MdAddCircleOutline } from "react-icons/md";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        console.log('click!');
        props.setOpenModal(true);
    }
    return(
        <div className="divButton">
            <button onClick={ onClickButton }>
                <MdAddCircleOutline />
            </button>
        </div>
    )
};

export { CreateTodoButton };