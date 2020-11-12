import React from 'react'
import MealViewer from "./MealViewer"
import LogIn from "./LogIn"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {useLocation} from "react-router-dom";

export default function Profile() {
    const location = useLocation()
    const myprofile = location.state.profile
    console.log(myprofile)
    return (
        <Router>
            <div>
                <h1>Profile</h1>
                <Switch>
                    <Route path="/login">
                        <LogIn/>
                    </Route>
                </Switch>
                <MealViewer />
            </div>
        </Router>
    )
}
