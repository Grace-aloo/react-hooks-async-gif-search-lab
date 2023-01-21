import React, {useState,useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";


function GifListContainer(){
    const [data,setData]= useState([])
    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g" )
           .then(res => res.json())
           .then(data => setData(data))
      },[])

      function handleSearch(search){
        setData((data)=>{
          return data.filter((list)=>{
            return list.toLowerCase().includes(search)
             
          })
        })
      } 
    return(
        <div>
            <GifSearch handleSearch={handleSearch}/>
            <GifList data={data}/>
        </div>

    )
}
export default GifListContainer