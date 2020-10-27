import React, {useState} from 'react'
import { Redirect } from "react-router-dom";


function Logout() {
    const [redirect, setRedirect] = useState(false);

    function out() {
      console.log(localStorage.getItem("authToken"))
      localStorage.removeItem("authToken");
      console.log(localStorage.getItem("authToken"))
      setRedirect(true);
    }
    const token= localStorage.getItem("authToken")
    console.log(redirect)
    return token?( 
        <>
        <button onClick={out} className="btn2 btn-light">
            Logout
        </button>
        {redirect ? <Redirect to="/" /> : ""}
        </>
    ):null
}
export default Logout