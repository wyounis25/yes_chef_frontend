import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		margin: 'auto',
		width: 'fit-content'
	},
	formControl: {
		marginTop: theme.spacing(2),
		minWidth: 120
	},
	formControlLabel: {
		marginTop: theme.spacing(1)
	}
}));

export default function RecipeCard(props) {
    //const history = useHistory();
    const token = props.currentUser.token
    const decode = jwt_decode(token)
    console.log(decode.user_id)
    
	const classes = useStyles();
	const [ open, setOpen ] = useState(false);
	const [ date, setDate ] = useState('');

	const recipe = props.recipe;
	const calNumber = recipe.calories;
	const calories = Math.ceil(calNumber);
	//const id = recipe.label.replace(/\s+/g, '-').toLowerCase();
	const [ expanded, setExpanded ] = useState(false);

	const handleClickOpen = () => {
        setOpen(true);
	};

	const handleClose = () => {
        setOpen(false);
        
	};
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleChange = (e) => {
		const date = e.target.value;
		console.log(date);
		setDate(date)
	};
    console.log(recipe.label)
	const handleSubmit = (e) => {
        fetch("http://localhost:3000/api/v1/mealplans", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                date: date,
                user_id: decode.user_id,
                recipe_labels: recipe.label
            })
        }).then(res => res.json()).then(data => {console.log(data)})
        setOpen(false)
    };
    
    console.log(props.currentUser)
    console.log(localStorage)
	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={recipe.label}
				subheader={`Calories: ${Math.ceil(recipe.calories)}`}
			/>
			<CardMedia className={classes.media} image={recipe.image} title={recipe.label} />
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{recipe.healthLabels.map((hl) => {
						return <li>{hl}</li>;
					})}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share" >
					<CalendarTodayIcon onClick={handleClickOpen} />
					<Dialog open={open} onClose={handleClose} aria-labelledby="date-dialog-title">
						<DialogTitle id="date-dialog-title">Choose a Date</DialogTitle>
						<DialogContent>
							<DialogContentText>
								What day would you like to add this recipe to your Meal Plan.
							</DialogContentText>
							<form  className={classes.form} noValidate>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="day">Choose A Day</InputLabel>
									<Select onChange={handleChange} autoFocus value={date}>
										<MenuItem value={false}>false</MenuItem>
										<MenuItem value="monday">Monday</MenuItem>
										<MenuItem value="tuesday">Tuesday</MenuItem>
										<MenuItem value="wednesday">Wednesday</MenuItem>
										<MenuItem value="thursday">Thursday</MenuItem>
										<MenuItem value="friday">Friday</MenuItem>
										<MenuItem value="saturday">Saturday</MenuItem>
										<MenuItem value="sunday">Sunday</MenuItem>
									</Select>
								</FormControl>
								<Button  onClick={handleSubmit} color="primary">Submit</Button>
							</form>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} color="primary">
								Close
							</Button>
						</DialogActions>
					</Dialog>
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Ingredients:</Typography>
					<Typography paragraph>{recipe.ingredientLines.join('. ')}</Typography>
					<Typography paragraph>{`Serving Size: ${recipe.yield}`}</Typography>
					<Typography paragraph>{`Prep Time: ${recipe.totalTime} minutes`}</Typography>
					<Typography />
				</CardContent>
			</Collapse>
		</Card>
	);
}
