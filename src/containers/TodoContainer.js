import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const getIds = (todos) => {
  console.log('Getting ids');
  return todos
}


const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos.todos,
  }
}

export default connect(mapStateToProps)(TodoList);