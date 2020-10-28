import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';


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
          <Link className="" to="/about">
          About
          </Link>
        </li>
        <li>
          <Link className="" to="/lectures">
          Lectures
          </Link>
        </li>
        <li>
          <Link className="" to="/lectureProfile">
          LectureProfile
          </Link>
        </li>
        <li>{props.user.isLoggedIn && <Logout setUser={props.setUser} />}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
