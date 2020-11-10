import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import RecipeCard from "./RecipeCard";
import Container from '@material-ui/core/Container';
import RecipeMealplan from "./RecipeMealplan";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function RecipeContainer() {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=pasta&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((ingredient) => {
        const recipes = ingredient.hits;
        setRecipes(recipes);
      });
  }, []);

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
          {recipes.map((recipe) => {
             return <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                <RecipeCard recipe={recipe} />
            </Grid>
          })}  
        </Grid>
      </Container>
      <RecipeMealplan />
    </div>
  );
}
