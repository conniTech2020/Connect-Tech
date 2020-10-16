import React, { Fragment } from "react";
import Card from "../basicComponents/Card";
import Footer from "../basicComponents/Footer"

function About() {
  return (
    <Fragment>
      <div className="aboutus">
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            We think it’s every students best opportunity for success,
            happiness, and impact to do as much of what such times can express
            for us, we were established in 2020 by 4 partner software developers
            to allow access to content and learning anywhere and at any given
            time . So we support students and lecturers by providing services
            that are necessary to run an online and convenient learning
            experience for any budget so you, the student, can feel that you
            have come to the right place and at the right time.
          </p>
        </div>
        <div class="row">
          <Card
            // key="1"
            name="Tom Swalla"
            title="CEO CONNECTECT"
            someTXT="Some text that describes me lorem ipsum ipsum lorem."
            imgURL="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
            phone="052-4157046"
            email="tomswalla@gmail.com"
            age="22"
          />
          <Card
            // key="1"
            name="Tom Swalla"
            title="CEO CONNECTECT"
            someTXT="Some text that describes me lorem ipsum ipsum lorem."
            imgURL="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
            phone="052-4157046"
            email="tomswalla@gmail.com"
            age="22"
          />
          <Card
            // key="1"
            name="Tom Swalla"
            title="CEO CONNECTECT"
            someTXT="Some text that describes me lorem ipsum ipsum lorem."
            imgURL="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
            phone="052-4157046"
            email="tomswalla@gmail.com"
            age="22"
          />
          <Card
            // key="1"
            name="Tom Swalla"
            title="CEO CONNECTECT"
            someTXT="Some text that describes me lorem ipsum ipsum lorem."
            imgURL="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
            phone="052-4157046"
            email="tomswalla@gmail.com"
            age="22"
          />
        </div> 
<Footer/>
      </div>
    </Fragment>
  );
}

export default About;
