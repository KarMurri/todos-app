import React from 'react';
import './TodoLoader.css';

function TodoLoader() {
    return (
        <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <span>Loading</span>
        </div>
    );
}

export { TodoLoader };