import axios from "axios";
import { BASE_URL } from "../config/constants";
import {
  addTodo,
  readAllTodos,
  removeTodo,
  toggleTodo,
} from "../store/actions/actions";
import { createToast, generateTodoURL } from "../utils/utils";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export const GetAllTodosAPI = (dispatch) => {
  axios.get(BASE_URL).then((res) => dispatch(readAllTodos(res.data)));
};

export const AddTodoAPI = (dispatch, inputValue) => {
  const newTodo = {
    id: uuidv4(),
    title: inputValue,
    completed: false,
  };
  axios.post(BASE_URL, newTodo).then((res) => dispatch(addTodo(newTodo)));
};

export const ToggleTodoAPI = (dispatch, todo) => {
  const editedTodo = {
    ...todo,
    completed: !todo.completed,
  };
  axios.put(generateTodoURL(BASE_URL, todo.id), editedTodo).then(() => {
    dispatch(toggleTodo(editedTodo.id));
    editedTodo.completed
      ? createToast("Task Completed!")
      : createToast("Task Not Complete!");
  });
};

export const DeleteTodoAPI = (dispatch, id) => {
  axios
    .delete(generateTodoURL(BASE_URL, id))
    .then(() => {
      dispatch(removeTodo(id));
      toast("Task Deleted");
    })
    .catch((e) => toast(`Something went wrong! Error: ${e.message}`));
};
