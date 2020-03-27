import React from "react";
import EmployeeCard from "../EmployeeCard.js"
// import './App.css';

//import a welcome/search box here? 

// can generate variables here to use below
// can generate consts in ES6 form 
// const example = whatever => {}
// const test = "working";

// CHANGE DIRECTORY TO JUST BE THE WRAPPER

const Directory = (props) => {
  return (
    // pass in the div {props.children}
    <EmployeeCard />
  );
}

export default Directory;

    // <div>
    //   <h1> test Directory </h1>

    //   {/* {this.users.map(user => this.renderUsers(user))} */}
    //   {/* HTML goes here */}
    //   {/* curlies is injecting info */}
    //   {/* can also call functions within the curlies */}
    //   {/* // <h2> Directory {test} </h2>
    //   // <h5> {renderUsers()}</h5> */}
    //   {/* <h1> {props.user} </h1> */}
    // </div>