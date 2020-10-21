import React from "react";
import Card from "./Card";
// import User from "./ListUsers";
import apis from "../../api/index";
import {useState} from "react"; 
import {useEffect} from "react";

function createCard(teacher) {
  return (
    <Card
      key={teacher.id}
      name={teacher.fullName}
      email={teacher.email}
      someTXT={teacher.someTXT}
      img={teacher.Avatar}
      phone={teacher.phone}
      age={teacher.age}
    />
  );
}

function CreateCards() {
  const [teachers, setTeachers] = useState([]);
  useEffect(async ()=>{
    const respone = await apis.getAllTeachers();
    setTeachers(respone);
  },[]);
  console.log("this --------",apis);
 //const teachers  = apis.getAllTeachers().then(response=>response.data);
  return <div>{teachers.map(createCard)}</div>;
}

export default CreateCards;
