import { useContext } from "react";
import { AddContainer, Input, AddButton } from "./styled";
import { BsPlusLg } from "react-icons/bs";
import useInputState from "../../hooks/useInputState";
import { TodosContext } from "../../context/todo-context";
import { AddTodoAPI } from "../../api/api";
const AddTodo = () => {
  const [inputValue, handleChange, reset] = useInputState("");
  const { dispatch } = useContext(TodosContext);
  const handleClick = () => {
    inputValue
      ? AddTodoAPI(dispatch, inputValue)
      : console.log("Please Add a Task first");
    reset();
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
