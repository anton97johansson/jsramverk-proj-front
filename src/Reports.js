import React from 'react';
import Weeks from './Weeks';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function Reports() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        <li>
          <Link to={`${url}/week`}>Week</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:reportid`}>
          <Weeks />
        </Route>
      </Switch>
    </div>
  );
}

export default Reports