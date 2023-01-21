import React, {useState,useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";


function GifListContainer(){
    const [data,setData]= useState([])
    const [query,setQuery]= useState('')

    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=vKbxuNbFAVnz8XOHaeyP5wsDwUMjhPn4&rating=g" )
           .then(res => res.json())
           .then(data => setData(data.map(gif => ({ url: gif.images.original.url}))))
      },[query])

      // function handleSearch(search){
      //   setData((data)=>{
      //     return data.filter((list)=>{
      //       return list.toLowerCase().includes(search)
             
      //     })
      //   })
      // } 
      const handleSearch = (e) => {
        e.preventDefault();
        setQuery(e.target.search.value);
      };

    return(
        <div>
            <GifSearch handleSearch={handleSearch}/>
            <GifList data={data}/>
        </div>

    )
}
export default GifListContainer