import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import jwt_decode from "jwt-decode";


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	paper: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(16),
			height: theme.spacing(16)
			
		}
	}
}));

function RecipeMealplan(props) {

	 const classes = useStyles();
	const token = props.currentUser.token
	console.log(token)
	
	const decode = jwt_decode(token)
	console.log(decode.user_id)
	
	

	return (
		<div className={classes.root}>
		<Container className={classes.cardGrid} maxWidth="md">
		<Grid container direction="row" justify="space-evenly" spacing={6} sm={12}>
  			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10" name= "sunday" >
						Sunday
						<Typography component="li">
					{props.renderMeals.map(meal => {
						if ( decode.user_id == meal.user_id && meal.date == "sunday") {
							return meal.recipe_label
						}else {
							return null 
						}
					})}
					</Typography>
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Monday
						<Typography component="li">
					{props.renderMeals.map(meal => {
						if ( decode.user_id == meal.user_id && meal.date == "monday") {
							return meal.recipe_label
						}else {
							return null
						}
					})}
					</Typography>
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Tuesday
						<Typography component="li">
					{props.renderMeals.map(meal => {
						if ( decode.user_id == meal.user_id && meal.date == "tuesday") {
							return meal.recipe_label
						} else {
							return null
						}
					})}
					</Typography>
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Wednesday
						<Typography component="li">
					{props.renderMeals.map(meal => {
						if ( decode.user_id == meal.user_id &&  meal.date == "wednesday") {
							return meal.recipe_label
						} else {
							return null 
						}
					})}
					</Typography>
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Thursday
						<Typography component="li">
					{props.renderMeals.map(meal => {
						if ( decode.user_id == meal.user_id &&  meal.date == "thursday") {
							return meal.recipe_label
						} else {
							return null 
						}
					})}
					</Typography>
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Friday
					<Typography component="li">
					{props.renderMeals.map(meal => {
						if ( decode.user_id == meal.user_id &&  meal.date == "friday") {
							return meal.recipe_label
						} else {
							return null 
						}
					})}
					</Typography>
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Saturday
						<Typography component="li">
					{props.renderMeals.map(meal => {
						if ( decode.user_id == meal.user_id &&  meal.date == "saturday") {
							return meal.recipe_label
						} else {
							return null 
						} 
					})}
					</Typography>
					</Typography>
				</Paper>
			</Grid>
		</Grid>		
		</Container>
		</div>
	);
}

export default RecipeMealplan;


