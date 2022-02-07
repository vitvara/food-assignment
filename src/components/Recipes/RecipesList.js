import axios from "axios";
import React, { Fragment, useState } from "react";
import RecipeSearchForm from "./RecipeSearchForm";
import Recipe from "./Recipe";
import classes from "./RecipesList.module.css";

const RecipesList = () => {
  const [recipesList, setRecipesList] = useState(null);

  const mapRecipes = () => {
    if (recipesList == null) {
      return <h1 className={classes.container}>"Not found"</h1>;
    }
    return (
      <div className={classes.container}>
        <div className={classes["recipes-list"]}>
          {recipesList.map((recipe) => (
            <Recipe
              key={recipe.idMeal}
              thumbNail={recipe.strMealThumb}
              title={recipe.strMeal}
              description={recipe.strInstructions}
            />
          ))}
        </div>
      </div>
    );
  };

  const getRecipes = async (keyword) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    );
    console.log(response.data.meals);
    setRecipesList(response.data.meals);
  };
  return (
    <Fragment>
    <div className={classes.container}>
      <RecipeSearchForm onSearch={getRecipes} />
    </div>
      {mapRecipes()}
      </Fragment>
  );
};

export default RecipesList;
