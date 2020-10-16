import React from "react";
import Card from "./Card";
import User from "./ListUsers";


function createCard(User) {
  return (
    <Card
      key={User.id}
      name={User.name}
      title={User.title}
      someTXT={User.someTXT}
      img={User.imgURL}
      phone={User.phone}
      email={User.email}
      age={User.age}
    />
  );
}

function CreateCard() {
  return <div>{User.map(createCard)}</div>;
}

export default CreateCard;
