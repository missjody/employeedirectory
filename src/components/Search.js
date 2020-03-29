import React from "react";
import "../styles/Search.css";

const Search = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <form>
        <input
          placeholder="Search for your employee..."
          name="search"
          type="text"
          onChange={(event) => props.startSort(event)}
        />
      </form>
    </div>
  );

}


export default Search;