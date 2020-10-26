import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Navbar from "./components/conteiner/NavBar";
import Home from "./components/conteiner/Home";
import Lecture from "./components/userComponets/LectureCards";
import StudentProfile from "./components/userComponets/StudentProfile";
import About from "./components/conteiner/About";
import Login from "./components/conteiner/LogIn";
import Register from "./components/conteiner/Register";
import Logout from "./components/conteiner/Logout";

import axios from "axios";
import './App.css';

function App() {
    const [user, setUser] = useState({
    token: null,
    user: null,
  });
  const checkLogin = async () => {
    let token = localStorage.getItem("authToken");
    const tokenRes = await axios.post("routs/users/tokenIsValid", null, {
      headers: { "x-auth-token": token },
    });
    if (tokenRes.data) {
      setUser({
        token: tokenRes.data.token,
        user: tokenRes.data.user,
      });
    } 
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="App">
      <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <section className="container">
          <Switch>
            <Route exact path="/studentProfile" component={StudentProfile} />
            <Route exact path="/lectureCards" component={Lecture} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </section>
      </Fragment>
    </Router>
    </div>
  );
}
export default App;
