// possible option from activities 19 and 20 and review
import React from "react";
import Faker from "faker";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
// import Home from "./components/pages/Home";
import Directory from "./components/pages/Directory";
import EmployeeCard from "./components/EmployeCard";

import './App.css'; // is this needed here? 

function App() {

  return (
    <div>
      <Directory />
      <EmployeeCard

        name={Faker.name.findName()}
        email={Faker.internet.email()}
        avatar={Faker.internet.avatar()}
        title={Faker.name.jobTitle()}
        phone={Faker.phone.phoneNumber()}

      />
    </div>
  )
}

export default App;