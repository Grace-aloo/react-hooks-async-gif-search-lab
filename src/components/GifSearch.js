import React from "react";

function GifSearch({handleSearch}){
    const [search,setSearch]=useState('')
    function handleChange(e){
        setSearch(e.target.value.toLowerCase())
        handleSearch(search)
    }
    return (
        <form onSubmit={handleChange}>
            <input
            type="text"
            placeholder="search"
            />
        </form>
    )
}
export default GifSearch