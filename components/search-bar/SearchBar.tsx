import React from "react";

import SearchIcon from "public/search.svg";

import stl from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={stl.searchbar}>
      <span>
        <SearchIcon />
      </span>
      <input type="search" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
