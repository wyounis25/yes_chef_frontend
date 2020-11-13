import React from 'react';
import Navbar from './components/Navbar';
import RecipeContainer from './components/Recipes/RecipeContainer';
import Profile from './components/Users/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/Users/SignUp';
import LogIn from './components/Users/LogIn';
import 'fontsource-roboto';


export default class App extends React.Component {
	state = {
		currentUser: {
			username: '',
			password: ''
		},
		allMealplans: []
	};
 
	newMeal = () => {
		fetch('http://localhost:3000/api/v1/mealplans').then((res) => res.json()).then((meals) => {
			this.setState({ allMealplans: meals });
    })
    console.log("fetched")
    
	};

	newSession = (currentUser) => {
		console.log(currentUser.id);
		console.log(currentUser.password);

		fetch('http://localhost:3000/api/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				user: {
					username: currentUser.username,
					password: currentUser.password
				}
			})
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				localStorage.token = data.token;
				this.setState({
					currentUser: data
				}) ;
			});
  };
	Home = () => (
    <div>
			<h1>Home</h1>
			<RecipeContainer newMeal={this.newMeal} renderMeals={this.state.allMealplans} currentUser={this.state.currentUser} />
		</div>
	);
  
	render() {
    // const token = props.currentUser.token
    // const decode = jwt_decode(token)
		console.log(this.state.allMealplans);
		console.log(this.state.currentUser);
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/">
							<LogIn newSession={this.newSession} />
						</Route>
						<Route path="/home" exact component={this.Home} />
						<Route path="/profile/:id">
							<Profile renderMeals={this.renderMeals} />
						</Route>
						<Route path="/signup" component={SignUp} />
						{/* <Route path="/login" newSession={this.newSession} component={LogIn}/> */}
					</Switch>
				</div>
			</Router>
		);
	}
}

// export default App;
