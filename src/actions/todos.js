import { ADD_TODO } from './types';

let todoId = 0;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      text: text,
      id: todoId++
    }
  }
}