import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
//import { Redirect } from "react-router-dom";

const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav id='navbar' className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className=''>ConnecTech</i>
        </Link>
      </h1>
      <ul>
        <li>
          <Link className='' to='/lectureCards'>
            Lectures
          </Link>
        </li>
        <li>
          <Link className='' to='/studentProfile'>
            Lecture profile
          </Link>
        </li>
        <li>{props.user.isLoggedIn && <Logout setUser={props.setUser} />}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
