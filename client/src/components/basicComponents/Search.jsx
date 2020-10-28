import React from "react";




function Search() {

  const searchOneName=()=> {
    var input, filter, column,div, h2, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value;
    div = document.getElementById("card_container");
    h2 = div.getElementsByTagName("h2");
    column = div.getElementsByClassName("column");
    for (i = 0; i < h2.length; i++) {
        a = h2[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.indexOf(filter) > -1) {
          column[i].style.display = "";
        } else {
          column[i].style.display = "none";
        }
    }
}
  return (
    <div className="searchBox">
      <input className="searchInput" id="searchInput" type="text"  onChange={()=>searchOneName()}/>
      <button className="searchButton" href="#">
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
}

export default Search;
