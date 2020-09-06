import React from 'react';
import './App.css';
import Title from './Title';
import Home from './Home';
import Reports from './Reports';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

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
            <Link to="/reports">Reports</Link>
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
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;