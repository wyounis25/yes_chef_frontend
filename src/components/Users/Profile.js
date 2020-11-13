import React, { useState } from 'react';
import MealViewer from './MealViewer';
import LogIn from './LogIn';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
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
	header: {
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

	return (
		<Router>
			<div>
				<Paper style={{ borderRadius: '60px' }} className={classes.root} elevation={5}>
					<Typography className={classes.header} component="h1" variant="h3">
						<h3>HELLO! {myprofile.username.toUpperCase()}</h3>
					</Typography>
				</Paper>
				<Button
					//onClick = {()=> deleteUser(myprofile.id)}
					variant="contained"
					color="secondary"
					className={classes.button}
					startIcon={<DeleteIcon />}
				>
					DELETE {myprofile.username.toUpperCase()}
				</Button>
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
