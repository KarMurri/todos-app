import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChanged = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <div className="searchInput">
            <input 
                placeholder="Search TODO task" 
                onChange={onSearchValueChanged} 
                value={searchValue}
            />
        </div>
    )
}

export { TodoSearch };