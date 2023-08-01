import React from "react";

import SearchBar from "components/search-bar";
import HeaderRight from "components/header-right";

import stl from "./Header.module.scss";

const Header = () => {
  return (
    <div className={stl.header}>
      <SearchBar />
      <HeaderRight />
    </div>
  );
};

export default Header;
