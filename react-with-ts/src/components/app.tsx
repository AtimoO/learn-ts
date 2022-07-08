import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import TodoItemPage from "../pages/todo-item-page";
import TodoPage from "../pages/todo-page";
import UserItemPage from "../pages/user-item-page";
import UserPage from "../pages/user-page";

function App() {

  return (
    <Router>
      <NavLink style={{margin: 10}} to={"/"}>Главная</NavLink>
      <NavLink style={{margin: 10}} to={"/users"}>Список пользователей</NavLink>
      <NavLink style={{margin: 10}} to={"/todos"}>Список дел</NavLink>
      <Switch>
        <Route path={"/users"} exact>
          <UserPage />
        </Route>
        <Route path={"/users/:id"}>
          <UserItemPage />
        </Route>
        <Route path={"/todos"} exact>
          <TodoPage />
        </Route>
        <Route path={"/todos/:id"}>
          <TodoItemPage />
        </Route>
        <Route path={"/"} exact>
          <h1>HOME PAGE</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
