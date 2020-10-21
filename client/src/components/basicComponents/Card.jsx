import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div class="column">
      <div class="card">
        <div class="container">
          <Avatar img={props.img} />
          <h2>{props.name}</h2>
          <p class="title">{props.title}</p>
          <p>{props.someTXT}</p>
          <p>{props.phone}</p>
          <p className="Crardicon">{props.email}</p>
          <p>{props.age}</p>
          <p>
            <button class="button">Contact</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
