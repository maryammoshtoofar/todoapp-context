import { useContext, useEffect } from "react";
import { TodosContext } from "../../context/todo-context";
import Todo from "../todo";
import { TodosList } from "./styled";
import { GetAllTodosAPI } from "../../api/axios";

const Todos = () => {
  const { state, dispatch } = useContext(TodosContext);

  useEffect(() => {
    GetAllTodosAPI(dispatch);
  }, []);

  return (
    <TodosList>
      {state.map((todo) => (
        <Todo key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </TodosList>
  );
};

export default Todos;
