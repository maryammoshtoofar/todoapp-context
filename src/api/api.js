import axios from "axios";
import { BASE_URL } from "../config/constants";
import {
  addTodo,
  readAllTodos,
  removeTodo,
  toggleTodo,
} from "../store/actions/actions";
import { generateTodoURL, generateParamsURL } from "../utils/utils";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export const GetAllTodosAPI = (dispatch) => {
  axios.get(BASE_URL).then((res) => dispatch(readAllTodos(res.data)));
};

export const GetFilteredTodosAPI = (dispatch, params) => {
  axios
    .get(generateParamsURL(params))
    .then((res) => dispatch(readAllTodos(res.data)));
};

export const AddTodoAPI = (dispatch, inputValue) => {
  const newTodo = {
    id: uuidv4(),
    title: inputValue,
    completed: false,
  };
  axios
    .post(BASE_URL, newTodo)
    .then(() => {
      dispatch(addTodo(newTodo));
      toast.success("Task Added Successfully!");
    })
    .catch((e) => toast.error(`Error: ${e.message}, Could not add task!`));
};

export const ToggleTodoAPI = (dispatch, todo) => {
  const editedTodo = {
    ...todo,
    completed: !todo.completed,
  };
  axios.put(generateTodoURL(todo.id), editedTodo).then(() => {
    dispatch(toggleTodo(editedTodo.id));
    editedTodo.completed
      ? toast.success("Task Completed!")
      : toast.info("Task Not Complete!");
  });
};

export const DeleteTodoAPI = (dispatch, id) => {
  axios
    .delete(generateTodoURL(id))
    .then(() => {
      dispatch(removeTodo(id));
      toast.info("Task Deleted");
    })
    .catch((e) => toast.error(`Error: ${e.message}, Could not delete task!`));
};
