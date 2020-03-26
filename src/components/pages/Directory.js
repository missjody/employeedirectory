import React from "react";
// import Faker from "faker";
// import EmployeeCard from "../EmployeCard.js"

// can generate variables here to use below
// can generate consts in ES6 form 
// const example = whatever => {}
// const test = "working";

// CHANGE DIRECTORY TO JUST BE THE WRAPPER

function Directory(props) {
  console.log("Directory Props: ", props);
  // console.log(Faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
  return (
    <div>
      <h1> test Directory </h1>

      {/* {this.users.map(user => this.renderUsers(user))} */}
      {/* HTML goes here */}
      {/* curlies is injecting info */}
      {/* can also call functions within the curlies */}
      {/* // <h2> Directory {test} </h2>
      // <h5> {renderUsers()}</h5> */}
      <h1> {props.user} </h1>
    </div>
  )
}

export default Directory;
