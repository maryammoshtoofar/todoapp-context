import * as ACTIONTYPES from "../actions/action-types";

export const TodosReducer = (state, action) => {
  switch (action.type) {
    case ACTIONTYPES.READTODOS:
      return action.payload;
    case ACTIONTYPES.ADDTODO:
      return [...state, action.payload];
    case ACTIONTYPES.REMOVETODO:
      return state.filter((todo) => todo.id !== action.payload);
    case ACTIONTYPES.TOGGLETODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case ACTIONTYPES.TOGGLEEDIT:
      return state.map((todo) =>
        todo.id === action.todoId
          ? { ...todo, isEditing: !todo.isEditing }
          : todo
      );
    case ACTIONTYPES.EDITTODO:
      return state.map((todo) =>
        todo.id === action.todoId ? { ...todo, task: action.newTodo } : todo
      );
    default:
      return state;
  }
};
