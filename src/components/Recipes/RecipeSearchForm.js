import React, { useState } from "react";
import classes from "./RecipeSearchForm.module.css";
import {Icon} from 'react-fa'

const ReciepeSearchForm = (props) => {
  const [word, setWord] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();
    props.onSearch(word);
    setWord("");
  };

  const wordChangeHandler = (event) => {
    setWord(event.target.value);
  };

  return (
    <form onSubmit={searchHandler}>
      <input
        className={classes['searchTerm']}
        type="text"
        value={word}
        onChange={wordChangeHandler}
        placeholder="search"
      />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
    </form>
  );
};

export default ReciepeSearchForm;
