import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

import { removeTodo } from '../actions/todos';

const getIds = (todos) => {
  return todos
}


const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todoReducer.todos,
    ids: [...state.todoReducer.allIds]
  }
}

export default connect(
  mapStateToProps,
  { removeTodo }
  )(TodoList);