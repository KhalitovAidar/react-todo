import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import styles from './TodosActions.module.css';
import Button from '../UI/Button';

const TodosActions = () => {
  return (
    <>
      <Button title="Refresh Todos">
        <RiDeleteBin2Line />
      </Button>
      <Button title="Clear Complited Todos">
        <RiRefreshLine />
      </Button>
    </>
  );
};

export default TodosActions;
