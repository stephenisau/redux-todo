import { connect } from 'react-redux';

import NewTodoForm from '../components/NewTodoForm';

import { addTodo } from '../actions/todos';

export const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos.todos,
    allIds: [...state.todos.allIds]
  }
}

export default connect(
  null,
  { addTodo }
)(NewTodoForm);