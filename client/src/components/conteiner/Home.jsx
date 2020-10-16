import React from "react";
import { Link, Redirect } from "react-router-dom";
import Footer from "../basicComponents/Footer"


const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

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
