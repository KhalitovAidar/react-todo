import './App.css';
import { useState } from 'react';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import { v4 as uuidv4 } from 'uuid';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    const newMass = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplited: !todo.isComplited } : todo
    );

    setTodos(newMass);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodosActions />
      {todos.length === 0 ? (
        <h2>Todo list is empty </h2>
      ) : (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodo}
        />
      )}
    </div>
  );
}

export default App;
