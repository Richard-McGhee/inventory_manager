import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import ItemForm from "./components/ItemForm";
import CompanyForm from "./components/CompanyForm";
import UserLoginForm from "./components/UserLoginForm"
import UserRegisterForm from "./components/UserRegisterForm";
import Inventory from "./components/Inventory";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="navLinks">
          Home
        </Link>
        <Link to="/addItem" className="navLinks">
          +
        </Link>
        <Link to="/company" className="navLinks">
          Company
        </Link>
        <Link to="/login" className="navLinks">
          Login
        </Link>
        <Link to="/register" className="navLinks">
          Register
        </Link>
        <Link to="/inventory" className="navLinks">
          Inventory
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addItem" component={ItemForm} />
        <Route path="/company" component={CompanyForm} />
        <Route path="/login" component={UserLoginForm} />
        <Route path="/register" component={UserRegisterForm} />
        <Route path="/inventory" component={Inventory} />
      </Switch>
    </div>
  );
}

export default App;
