import { combineReducers } from 'redux';

import { todoReducer as todos } from './todoReducer';


export default combineReducers({
  todos
})