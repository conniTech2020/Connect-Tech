import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/conteiner/NavBar";
import Home from "./components/conteiner/Home";
import Lecture from "./components/userComponets/userComponents";
import StudentProfile from "./components/userComponets/StudentProfile";
import About from "./components/conteiner/About";
import Login from "./components/conteiner/LogIn";
import Register from "./components/conteiner/Register";
import axios from "axios";
import './App.css';

function App() {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   // Address should be replaced with FQDN of application and taken from ENV
  //   const domain = process.env.REACT_APP_DOMAIN;
  //   const http = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  //   fetch(`${http}://${domain}/users`, {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     }
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //     }).catch((err) => console.log(err));
  // }, []);

  //   const [user, setUser] = useState({
  //   token: null,
  //   user: null,
  // });
  // const checkLogin = async () => {
  //   let token = localStorage.getItem("authToken");
  //   const tokenRes = await axios.post("/api/users/tokenIsValid", null, {
  //     headers: { "x-auth-token": token },
  //   });
  //   if (tokenRes.data) {
  //     setUser({
  //       token: tokenRes.data.token,
  //       user: tokenRes.data.user,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   checkLogin();
  // }, []);

  return (
    <div className="App">
      <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/home" component={Home} />
        <section className="container">
          <Switch>
            <Route exact path="/studentProfile" component={StudentProfile} />
            <Route exact path="/userComponents" component={Lecture} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </section>
      </Fragment>
    </Router>
    </div>
  );
}
export default App;
