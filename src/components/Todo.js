import React, { useState, useEffect } from 'react';

export default function Todo({ todo, todoId, removeTodo }) {

  const handleClick = (e) => {
    removeTodo(todoId);
  }

  return (
    <li className="card">
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <button className="btn btn-danger" onClick={handleClick}>Remove Todo</button>
    </li>
  )
}