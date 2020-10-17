import React, { Fragment } from "react";
import Avatar from "../basicComponents/Avatar";
import CreateCard from "../basicComponents/CreateCards"
import Footer from "../basicComponents/Footer"

function LectureProfile(props) {
  return (
    <Fragment>
      <div>
        <div class="studentProfile">
          <h1>My Profile</h1>
          <p>Welcome Tom Swalla</p>
        </div> 
        
        {/* <CreateCard/> */}
        <div class="boxStudentProfile">
          <div class="studentCard">
            <div>
              <div>
                <Avatar
                  img={
                    "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
                  }
                />
                <div>
                  <h2>Jane Doe</h2>
                  <p class="title">CEO Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>jane@example.com</p>
                  <p>
                    <button class="button">Contact</button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="studentBio">
            <h2>About me</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                corrupti nam facere magnam, omnis similique id eaque nesciunt
                quas ullam explicabo repellat a ratione officia repudiandae
                cupiditate. Omnis, non neque.
              </p>
            </div>
          </div>

          <div class="studentSkills">
          <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                corrupti nam facere magnam, omnis similique id eaque nesciunt
                quas ullam explicabo repellat a ratione officia repudiandae
                cupiditate. Omnis, non neque.
              </p>
            </div>
          </div>

          <div class="studentMessge">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              corrupti nam facere magnam, omnis similique id eaque nesciunt quas
              ullam explicabo repellat a ratione officia repudiandae cupiditate.
              Omnis, non neque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Autem itaque facilis officiis consequatur ut
              molestiae earum obcaecati repellat expedita eius perspiciatis ea
              corporis fugit assumenda, dolores, laborum reprehenderit excepturi
              dolor.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default LectureProfile;