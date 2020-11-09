import React, { Component } from 'react'
import Recipe from "./Recipe"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  
export default class RecipeCard extends Component {
    handleOnClick = () => {
        <Recipe recipe={this.props.recipe.recipe}/>
    }
    render() {
        const recipe = (this.props.recipe.recipe)
        return (
            <Router>
            <div onClick={this.handleOnClick}>
                <h3>{recipe.label}</h3>
                <img src={recipe.image} alt={recipe.label}></img>
            </div>
            </Router>
        )
    }
}
