import { useContext } from "react";
import { AddContainer, Input, AddButton } from "./styled";
import { BsPlusLg } from "react-icons/bs";
import useInputState from "../../hooks/useInputState";
import { TodosContext } from "../../context/todo-context";
import { AddTodoAPI } from "../../api/axios";
const AddTodo = () => {
  const [inputValue, handleChange, reset] = useInputState("");
  const { dispatch } = useContext(TodosContext);
  const handleClick = () => {
    AddTodoAPI(dispatch, inputValue);
  };

  return (
    <AddContainer>
      <Input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Add Todo Here..."
      />
      <AddButton onClick={handleClick}>
        <BsPlusLg size={"1.3rem"} />
      </AddButton>
    </AddContainer>
  );
};

export default AddTodo;
