import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handlerSubmit = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={handlerSubmit}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
