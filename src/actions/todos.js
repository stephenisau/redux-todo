import { ADD_TODO } from './types';

let todoId = 3;

export const addTodo = (text) => {
  todoId++;
  return {
    type: ADD_TODO,
    payload: {
      text: text,
      id: todoId
    }
  }
}