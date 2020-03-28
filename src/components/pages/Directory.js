import React from "react";
import EmployeeCard from "../EmployeeCard.js"

// CHANGE DIRECTORY TO JUST BE THE WRAPPER

const Directory = (props) => {
  return (
    <div className="container">
      <h1> test Directory </h1>
      {/* // Intro holding div
      // Search bar holding div inside of intro or outside of it? */}
      <EmployeeCard />
    </div>
  );
}

export default Directory;
