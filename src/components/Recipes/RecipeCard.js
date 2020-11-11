import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import Form from "./components/Users/Form";

import { useHistory } from "react-router-dom";

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
    const history = useHistory();
    const classes = useStyles();
    const recipe = props.recipe.recipe;
    const id = recipe.label.replace(/\s+/g, '-').toLowerCase();

    const routeChange = (e) =>{ 
        console.log(e);
        let path = `/recipe/${id}`; 
        history.push(path, {recipe: recipe});
    }
    console.log()
    return (
        <Card className={classes.card} onClick={routeChange}>
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
