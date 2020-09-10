import * as actionType from "./actionType";

let nextTodoId = 0;

export const addTodo = (value) => {
  console.log(value);
  return {
    type: actionType.ADD_TODO,
    payload: {
      id: nextTodoId++,
      text: value,
    },
  };
};

export const setVisibilityFilter = () => {
  return {
    type: actionType.SET_VISIBILITY_FILTER,
  };
};

export const toggleTodo = () => {
  return {
    type: actionType.TOGGLE_TODO,
  };
};

export const visibilityFilter = {
  SHOW_ACTIVE: actionType.SHOW_ACTIVE,
  SHOW_ALL: actionType.SHOW_ALL,
  SHOW_COMPLETED: actionType.SHOW_COMPLETED,
};
