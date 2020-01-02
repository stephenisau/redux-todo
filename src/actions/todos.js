import { ADD_TODO, REMOVE_TODO, EDIT_TODO, UPDATE_TODO } from './types';

let todoId = 3;

/* Action to dispatch and remove a todo from our store */
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

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: {
      id: id
    }
  }
}

export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: {
      id: id,
      edit: true,
    }
  }
}

export const updateTodo = ({ id, title, description }) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id: id,
      title: title,
      description: description
    }
  }
}