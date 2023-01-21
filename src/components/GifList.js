import React from "react";

function GifList({data}){
    // if(!data || data.length === 0){
    //     return <div>Loading...</div>
    //   }
   
   
    return (
        <div>
          <ul> 
            {data.map((datas)=> (
          <li key={datas.url}>
            <img src={datas.url} alt={datas.title}/>
         </li>
            ))
          }  
          </ul>
        </div>
    )
}
export default GifList