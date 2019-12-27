import React, { useState, useEffect } from 'react';
import Todo from './Todo';

function TodoList(props) {


  /*
    Data in our store is normalized with id as key, todos as values.
    This code below is to extract the ID's from the store and make turn them into individual todos
    */
  const { todos } = props;

  const todoList = Object.keys(props.todos).map(id => {
    return todos[id];
  });

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