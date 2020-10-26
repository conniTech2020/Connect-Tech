import React from "react";
import { Link } from "react-router-dom";
import Footer from "../basicComponents/Footer"


const Home = () => {
 

  return (
      <div>
        <div className="home">
       <div className="dark-overlay">
        <div className="home-inner">
          <h1 className="x-large">Programmer Connector</h1>
          <p className="lead">
            Our vision is based on connecting a struggling student to an
            excellent lecturer
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
        </div>
       </div>
          <Footer />
  </div>
  );
};

export default Home;
