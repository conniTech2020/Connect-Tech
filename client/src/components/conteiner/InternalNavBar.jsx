import React, {useState}from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";



const Navbar = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   function componentDidMount() {
    console.log("we are componentDidMount")
    if(localStorage.getItem("authToken")) {
      setIsLoggedIn(true);
    }
  }
  
  
  return (
    <nav id="navbar" className="navbar bg-dark">
      <h1>
        <Link to="/Home">
          <i className="">ConnecTech</i>
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="" to="/lectureCards">
          LectureCards
          </Link>
        </li>
        {/* <li>
          <Link className="" to="/studentProfile">
          StudentProfile
          </Link>
        </li> */}
        {/* <li>
          <Link className="" to="/home">
            Home
          </Link>
        </li> */}
        <li>
          <Link to="/about">About-Us</Link>
        </li>
        <li>
          <Link className="" to="/logout">
            Logout
          </Link>
        </li>
      { isLoggedIn ? '' : 
        <>
        <li>
          <Link className="" to="/register">
            Register
          </Link>
        </li>
        <li>
          <Link className="" to="/login">
            Login
          </Link>
        </li>
        </>
      }
      </ul>
    </nav>
  );
};


export default Navbar;