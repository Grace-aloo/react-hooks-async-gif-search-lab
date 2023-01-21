import React from 'react'

const GifList = ({data}) => {
  return (
    <ul className='gif-container'>
      {data.map((gif) => (
        <li  key={gif.url}>
          <img src={gif.url} alt="gif" />
        </li>
      ))}
  </ul>
    
  )
}

export default GifList