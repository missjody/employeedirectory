import React from "react";
// import Faker from "faker";

// need to map over a certain number to generate cards for each person

function EmployeeCard(props) {
  // console.log(Faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
  return (
    <div>

      <img alt={props.name} src={props.avatar} />
      <h1> test employee card</h1>
      <p> Name: {props.name} </p>
      <p> Email: {props.email}</p>
      <p> phone: {props.phone} </p>
      <p> title: {props.title} </p>


    </div>
  )
}

export default EmployeeCard;