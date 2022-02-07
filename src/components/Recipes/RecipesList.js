import axios from "axios";
import React, { Fragment, useState } from "react";
import ReciepeSearchForm from "./ReciepeSearchForm";
import Recipe from "./Recipe";

const RecipesList = () => {
  const [recipesList, setRecipesList] = useState(null);

  const mapRecipes = () => {
    if (recipesList == null) {
      return "Not found";
    }
    return (
      <Fragment>
        {recipesList.map((recipe) => (
          <Recipe
            key={recipe.idMeal}
            thumbNail={recipe.strMealThumb}
            title={recipe.strMeal}
            description={recipe.strInstructions}
          />
        ))}
      </Fragment>
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
    <div>
      <ReciepeSearchForm onSearch={getRecipes} />
      <button onClick={getRecipes}>clickme</button>
      {mapRecipes()}
    </div>
  );
};

export default RecipesList;
