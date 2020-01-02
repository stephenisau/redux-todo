import { ADD_TODO, REMOVE_TODO, EDIT_TODO, UPDATE_TODO } from '../actions/types';

import data from '../data.json';

const INITIAL_STATE = {
  todos: { ...data.todos },
  allIds: [...data.allIds]
}


export const todoReducer = (state = INITIAL_STATE, action) => {
  let stateCopy = { ...state };
  
  switch (action.type) {
    case ADD_TODO:
      var id = action.payload.id;
      return {
        todos: { ...stateCopy.todos, [id]: action.payload.text },
        allIds: [...stateCopy.allIds, id]
      }

    case REMOVE_TODO:
      var id = action.payload.id
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
      let newState = { ...stateCopy }
      var id = action.payload.id;
      for (let key in newState.todos) {
        if (!newState.todos[key].hasOwnProperty('edit')) {
          newState.todos[key].edit = false
        }
      }
      for (let key in newState.todos) {
        if (key === action.payload.id) {
          newState.todos[key].edit = !newState.todos[id].edit
        }
      }
      return {
        todos: { ...newState.todos },
        allIds: [...newState.allIds]
      }


    case UPDATE_TODO:
      for (let key in stateCopy.todos) {
        if (key === action.payload.id) {
          stateCopy.todos[key].title = action.payload.title;
          stateCopy.todos[key].description = action.payload.description;
          stateCopy.todos[key].edit = false;
        } 
      }
      return {
        todos: { ...stateCopy.todos },
        allIds: [...stateCopy.allIds]
      }

    default:
      return { ...stateCopy }
  }
}