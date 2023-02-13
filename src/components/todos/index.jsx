import React from "react";
import Todo from "../todo";
import { TodosList } from "./styled";

const Todos = () => {
  return (
    <TodosList>
      <Todo />
      <Todo />
      <Todo />
    </TodosList>
  );
};

export default Todos;
