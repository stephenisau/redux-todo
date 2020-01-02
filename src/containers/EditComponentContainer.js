import { connect } from 'react-redux';

import { editTodo, updateTodo } from '../actions/todos';

import EditTodo from '../components/EditTodo';

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.todoId;
  return {
    todo: state.todoReducer.todos[id]
  }
}


export default connect(
  mapStateToProps,
  { editTodo, updateTodo }
  )(EditTodo)