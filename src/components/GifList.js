import React from "react";

function GifList({data}){
    const list = data.map((datas)=> {
    return <li>{datas}</li>
})
    return (
        <div>
          <ul>{list}</ul>
        </div>
    )
}
export default GifList