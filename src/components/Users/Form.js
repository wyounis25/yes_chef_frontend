import React, { Component } from 'react'
import LogIn from "./LogIn"
import SignUp from "./SignUp"

export default class Form extends Component {
    render() {
        return (
            <div>
                <LogIn />
                <SignUp />
            </div>
        )
    }
}
