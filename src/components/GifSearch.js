import React, { useState } from "react";

function GifSearch({ onSubmitQuery }) {
  const [querySearch, setQuerySearch] = useState("");


  function handleSearchChange(e) {
    setQuerySearch(e.target.value);
  }
  
  function handleQuerySearch(e) {
    e.preventDefault();
    onSubmitQuery(querySearch);
  }

  

  return (
    <div>
      <form onSubmit={handleQuerySearch}>
        
          <input
            id="search"
            type="text"
            value={querySearch}
            onChange={handleSearchChange}
          />
        
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default GifSearch;