import React, { Fragment } from "react";
import Card from "../basicComponents/Card";
import CreateCard from "../basicComponents/CreateCards";
import Search from "../basicComponents/Search";
import Footer from "../basicComponents/Footer";
import { getAllUser } from "../../api/index";
import axios from "axios";
 




function Lecture(props) {
  return (
    //TODO
    //map.
    <Fragment>
      <div className="aboutus">
        <div className="about-section">
          <h1>All Lectures</h1>
          <p>
            If you want to be a computer programmer then you’ve come to the
            right place
          </p>
          <p>find your mentor.</p>
        </div>
        <div class="row">
          <Search />
          <CreateCard />
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default Lecture;
