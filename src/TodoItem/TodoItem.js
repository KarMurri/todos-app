import React from 'react';
import { MdSchedule,MdOutlineCheckCircleOutline,MdDelete } from "react-icons/md";
import './TodoItem.css';

function TodoItem(props) {
    let icon; let underLineClass = '';
    if(props.completed){
        icon = <MdOutlineCheckCircleOutline />
        underLineClass = 'underLineClass';
    }else{
        icon = <MdSchedule />;
    }

    return (
        <li className="list">
            <span className="spanIcon" onClick={props.onComplete}>
                {icon}  
            </span>
            <p className={underLineClass}>{props.text}</p>
            <span className="spanIcon" onClick={props.onDelete}>
                <MdDelete />
            </span>
        </li>
    );
}

export { TodoItem };