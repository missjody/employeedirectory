import React from "react";
// import './App.css';

//design how each employee's card will look like

const Employees = (props) => {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.firstName} src={props.icon} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.firstName} {props.lastName}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
        </ul>
      </div>
    </div>
  );

  // return what goes in the card here
  // return (


  // //   <div>

  // //     <img alt={props.name} src={props.avatar} />
  // //     <h1> test employee card</h1>
  // //     <p> Name: {props.name} </p>
  // //     <p> Email: {props.email}</p>
  // //     <p> phone: {props.phone} </p>
  // //     <p> title: {props.title} </p>


  // //   </div>
  // )
}

export default Employees;