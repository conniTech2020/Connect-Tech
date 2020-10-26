import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="column">
      <div className="card">
        <div className="container">
          <Avatar img={props.img} />
          <h2>{props.name}</h2>
          <p className="title">{props.title}</p>
          <p>{props.someTXT}</p>
          <p>{props.phone}</p>
          <p className="Crardicon">{props.email}</p>
          <p>{props.age}</p>
          { !props.isHavBtn &&
           <p>
            <button className="button">Contact</button>
          </p>
          }
        </div>
      </div>
    </div>
  );
}

export default Card;
