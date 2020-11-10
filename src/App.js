import React from "react";
import Search from "./components/Search"
import Navbar from "./components/Navbar"
import RecipeContainer from "./components/Recipes/RecipeContainer"
import Profile from "./components/Users/Profile"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css";

export default class App extends React.Component {
  // newUser = () => {
  //   let username = "markitos";
  //   let password_digest = "c4tz";
  //   fetch("http://localhost:3000/api/v1/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         username,
  //         password_digest,
  //       }
  //     })
  //   })
  // }

  render() {
    return ( 
      <Router>
        <div className="App">
          <Navbar />
          <Search />
          <RecipeContainer />
          <Switch>
            <Route path="/profile" exact component={Profile}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;
