import React from 'react';
import Week from './Week';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function Weeks() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Weeks</h2>
      <ul>
        <li>
          <Link to={`${url}/1`}>Week 1</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a week.</h3>
        </Route>
        <Route path={`${path}/:weekId`}>
          <Week />
        </Route>
      </Switch>
    </div>
  );
}

export default Weeks