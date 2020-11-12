import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
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
			<Paper elevation={0} />
			<Paper elevation={0} />
			<Paper>
				<Typography component="h4" variant="h10">
					Monday
				</Typography>
			</Paper>
			<Paper>
				<Typography component="h4" variant="h10">
					Tuesday
				</Typography>
			</Paper>
			<Paper>
				<Typography component="h4" variant="h10">
					Wednesday
				</Typography>
			</Paper>
			<Paper>
				<Typography component="h4" variant="h10">
					Thursday
				</Typography>
			</Paper>
			<Paper>
				<Typography component="h4" variant="h10">
					Friday
				</Typography>
			</Paper>
			<Paper>
				<Typography component="h4" variant="h10">
					Saturday
				</Typography>
			</Paper>
			<Paper>
				<Typography component="h4" variant="h10">
					Sunday
				</Typography>
			</Paper>
		</div>
	);
}

export default RecipeMealplan;
