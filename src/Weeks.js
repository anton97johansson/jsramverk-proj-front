import React, { useEffect, useState } from 'react';
import Week from './Week';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const Weeks = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch('https://me-api.antonscript.me/reports/weeks')
      .then(res => res.json())
      .then(res => setData(res));
    }, []);
  let { path, url } = useRouteMatch();
  const WeekList = () => (
      data.map(name => (
        <li key={name}>
           <Link to={`${url}/${name}`}>Week {name}</Link>
        </li>
    ))
  );
  return (
    <div>
      <h2>Weeks</h2>
      <ul>
          <WeekList />
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
  )
}

export default Weeks
// <li>
//   <Link to={`${url}/1`}>Week 1</Link>
// </li>