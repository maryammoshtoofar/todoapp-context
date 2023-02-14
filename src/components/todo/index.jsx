import { BsTrashFill, BsCheckLg } from "react-icons/bs";
import { TodoItem, TodoTitle, ActionButton } from "./styled";
import { theme } from "../../styles/Theme";
import { TodosContext } from "../../context/todo-context";
import { useContext } from "react";
import { ToggleTodoAPI } from "../../api/axios";

const Todo = (props) => {
  const { title, completed, id } = props;
  const { primary, secondary, third } = theme.colors;
  const { state, dispatch } = useContext(TodosContext);

  const handleToggleCompleted = () => {
    ToggleTodoAPI(dispatch,props);
  };
  return (
    <TodoItem>
      <TodoTitle completed={completed}>{title}</TodoTitle>
      <ActionButton
        bg={completed ? third : secondary}
        onClick={() => handleToggleCompleted(id)}
      >
        <BsCheckLg />
      </ActionButton>
      <ActionButton bg={primary}>
        <BsTrashFill />
      </ActionButton>
    </TodoItem>
  );
};

export default Todo;
