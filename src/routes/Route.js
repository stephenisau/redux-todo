import React, { useState, useEffect } from "react";
import { useParams, Switch, Route, Redirect } from "react-router-dom";
import TodoContainer from '../containers/TodoContainer';
import NewTodoFormContainer from '../containers/NewTodoFormContainer';
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <TodoContainer />
      </Route>
      <Route exact path="/new-todo">
        <NewTodoFormContainer />
      </Route>
    </Switch>
  )
}


export default Routes;