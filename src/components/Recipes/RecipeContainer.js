import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import RecipeCard from "./RecipeCard";
import Container from "@material-ui/core/Container";
import RecipeMealplan from "./RecipeMealplan";
import Search from "./Search";

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

export default function RecipeContainer(props) {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const handleCheck = (e) => {
    const search = e.toLowerCase();
    setSearch(search);
    console.log(search);
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=12`
    )
      .then((res) => res.json())
      .then((ingredient) => {
        const recipes = ingredient.hits;
        setRecipes(recipes);
      });
      
    }
    

    const allRecipe = recipes.map(recipe => recipe.recipe)
    let filterSearch = allRecipe.filter(recipe => {
      return recipe.label.toLowerCase().includes(search)})
        return (
    <div>
       <Search handleCheck={handleCheck}/>
        <RecipeMealplan currentUser={props.currentUser}  renderMeals={props.renderMeals}/>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {filterSearch.map((recipe) => {
            return (
              <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                <RecipeCard currentUser={props.currentUser} recipe={recipe} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

// im doing the fetch POST HERE and then I am 
