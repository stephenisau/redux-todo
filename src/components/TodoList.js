import React, { useState, useEffect } from 'react';

import EditComponentContainer from '../containers/EditComponentContainer';

// Component Imports
import Todo from './Todo';


function TodoList({ todos, ids, removeTodo, editTodo }) {

  /*
    Data in our store is normalized with id as key, todos as values.
    This code below is to extract the ID's from the store and make turn them into individual todos
    */
  const todoList = Object.keys(todos).map(id => {
    return { ...todos[id], id: id}
  });

  const toggleEdit = (todoId) => {
    /* This function toggles the edit for the selected todo */
    console.log('bye');
    editTodo(todoId);
    // return todoList.map(todo => todo.id === todoId ? { ...todo, edit: !todo.edit } : todo)
    console.log("hi");
  }
  console.log(todoList);

  return (
    <React.Fragment>
      <div className="container">
        <ol>
          {todoList.map((todo, id) => {
            return (todo.edit === true ? 
            <EditComponentContainer 
              todoId={todo.id} 
              key={id} /> : 
            <Todo 
              todo={todo} 
              key={id} 
              todoId={todo.id} 
              removeTodo={removeTodo} 
              editTodo={toggleEdit} />)
          })}
        </ol>
      </div>
    </React.Fragment>
  )
}


export default TodoList;