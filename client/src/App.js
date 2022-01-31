import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import ItemForm from "./components/ItemForm";
import CompanyForm from "./components/CompanyForm";
import UserLoginForm from "./components/UserLoginForm"
import UserRegisterForm from "./components/UserRegisterForm";
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
        <Link to="/companyInventory" className="navLinks">
          Inventory
        </Link>
        <Link to="/login" className="navLinks">
          Login
        </Link>
        <Link to="/register" className="navLinks">
          Register
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addItem" component={ItemForm} />
        <Route path="/companyInventory" component={CompanyForm} />
        <Route path="/login" component={UserLoginForm} />
        <Route path="/register" component={UserRegisterForm} />
      </Switch>
    </div>
  );
}

export default App;
