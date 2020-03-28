import React from "react";
// import Table from "react-bootstrap-table";
// import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import './App.css';

//design how each employee's card will look like

const Employees = (props) => {

  return (


    <tr>
      <td><img alt={props.firstName} src={props.icon} /></td>
      <td><strong>Name:</strong> {props.firstName} {props.lastName}</td>
      <td><strong>Email:</strong> {props.email}</td>
      <td><strong>Phone:</strong> {props.phone} </td>
    </tr>




  );
}

export default Employees;