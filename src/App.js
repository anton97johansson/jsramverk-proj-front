import React from 'react';
import './App.css';
import Title from './Title';
import Home from './Home';
import Reports from './Reports';
import Register from './Register';
import Login from './Login';
import NewReport from './New_report';
import Logout from './Logout';
import Chat from './Chat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// let token = sessionStorage.getItem("token") || null;

function App() {
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
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/new">New or replace existing reports</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/login">
            {sessionStorage.getItem("token") ? <Redirect to="/logout" /> : <Login />}
          </Route>
          <Route path="/logout">
            {sessionStorage.getItem("token") ? <Logout /> : <Redirect to="/login" />}
          </Route>
          <Route path="/new">
            {sessionStorage.getItem("token") ? <NewReport /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;