import React from 'react';
import { AppUI } from './AppUI';
import './App.css';
import { TodoProvider } from '../TodoContext/TodoContext';

// const defaultTodos = [
//   { text : 'Cortar cebolla', completed : true},
//   { text : 'Tomar curso de react', completed : false},
//   { text : 'Hacer la pizza', completed : false},
//   { text : 'Hacer la tarea de italiano', completed : false},
// ]

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
