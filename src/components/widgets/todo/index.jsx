import { BsTrashFill, BsCheckLg } from "react-icons/bs";
import { TodoContainer, TodoTitle, ActionButton } from "@/components/base";
import { TodosContext } from "@/context/todo-context";
import { useContext } from "react";
import { ToggleTodoAPI } from "@/api/api";
import { ModalContext } from "@/context/modal-context";

const Todo = (props) => {
  const { title, completed, id } = props;
  const { dispatch } = useContext(TodosContext);
  const { showModal, setShowModal } = useContext(ModalContext);

  const handleToggleCompleted = () => {
    ToggleTodoAPI(dispatch, props);
  };
  return (
    <TodoContainer>
      <TodoTitle completed={completed}>{title}</TodoTitle>
      <ActionButton
        name="check"
        onClick={handleToggleCompleted}
        completed={completed}
      >
        <BsCheckLg />
      </ActionButton>
      <ActionButton
        name="delete"
        onClick={() => setShowModal({ isOpen: true, id: id })}
      >
        <BsTrashFill />
      </ActionButton>
    </TodoContainer>
  );
};

export default Todo;
