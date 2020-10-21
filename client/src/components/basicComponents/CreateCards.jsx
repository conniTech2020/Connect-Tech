import React from "react";
import Card from "./Card";
// import User from "./ListUsers";
import apis from "../../api/index";
 

function createCard(Teachers) {
  return (
    <Card
      key={Teachers.id}
      name={Teachers.name}
      // title={User.title}
      // someTXT={User.someTXT}
      // img={User.imgURL}
      // phone={User.phone}
      // email={User.email}
      // age={User.age}
    />
  );
}

function CreateCard() {
  console.log("this --------",apis);
 const Teachers  = apis.getAllTeachers();
  return <div>{Teachers.map(createCard)}</div>;
}

export default CreateCard;
