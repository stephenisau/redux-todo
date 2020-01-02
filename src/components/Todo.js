import React, { useState, useEffect } from 'react';

function Todo({ todo, todoId, removeTodo, editTodo }) {

  const handleDelete = (e) => {
    removeTodo(todoId);
  }

  const handleEdit = (e) => {
    editTodo(todoId)
  }


  return (
    <li className="card">
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <button className="btn btn-danger" onClick={handleDelete}>Remove Todo</button>
      <button className="btn btn-primary" onClick={handleEdit}>Edit Todo</button>
    </li>

  )
}

export default Todo;