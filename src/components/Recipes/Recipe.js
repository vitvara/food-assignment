import React from "react";
import Card from "../UI/Card";
import classes from "./Recipe.module.css";
const Recipe = (props) => {
  return (
    <div className={classes.recipe}>
      <h3 className={classes.recipe__title}>{props.title}</h3>
      <img src={props.thumbNail} className={classes.recipe__img}/>
      <p className={classes['recipe-desc']}>{props.description}</p>
    </div>
  );
};

export default Recipe;
