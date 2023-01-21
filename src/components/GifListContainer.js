
import React,{ useState,useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
function GifListContainer (){

    const[data, setData] = useState([])
    const [search, setSearch] = useState("");
    
    //const apiKey='vKbxuNbFAVnz8XOHaeyP5wsDwUMjhPn4';

    useEffect(()=>{
        //fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&rating=g`)
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=vKbxuNbFAVnz8XOHaeyP5wsDwUMjhPn4&rating=g" )
        .then((res)=>res.json())
        .then(({data})=>{
            const gifs = data.slice(0,3).map((gif) => ({ url: gif.images.original.url }));
            setData(gifs);
            
        })
    
    },[search])


  return (
    <div>
     <GifList  data={data} />
      <GifSearch onSubmitQuery={setSearch} />
    </div>
  )
}
export default GifListContainer