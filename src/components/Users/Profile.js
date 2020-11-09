import React, { Component } from 'react'
import MealViewer from "./MealViewer"
import Form from "./Form"


export default class Profile extends Component {
    render() {
        return (
            <div>
                <Form />
                <MealViewer />
            </div>
        )
    }
}
