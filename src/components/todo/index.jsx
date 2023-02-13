import { BsTrashFill, BsCheckLg } from "react-icons/bs";
import { TodoItem, TodoTitle, ActionButton } from "./styled";
import { theme } from "../../styles/Theme";

const Todo = ({ title, completed }) => {
  return (
    <TodoItem>
      <TodoTitle completed={completed}>{title}</TodoTitle>
      <ActionButton
        bg={completed ? theme.colors.completed : theme.colors.secondary}
      >
        <BsCheckLg />
      </ActionButton>
      <ActionButton bg={theme.colors.primary}>
        <BsTrashFill />
      </ActionButton>
    </TodoItem>
  );
};

export default Todo;
