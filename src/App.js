import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom"; // Are we going to need these at all?
import Directory from "./components/pages/Directory";
import './App.css';

// set up app as a class based component
// that that we can use state in the application
class App extends React.Component {
  render() {

    return (
      <div>
        <Directory />
      </div>
    )
  }
}

export default App;