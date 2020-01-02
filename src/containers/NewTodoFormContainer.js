import { connect } from 'react-redux';

import NewTodoForm from '../components/NewTodoForm';

import { addTodo } from '../actions/todos';

export const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todoReducer.todos,
    allIds: [...state.todoReducer.allIds]
  }
}

export default connect(
  null,
  { addTodo }
)(NewTodoForm);