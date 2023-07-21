import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import styles from './TodosActions.module.css';
import Button from '../UI/Button';

const TodosActions = ({
  resetTodos,
  deleteComplited,
  countOfCompletedTodo,
}) => {
  return (
    <>
      <Button title="Refresh Todos" onClick={() => resetTodos()}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Complited Todos"
        onClick={() => deleteComplited()}
        disabled={!countOfCompletedTodo}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
};

export default TodosActions;
