import { AddContainer, Input, AddButton } from "./styled";
import { BsPlusLg } from "react-icons/bs";
const AddTodo = () => {
  return (
    <AddContainer>
      <Input type="text" placeholder="Add Todo Here..." />
      <AddButton>
        <BsPlusLg size={"1.3rem"} />
      </AddButton>
    </AddContainer>
  );
};

export default AddTodo;
