import { ADD_TODO } from '../actions/types';

import data from '../data.json';

const INITIAL_STATE = {
  todos: { ...data.todos },
  allIds: [...data.allIds]
}

let id;

export const todoReducer = (state = INITIAL_STATE, action) => {
  let stateCopy = { ...state }
  switch (action.type) {
    case ADD_TODO:
      id = action.payload.id;
      return {
        todos: {...stateCopy.todos, [id]: action.payload.text},
        allIds: [...stateCopy.allIds, id]
      }

    default:
      return { ...stateCopy }
  }
}