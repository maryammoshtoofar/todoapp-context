import { createContext, useReducer } from "react";
import { TodosReducer } from "../store/reducers/reducers";

export const TodosContext = createContext();

const TodosProvider = (props) => {
  const [state, dispatch] = useReducer(TodosReducer, []);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
