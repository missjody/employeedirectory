// possible option from activities 19 and 20 and review
import React, { Component } from "react";
import Faker from "faker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Directory from "./components/pages/Directory";

import './App.css'; // is this needed here? 

// from fakerjs
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    for (let i = 0; i < 5; i++) {
      const user = {
        name: Faker.internet.userName(),
        email: Faker.internet.email(),
        avatar: Faker.internet.avatar(),
      }
      this.setState(prevState => ({
        users: [...prevState.users, user],
      }))
    }
  }

  renderUsers(user) {
    return (
      <div style={{ border: 'solid 1px #eee' }}>
        <img src={user.avatar} alt={user.name} width="50" height="50" />
        <h4>Name: {user.name}</h4>
        <h4>Email: {user.email}</h4>
      </div>
    )
  }

  render() {
    return <div>
      <Router>
        {/* <> */}
        {/* NavTabs will always be loaded */}
        <NavTabs />

        {/* Home has to be loaded this way 
         otherwise it doesn't load on first open
         of the site */}
        <Home />
        {/* This will be rendered conditionally */}
        <Route exact path="/Directory" component={Directory} />
        {/* </> */}
      </Router>
    </div>
  }
}

export default App

//   return (
//     // for single page application one Router
//     <Router>
//       <>
//         {/* NavTabs will always be loaded */}
//         <NavTabs />
//         <div className="container">
//           {/* Home has to be loaded this way 
//         otherwise it doesn't load on first open
//         of the site */}
//           <Home />
//           {/* This will be rendered conditionally */}
//           <Route exact path="/Directory" component={Directory} />
//         </div>
//       </>
//     </Router>
//   );
// };

// export default App;
