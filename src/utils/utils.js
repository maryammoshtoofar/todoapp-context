import { toast } from "react-toastify";
import { BASE_URL } from "../config/constants";

export const generateTodoURL = (id) => {
  return `${BASE_URL}/${id}`;
};

export const generateParamsURL = (params) => {
  return `${BASE_URL}?${params}`;
};
