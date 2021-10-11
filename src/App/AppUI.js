import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoHeaderPrincipal } from '../TodoHeaderPrincipal/TodoHeaderPrincipal';
import { TodoLoader } from '../TodoLoader/TodoLoader';
import { Modal } from '../Modal/Modal';
import { TodoForm }  from '../TodoForm/TodoForm'

function AppUI () {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoHeaderPrincipal />

            <TodoCounter />

            <TodoSearch />

            <TodoList>
                { error && 
                    <p className="firstTodoText">
                        Hubo un error, favor de intentarlo m&aacute;s tarde
                    </p>
                }
                
                { loading && <TodoLoader/> }

                { (!loading && !searchedTodos.length) && 
                    <p className="firstTodoText">¡Crea tu primer TODO!</p>
                }

                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={ () => completeTodo(todo.text) }
                        onDelete={ () => deleteTodo(todo.text) }
                    />
                    ))
                }
            </TodoList>

            {openModal && 
                (<Modal>
                    <TodoForm />
                </Modal>)
            }
      
            { !loading  &&
            <CreateTodoButton 
                setOpenModal={setOpenModal} 
            />
            }
        </React.Fragment>
    );
}

export { AppUI };