import React from "react";
import Search from "./components/Search"
import Navbar from "./components/Navbar"
import RecipeContainer from "./components/Recipes/RecipeContainer"
import Profile from "./components/Users/Profile"
import Form from "./components/Users/Form"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css";
import SignUp from "./components/Users/SignUp";
import LogIn from "./components/Users/LogIn";
import Recipe from "./components/Recipes/Recipe";

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

  Home = () => (
    <div>
      <h1>Home</h1>
      <Search />
      <RecipeContainer />
    </div>
  );

  render() {
    return ( 
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={this.Home}/>
            <Route path="/profile/:id" component={Profile}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/recipes/:id" component={Recipe}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;
