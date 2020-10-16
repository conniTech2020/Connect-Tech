import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Address should be replaced with FQDN of application and taken from ENV
    const domain = process.env.REACT_APP_DOMAIN;
    const http = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    fetch(`${http}://${domain}/users`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      }).catch((err) => console.log(err));
  }, []);

  

  return (
    <div className="App">
      <h1>hello word tom is update now</h1>

    </div>
  );
}
export default App;
