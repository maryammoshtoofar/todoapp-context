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

export const editTodo = (todoId, newTodo) => {
  return {
    type: EDITTODO,
    todoId,
    payload: newTodo,
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLETODO,
    payload: todoId,
  };
};

export const toggleEdit = (todoId) => {
  return {
    type: TOGGLEEDIT,
    payload: todoId,
  };
};
