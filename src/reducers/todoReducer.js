import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from '../actions/types';

import data from '../data.json';

const INITIAL_STATE = {
  todos: { ...data.todos },
  allIds: [...data.allIds]
}

let id;

export const todoReducer = (state = INITIAL_STATE, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case ADD_TODO:
      id = action.payload.id;
      return {
        todos: { ...stateCopy.todos, [id]: action.payload.text },
        allIds: [...stateCopy.allIds, id]
      }

    case REMOVE_TODO:
      id = action.payload.id
      const removedState = Object.keys(stateCopy.todos)
        .filter(key => key !== id)
        .reduce((obj, key) => {
          return {
            ...obj,
            [key]: stateCopy.todos[key]
          }
        }, {})

      return {
        todos: { ...removedState },
        allIds: [...stateCopy.allIds.filter(todoId => todoId !== id)]
      }

    case EDIT_TODO:
      for (let key in stateCopy.todos) {
        if (key === action.payload.id) {
          stateCopy.todos[key].edit = true || !stateCopy.todos[id].edit
        } 
        else {
          stateCopy.todos[key].edit = false || !stateCopy.todos[id].edit 
        }
      }
      return {
        todos: {...stateCopy.todos},
        allIds: [...stateCopy.allIds]
      }



    default:
      return { ...stateCopy }
  }
}