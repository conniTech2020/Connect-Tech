import React, { Fragment } from "react";
import Card from "../basicComponents/Card";
import CreateCard from "../basicComponents/CreateCards";
import Search from "../basicComponents/Search";
import Footer from "../basicComponents/Footer"

function Lecture(props) {
  return (
    <Fragment>
      <div className="aboutus">
        <div className="about-section">
          <h1>All Lectures</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            If you want to be a computer programmer then you’ve come to the
            right place
          </p>
        </div>
        <div class="row">
          <Search />
          <CreateCard />
          {/* <CreateCard />
          <CreateCard /> */}
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default Lecture;
