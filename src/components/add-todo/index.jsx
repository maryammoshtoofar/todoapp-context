import { useContext } from "react";
import { AddContainer, Input, AddButton } from "./styled";
import { BsPlusLg } from "react-icons/bs";
import useInputState from "../../hooks/useInputState";
import { TodosContext } from "../../context/todo-context";
import { AddTodoAPI } from "../../api/api";
import { toast } from "react-toastify";
const AddTodo = () => {
  const [inputValue, handleChange, reset] = useInputState("");
  const { dispatch } = useContext(TodosContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue
      ? AddTodoAPI(dispatch, inputValue)
      : toast.warn("Please Add a Task first");
    reset();
  };

  return (
    <AddContainer>
      <form onSubmit={handleSubmit}>
        <Input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Add Todo Here..."
        />
        <AddButton>
          <BsPlusLg size={"1.3rem"} />
        </AddButton>
      </form>
    </AddContainer>
  );
};

export default AddTodo;
