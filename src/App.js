import React, { useState, useEffect } from 'react';
import TodoContainer from './containers/TodoContainer';

// import NewTodoForm from './components/NewTodoForm';
import NewTodoFormContainer from './containers/NewTodoFormContainer';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <TodoContainer />
        <NewTodoFormContainer />
      </div>
    </React.Fragment>
  );
}

export default App;
