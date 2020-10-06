import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

import { removeTodo, editTodo } from '../actions/todos';


const mapStateToProps = (state, ownProps) => {
  return {
    todos: { ...state.todoReducer.todos },
    ids: [...state.todoReducer.allIds]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeTodo: (todoId) => dispatch(removeTodo(todoId)),
    editTodo: (todoId) => dispatch(editTodo(todoId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);