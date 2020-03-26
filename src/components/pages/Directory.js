import React from "react";
import Faker from "faker";

// can generate variables here to use below
// can generate consts in ES6 form 
// const example = whatever => {}
const test = "working";

function Directory(props) {
  // console.log("Directory Props: ", props);
  console.log(Faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
  return (
    <div>
      {/* {this.users.map(user => this.renderUsers(user))} */}
      {/* HTML goes here */}
      {/* curlies is injecting info */}
      {/* can also call functions within the curlies */}
      <h2> Directory {test} </h2>
    </div>
  )
}

export default Directory;
