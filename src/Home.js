import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState('');
    useEffect(() => {
    fetch('https://me-api.antonscript.me/')
      .then(res => res.json())
      .then(res => setData(res.data.msg));
    });
    return (
        <div className="content">
                <p>{data}</p>
        </div>
    )
}

export default Home