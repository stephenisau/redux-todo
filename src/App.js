import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Routes from "./routes";

// import NewTodoForm from './components/NewTodoForm';
import NewTodoFormContainer from './containers/NewTodoFormContainer';

import './App.css';

function App(props) {
  console.log(props);
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="container">
          <Routes />
        </div>
        <div className="open-search">
          <Link to="/new-todo"><button>Search</button></Link>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
