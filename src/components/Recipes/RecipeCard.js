import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Recipe from "./Recipe";
import Form from "./components/Users/Form";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));

export default function RecipeCard(props) {
  const classes = useStyles();
  const recipe = props.recipe.recipe;
  const id = recipe.label.replace(/\s+/g, '-').toLowerCase();
  
  const handleOnClick = () => {
        console.log(id);
        // <Link to={`/recipes/${id}`} component={Recipe} />
        <Link to="/login" component={Form}/>
      }

      console.log()
    return (
      <Card className={classes.card} onClick={handleOnClick}>
        <CardMedia
          className={classes.cardMedia}
          image={recipe.image}
          title={recipe.label}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {recipe.label}
          </Typography>
          <Typography>
            {recipe.healthLabels.map(hl => {
                return <li>{hl}</li>
            })}
          </Typography>
        </CardContent>
      </Card>
    );
}
