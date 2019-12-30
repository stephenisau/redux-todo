import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

// Component Imports
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';


function TodoList({ todos, ids, removeTodo }) {


  /*
    Data in our store is normalized with id as key, todos as values.
    This code below is to extract the ID's from the store and make turn them into individual todos
    */
  console.log(todos, ids, removeTodo)
  // const { todos, ids } = props;
  const todoList = Object.keys(todos).map(id => {
    return {...todos[id], id: id}
  });

  console.log("Todo list: ", todoList);

  return (
    <React.Fragment>
      <div className="container">
        <ol>
          {todoList.map((todo, id) => (
            <Todo todo={todo} key={id} todoId={todo.id} removeTodo={removeTodo} />
          ))}
        </ol>
      </div>
    </React.Fragment>
  )
}


export default TodoList;