import React, { useState } from "react";

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
        type="text"
        value={word}
        onChange={wordChangeHandler}
        placeholder="search"
      />
      <button type="submit">search</button>
    </form>
  );
};

export default ReciepeSearchForm;
