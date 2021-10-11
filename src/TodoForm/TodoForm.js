import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo,setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const addItem = (event) => {
        event.preventDefault();
        console.log('click save');
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={addItem}>
            <textarea 
                value={newTodoValue}
                placeholder="Agrega una nueva tarea"
                rows="4"
                cols="40"
                onChange={onChange}
            />
            <button 
            className="accept"
            type="submit"
            >
                Guardar
            </button>
        </form>
    )
}

export { TodoForm };