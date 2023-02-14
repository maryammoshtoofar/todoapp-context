// Todos Actions
import * as ACTIONTYPES from "./action-types";

const { READTODOS, ADDTODO, REMOVETODO, TOGGLEEDIT, TOGGLETODO } = ACTIONTYPES;
// Todos Actions
export const readAllTodos = (todos) => {
  return {
    type: READTODOS,
    payload: todos,
  };
};

export const addTodo = (newTodo) => {
  return {
    type: ADDTODO,
    payload: newTodo,
  };
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVETODO,
    payload: todoId,
  };
};


export const toggleTodo = (todoId) => {
  return {
    type: TOGGLETODO,
    payload: todoId,
  };
};