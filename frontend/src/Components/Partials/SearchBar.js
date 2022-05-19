import React, { useState } from "react";

import "./SearchBar.css"

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setSearchInput(event.target.value);
    props.onSearch(event.target.value);

  }

  return (
    <div className="searchbar">
      <form>
        <label className="label">
          <span>Search for Ingredients:</span>
        </label>
        <input
          className="input"
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          onChange={handleChange}
          value={searchInput}
        />
      </form>
    </div>
  );

}

export default SearchBar;