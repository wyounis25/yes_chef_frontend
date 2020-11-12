import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";


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

function RecipeMealplan() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
		<Container className={classes.cardGrid} maxWidth="md">
		<Grid container direction="row" justify="space-evenly" spacing={6} sm={12}>
  			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Sunday
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Monday
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Tuesday
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Wednesday
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Thursday
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Friday
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={3} spacing={3}>
				<Paper className={classes.paper}>
					<Typography component="h4" variant="h10">
						Saturday
					</Typography>
				</Paper>
			</Grid>
		</Grid>		
		</Container>
		</div>
	);
}

export default RecipeMealplan;
