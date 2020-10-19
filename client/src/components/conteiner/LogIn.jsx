import React, { Fragment, useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import Footer from "../basicComponents/Footer"

import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // if(email and password in DB) then do row 21
    //else - something else
    console.log(email, password);
    const res = await axios.post("/users/login", { email, password });
    localStorage.setItem("authToken", res.data.token);
    setRedirect(true);
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          {/* <div className="form-group"> */}
          <div>Email</div>
          <input
            // placeholder="Type your email"
            // autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* </div> */}
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
          <div>Password</div>
          <FormControl
            // placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
        {redirect ? <Redirect to="/student" /> : ""}
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    <Footer />

    </Fragment>
  );
}
