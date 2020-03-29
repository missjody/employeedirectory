import React, { Component } from "react";
import Employees from "./Employees.js";
import Search from "./Search.js";
// import EmployeeCard from "./EmployeeCard.js"
import "../styles/Directory.css";

class Directory extends Component {

  state = {
    employees: [],
    empSort: [],
    search: "",
    sorted: false,
  };

  // // check that the component rendered at least once, and pull in our data
  // // wait for the information to come back
  componentDidMount = () => {
    fetch(`https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,id,picture,dob`)
      .then(res => res.json())
      .then(json => {
        this.setState({ employees: json.results })
      })
  };

  sortEmp = () => {
    let { employees, search } = this.state;
    let empSort = employees.filter(sorted => {
      // console.log("sorted ", empSort)
      return (
        sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
        sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
        sorted.email.toLowerCase().includes(search.toLowerCase())
      )
    })
    this.setState({ empSort })
  }

  startSort = event => {
    this.setState({ search: event.target.value }, () => {
      this.sortEmp();
      this.setState({ sorted: true });
    });
  };

  render = () => {
    // console.log("empSort ", this.state.empSort);
    return (
      <div>
        <div className="jumbotron">
          <h2 className="display-4">
            Employee Directory
          </h2>
          <p className="lead">
            Hey team! At Barbara's request in the last all employee meeting, I've set up an easy way to quickly find information about our officemates. Search below by name or email to pull up who you are looking for. Any questions or issues, feel free to reach out!
          </p>
          <Search
            name="search"
            startSort={this.startSort}
            label="Search"
          />
        </div>

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Headshot  </th>
                <th>Name  </th>
                <th>Email  </th>
                <th>Phone Number  </th>
                <th>Birthdate  </th>
              </tr>
            </thead>
            <tbody>

              {/* if it's not sorted, map accordingly */}
              {!this.state.sorted ? this.state.employees.map(employee => (


                < Employees
                  key={employee.id.value}
                  firstName={employee.name.first}
                  lastName={employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  icon={employee.picture.medium}
                  dob={Date(employee.dob.date)}

                />

              ))
                // otherwise map the sorted employees
                : this.state.empSort.map(employee => (

                  <Employees
                    key={employee.id.value}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    icon={employee.picture.medium}
                    dob={Date(employee.dob.date)}
                  />

                ))};
          </tbody>
          </table>
        </div>
      </div>

    )
  }
}

export default Directory;