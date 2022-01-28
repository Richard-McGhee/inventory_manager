import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import ItemForm from './components/ItemForm'
import CompanyForm from './components/CompanyForm'
import UserForm from './components/UserForm'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="navLinks">Home</Link>
        <Link to="/addItem" className="navLinks">+</Link>
        <Link to="/companyInventory" className="navLinks">Inventory</Link>
        <Link to="/login" className="navLinks">Login</Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/addItem" component={ItemForm} />
      <Route path="/companyInventory" component={CompanyForm} />
      <Route path="/login" component={UserForm} />
    </div>
  )
}

export default App
