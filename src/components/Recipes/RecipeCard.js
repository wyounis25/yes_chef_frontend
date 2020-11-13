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


import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
}));

export default function RecipeCard(props) {
    const history = useHistory();
    const classes = useStyles();
    const recipe = props.recipe;
    const [expanded, setExpanded] = useState(false);
    console.log(recipe)
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
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
          <CardMedia
            className={classes.media}
            image={recipe.image}
            title={recipe.label}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {recipe.healthLabels.map(hl => {
                return <li>{hl}</li>
              })}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <CalendarTodayIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
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
              <Typography paragraph>
                {recipe.ingredientLines.join('. ')}
              </Typography>
              <Typography paragraph>
                {`Serving Size: ${recipe.yield}`}
              </Typography>
              <Typography paragraph>
                {`Prep Time: ${recipe.totalTime} minutes`}
              </Typography>
              <Typography>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      );
    }