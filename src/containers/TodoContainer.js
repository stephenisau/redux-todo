import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const getIds = (todos) => {
  console.log('Getting ids');
  return t
}


const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    ids: state.allIds
  }
}

export default connect(mapStateToProps)(TodoList);