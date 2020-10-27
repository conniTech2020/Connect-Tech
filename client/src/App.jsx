import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Navbar from "./components/conteiner/NavBar";
import Home from "./components/conteiner/Home";
import Lectures from "./components/userComponets/Lectures";
import LectureProfile from "./components/userComponets/LectureProfile";
import About from "./components/conteiner/About";
import Login from "./components/conteiner/LogIn";
import Register from "./components/conteiner/Register";
import Logout from "./components/conteiner/Logout";

import axios from 'axios';
import './App.css';

function App() {
  const [user, setUser] = useState({
    token: null,
    user: null,
    isLoggedIn: false,
  });
  const checkLogin = async () => {
    let token = localStorage.getItem('authToken');
    const tokenRes = await axios.post('users/tokenIsValid', null, {
      headers: { 'x-auth-token': token },
    });

    if (tokenRes.data.isValidToken) {
      setUser({
        token: tokenRes.data.token,
        user: tokenRes.data.user,
        isLoggedIn: true,
      });
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Fragment>
          <Navbar setUser={setUser} user={user} />
          <Route exact path='/' component={Home} />
          <section className='container'>
            <Switch>
              <Route exact path='/lectureProfile' component={LectureProfile} />
              <Route exact path='/lectures' component={Lectures} />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/login'
                render={(props) => <Login setUser={setUser} />}
              />
              <Route exact path='/register' component={Register} />
              <Route exact path='/logout' component={Logout} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </div>
  );
}
export default App;
