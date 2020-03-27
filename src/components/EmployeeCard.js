import React from "react";
// import Employees from "./Employees.js";


//design how each employee's card will look like

// will this be a class component
// if yes clase EmployeeCard extends React.Component
// render below, add component above
// props becomes this.props

class EmployeeCard extends React.Component {

  // from fetch data from an api in reactjs youtube tutorial by Ben Awad
  // check that the component rendered at least once, and pull in our data
  // await the information to come back
  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,id,picture";
    const response = await fetch(url);
    const data = await response.json();
    console.log("Datat ", data);
  }

  // searchGiphy = query => {
  //     API.search(query)
  //       .then(res => this.setState({ results: res.data.data }))
  //       .catch(err => console.log(err));
  //   };

  //   handleInputChange = event => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     this.setState({
  //       [name]: value
  //     });
  //   };

  //   // When the form is submitted, search the Giphy API for `this.state.search`
  //   handleFormSubmit = event => {
  //     event.preventDefault();
  //     this.searchGiphy(this.state.search);
  //   };






  render() {
    return (
      <div>
        {/* return card setup here */}
        {/* // need to map over a certain number to generate cards for each person
  //   {props.key.map(value => {
  //     return <EmployeeCard 
  //     key= unique identifyer from the object passed
  //     name={value.name}
  //     email={value.name}
  //     avatar={value.name}
  //     title={value.name}
  //     phone={value.name}
  //   />}; */}
      </div>
    )
  }
}

export default EmployeeCard;