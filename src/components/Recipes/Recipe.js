import React from "react";
import Card from "../UI/Card";
import classes from "./Recipe.module.css";
const Recipe = (props) => {
  return (
    <Card>
      <h3 className={classes.recipe__title}>{props.title}</h3>
      <img src={props.thumbNail} className={classes.recipe__img}/>
      
    </Card>
  );
};

export default Recipe;
