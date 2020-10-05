import React, { useEffect, useState } from 'react';
import {
  useParams,
} from "react-router-dom";
const ReactMarkdown = require('react-markdown')

const Week = () => {
  let { weekId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
  fetch(`https://me-api.antonscript.me/reports/week/${weekId}`)
    .then(res => res.json())
    .then(res => setData(res.data));
  });
  return (
    <div className="report">
      <ReactMarkdown source={data} />
    </div>
  );
}

export default Week