import React from "react";

function Avatar(props) {
  return (
    <div>
      <img className="avatarIMG" src={props.img} alt="" />
    </div>
  );
}

export default Avatar;
