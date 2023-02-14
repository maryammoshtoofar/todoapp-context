import { BsTrashFill, BsCheckLg } from "react-icons/bs";
import { TodoItem, TodoTitle, ActionButton } from "./styled";
import { theme } from "../../styles/Theme";
import { TodosContext } from "../../context/todo-context";
import { useContext, useEffect } from "react";
import { ToggleTodoAPI, DeleteTodoAPI } from "../../api/api";
import { ModalContext } from "../../context/modal-context";

const Todo = (props) => {
  const { title, completed, id } = props;
  const { primary, secondary, third } = theme.colors;
  const { dispatch } = useContext(TodosContext);
  const { showModal, setShowModal } = useContext(ModalContext);

  const handleToggleCompleted = () => {
    ToggleTodoAPI(dispatch, props);
  };
  return (
    <TodoItem>
      <TodoTitle completed={completed}>{title}</TodoTitle>
      <ActionButton
        bg={completed ? third : secondary}
        onClick={handleToggleCompleted}
      >
        <BsCheckLg />
      </ActionButton>
      <ActionButton
        bg={primary}
        onClick={() => setShowModal({ isOpen: true, id: id })}
      >
        <BsTrashFill />
      </ActionButton>
    </TodoItem>
  );
};

export default Todo;
