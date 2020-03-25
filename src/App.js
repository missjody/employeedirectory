// possible option from activities 19 and 20 and review
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
// import Home from "./components/Home";
// import Directory from "./components/Directory";

import './App.css'; // is this needed here? 

function App() {

  return (
    // for single page application one Router
    <Router>
      <>
        {/* NavTabs will always be loaded */}
        <NavTabs />
        {/* These will be rendered conditionally */}
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/Directory" component={Directory} /> */}
      </>
    </Router>
  );
};



export default App;
