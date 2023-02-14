import { toast } from "react-toastify";

export const generateTodoURL = (baseURL, id) => {
  return `${baseURL}/${id}`;
};

export const createToast = (message) => {
  toast(message);
};
