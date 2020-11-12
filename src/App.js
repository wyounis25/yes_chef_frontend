import React from "react";
import Search from "./components/Recipes/Search"
import Navbar from "./components/Navbar"
import RecipeContainer from "./components/Recipes/RecipeContainer"
import Profile from "./components/Users/Profile"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css";
import SignUp from "./components/Users/SignUp";
import LogIn from "./components/Users/LogIn";
import Recipe from "./components/Recipes/Recipe";
import 'fontsource-roboto';

export default class App extends React.Component {
  
  Home = () => (
    <div>
      <h1>Home</h1>
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
            <Route path= "/recipe/:id">
              <Recipe/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;
