import React, { Component } from 'react'
import MealViewer from "./MealViewer"
import LogIn from "./LogIn"



export default class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <LogIn />
                <MealViewer />
            </div>
        )
    }
}
