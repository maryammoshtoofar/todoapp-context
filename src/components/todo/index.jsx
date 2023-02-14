import { BsTrashFill, BsCheckLg } from "react-icons/bs";
import { TodoItem, TodoTitle, ActionButton } from "./styled";
import { theme } from "../../styles/Theme";

const Todo = ({ title, completed, id }) => {
  const { primary, secondary, third } = theme.colors;
  return (
    <TodoItem>
      <TodoTitle completed={completed}>{title}</TodoTitle>
      <ActionButton bg={completed ? third : secondary}>
        <BsCheckLg />
      </ActionButton>
      <ActionButton bg={primary}>
        <BsTrashFill />
      </ActionButton>
    </TodoItem>
  );
};

export default Todo;
