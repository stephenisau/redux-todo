import React, { useState, useEffect } from 'react';
import Todo from './Todo';

function TodoList(props) {
  debugger;
  return (
    <React.Fragment>
      <ul>
        {props.todos.map((todo, id) => (
          <Todo todo={todo} key={id} id={id} />
        ))}
      </ul>
    </React.Fragment>
  )
}


export default TodoList;