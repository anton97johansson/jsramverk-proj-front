import React from 'react';
import Week1 from './Week1';
import {
  useParams,
} from "react-router-dom";

function Week() {
  let { weekId } = useParams();
  const components = {
    "1" : Week1
  };
  const TheWeek = components[weekId];
  return (
    <div>
      < TheWeek />
    </div>
  );
}

export default Week