import React from 'react';
import './TodoHeaderPrincipal.css';
import { MdOutlineList } from "react-icons/md";

function TodoHeaderPrincipal () {
    return(
        <div className="headerDiv">
            
            <h1 className="blink"><span className="headerSpan">
                <MdOutlineList />
            </span> Bienvenid@ a tu lista de tareas</h1>
        </div>
    );
}

export { TodoHeaderPrincipal };