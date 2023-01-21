import React, {useState} from "react";

function GifSearch({handleSearch}){
    const [search,setSearch]=useState('')
    // function handleChange(e){
    //     setSearch(e.target.value.toLowerCase())
    //     handleSearch(search)
    // }
    return (
        // <form onSubmit={handleChange}>
        //     <input
        //     type="text"
        //     placeholder="search"
        //     />
        // </form>
        <form onSubmit={(e) => handleSearch(e, search)}>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
    )
}
export default GifSearch