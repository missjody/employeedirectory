import React from "react";
import Employees from "./Employees.js";

class EmployeeCard extends React.Component {
  state = {
    employees: []
  }
  // from fetch data from an api in reactjs youtube tutorial by Ben Awad
  // check that the component rendered at least once, and pull in our data
  // await the information to come back
  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,id,picture";
    const response = await fetch(url);
    const data = await response.json();
    // console.log("Datat ", data);
    this.setState({ employees: data.results });
  }

  // map over data to generate a card for each employee  
  render() {
    return (
      <div>
        <div> Test </div>
        {this.state.employees.map(employee => {
          return (
            <Employees
              firstName={employee.name.first}
              lastName={employee.name.last}
              email={employee.email}
              icon={employee.picture.thumbnail}
            />
          )
        })}

      </div>
    );
  }
}

export default EmployeeCard;