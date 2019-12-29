import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

// Component Imports
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';


function TodoList(props) {


  /*
    Data in our store is normalized with id as key, todos as values.
    This code below is to extract the ID's from the store and make turn them into individual todos
    */
  const { todos, ids } = props;
  const todoList = ids.map(id => todos[id]);
  // const todoList = Object.keys(props.todos).map(id => {
  //   return todos[id];
  // });

  return (
    <React.Fragment>
      <div className="container">
        <ol>
          {todoList.map((todo, id) => (
            <Todo todo={todo} key={id} id={id} />
          ))}
        </ol>
      </div>
    </React.Fragment>
  )
}


export default TodoList;