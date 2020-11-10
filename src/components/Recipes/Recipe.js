import React, { Component } from 'react'
import Review from "./Review"

export default class Recipe extends Component {
    render() {
        return (
            <div>
                <h1>Recipe</h1>
                <Review />
            </div>
        )
    }
}
