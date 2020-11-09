import React, { Component } from 'react'
import RecipeCard from "./RecipeCard"
import RecipeMealplan from "./RecipeMealplan"

export default class RecipeContainer extends Component {
    constructor() {
        super()
    
        this.state = {
            recipes: []
        }
    }
    
    componentDidMount = () => {
        fetch(`https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(ingredient => {
            const recipes = ingredient.hits
            this.setState({
                recipes
            })
        })
    }

    render() {
        console.log(this.state.recipes)
        return (
            <div>
                {this.state.recipes.map(recipe => {
                    return <RecipeCard recipe={recipe}/>
                })}
                <RecipeMealplan />
            </div>
        )
    }
}
