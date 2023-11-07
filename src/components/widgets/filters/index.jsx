import { useContext } from "react";
import { GetFilteredTodosAPI } from "@/api/api";
import { TodosContext } from "@/context/todo-context";
import { Select } from "@/components/base"; 

const Filters = () => {
  const { dispatch } = useContext(TodosContext);
  const handleChange = (e) => {
    GetFilteredTodosAPI(dispatch ,e.target.value);
  };
  return (
    <Select defaultValue="All" onChange={handleChange}>
      <option value="">All</option>
      <option value="completed=true">Done</option>
      <option value="completed=false">Undone</option>
    </Select>
  );
};

export default Filters;
