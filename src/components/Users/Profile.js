import React, { useState } from 'react';
import MealViewer from './MealViewer';
import LogIn from './LogIn';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import { blue } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
	Mealroot: {
		flexGrow: 1,
		position: 'absolute',
		right: '0px',

	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8)
	},
	paper: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(16),
			height: theme.spacing(16)
		}
	},
	button: {
		margin: theme.spacing(1)
	},
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		//backgroundColor: '#fbf7f0',
		'& > *': {
			margin: theme.spacing(10),
			width: theme.spacing(115),
			height: theme.spacing(16)
		}
		
	},
	calender: {
		position: 'absolute',
		display: 'flex',
		right: '200px',
		width: '600px',
		alignItems: 'right',
		//backgroundColor: '#fbf7f0',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(115),
			height: theme.spacing(10)
		}
	},
	side: {
		position: 'absolute',
		display: 'flex',
		left: '0px',
		width: '325px',
		alignItems: 'right',
		//backgroundColor: '#fbf7f0',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(115),
			height: theme.spacing(60)
		}
	},
	header: {
		display: 'center',
		marginRight: 'auto',
		marginLeft: 'auto'
	},
	preff: {
		display: 'center',
		marginRight: 'auto',
		marginLeft: 'auto'
	},
	cal: {
		display: 'center',
		marginRight: 'auto',
		marginLeft: 'auto'
	}
}));

export default function Profile() {
	const classes = useStyles();
	const location = useLocation();
	const myprofile = location.state.profile;
	console.log(myprofile);
	console.log(myprofile.preferences);
	return (
		<Router>
			<div>
				<Paper style={{ borderRadius: '60px' }} className={classes.root} elevation={5}>
					<Typography className={classes.header} component="h1" variant="h3">
						<h3>HELLO! {myprofile.username.toUpperCase()}</h3>
					</Typography>
				</Paper>
				<br/>
				<br/>
				<Paper style={{ borderRadius: '60px' }} className={classes.side} elevation={5}>
					<Typography className={classes.preff} component="h1" variant="h15">
						<h3>
							Preferences{' '}
							{myprofile.preferences.map((pref) => {
								return (
									<Typography className={classes.preff} component="h4" variant="h6">
										{pref}
									</Typography>
								);
							})}
						</h3>
					</Typography>
				</Paper>
			
				<Paper style={{ borderRadius: '60px' }} className={classes.calender} elevation={5}>
					<Typography className={classes.cal} component="h1" variant="h5">
						<h3>MEAL WEEK VIEW</h3>
					</Typography>
				</Paper>
				<br/>
				<br/>
				<br/>
				<div className={classes.Mealroot}>
		<Container className={classes.cardGrid} maxWidth="md">
		<Grid container direction="row" justify="space-evenly" spacing={6} sm={12}>
  			<Grid item xs={3} spacing={3}>
				<Paper style={{ borderRadius: '40px' }} className={classes.paper} elevation={5}>
					<Typography component="h4" variant="h10" name= "sunday" >
						Sunday
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper style={{ borderRadius: '40px' }} className={classes.paper} elevation={5}>
					<Typography component="h4" variant="h10">
						Monday
				
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper style={{ borderRadius: '40px' }} className={classes.paper} elevation={5}>
					<Typography component="h4" variant="h10">
						Tuesday
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper style={{ borderRadius: '40px' }} className={classes.paper}elevation={5} >
					<Typography component="h4" variant="h10">
						Wednesday
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper style={{ borderRadius: '40px' }} className={classes.paper}elevation={5} >
					<Typography component="h4" variant="h10">
						Thursday
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper style={{ borderRadius: '40px' }} className={classes.paper}elevation={5} >
					<Typography component="h4" variant="h10">
						Friday
				
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper style={{ borderRadius: '40px' }}  className={classes.paper}elevation={5} >
					<Typography component="h4" variant="h10">
						Saturday
					</Typography>
				</Paper>
			</Grid>
		</Grid>		
		</Container>
		</div>
				<Switch>
					<Route path="/login">
						<LogIn />
					</Route>
				</Switch>
				<MealViewer />
			</div>
		</Router>
	);
}
