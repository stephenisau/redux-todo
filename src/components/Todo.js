import React, { useState, useEffect } from 'react';

export default function Todo({todo, id}) {

  return (
    <div className="card">
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  )
}