import React from "react";
import { useState } from "react";

function Search() {
  const [inputValue, setinputValue] = useState("");

  const handleChange = (event) => {
    setinputValue(event.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange}></input>
      <p>{inputValue}</p>
    </>
  );
}

export default Search;
