import axios from "axios";
import { BASE_URL } from "../config/constants";
import { READTODOS, ADDTODO } from "../store/actions/action-types";

export const GetAllTodosAPI = (dispatch) => {
  axios
    .get(BASE_URL)
    .then((res) => dispatch({ type: READTODOS, payload: res.data }));
};

export const AddTodoAPI = async (dispatch, inputValue) => {
  
  const newTodo = {
    title: inputValue,
    completed: false,
  };
  axios
    .post(BASE_URL)
    .then((res) => dispatch({ type: READTODOS, payload: newTodo }));
};
