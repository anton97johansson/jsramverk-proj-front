import React, { useState } from 'react';
import './App.css';
import Title from './Title';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import Trade from './Trade';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// let token = sessionStorage.getItem("token") || null;

function App() {
    const [index, setIndex] = useState(0);
    function forceRerender() {
        setIndex(index + 1);
    }
  return (
    <div className="App">
      <Title />
      <Router>
      <div className="Navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/trade">Trade</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>

        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/trade">
            <Trade />
          </Route>
          <Route path="/login">
            {sessionStorage.getItem("token") ? <Redirect to="/logout" /> : <Login forceRerender={forceRerender} />}
          </Route>
          <Route path="/logout">
            {sessionStorage.getItem("token") ? <Logout forceRerender={forceRerender} /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;