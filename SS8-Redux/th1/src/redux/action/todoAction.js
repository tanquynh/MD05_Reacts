export const ADD_TODO = 'ADD_TODO';
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  payload: index,
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  payload: index,
});