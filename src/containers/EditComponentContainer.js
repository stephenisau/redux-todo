import { connect } from 'react-redux';

import { editTodo } from '../actions/todos';

import EditTodo from '../components/EditTodo';

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.todoId;
  return {
    todo: state.todoReducer.todos[id]
  }
}


export default connect(
  mapStateToProps,
  { editTodo }
  )(EditTodo)