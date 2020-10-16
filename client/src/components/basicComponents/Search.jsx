import React from "react";

function Search() {
  return (
    <div className="searchBox">
      <input className="searchInput" type="text" />
      <button className="searchButton" href="#">
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
}

export default Search;
