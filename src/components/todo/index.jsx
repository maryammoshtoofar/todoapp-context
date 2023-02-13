import { BsTrashFill, BsCheckLg } from "react-icons/bs";
import { TodoItem, TodoTitle, ActionButton } from "./styled";
import { theme } from "../../styles/Theme";

const Todo = () => {
  return (
    <TodoItem>
      <TodoTitle>Task 1</TodoTitle>
      <ActionButton bg={theme.colors.secondary}>
        <BsCheckLg />
      </ActionButton>
      <ActionButton bg={theme.colors.primary}>
        <BsTrashFill />
      </ActionButton>
    </TodoItem>
  );
};

export default Todo;
