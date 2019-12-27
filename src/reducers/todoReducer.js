import { ADD_TODO } from '../actions/types';

import data from '../data.json';

const INITIAL_STATE = {
  todos: data.todos
}

let id;

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      id = action.payload.id;
      return {
        ...state, [id]: { ...action.payload }
      }

    default:
      return state
  }
}