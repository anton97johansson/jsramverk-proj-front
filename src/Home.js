import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState('');
    useEffect(() => {
    fetch('http://localhost:1337/')
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