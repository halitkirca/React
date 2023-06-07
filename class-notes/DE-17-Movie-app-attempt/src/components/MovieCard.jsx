import React from 'react'
import "./MovieCard.css";

const MovieCard = ({props}) => {
  return (
    <div className='card'>
        <img src={"https://image.tmdb.org/t/p/w1280" + props.poster_path} width={"350px"} alt="" />    
        <div>
            <h1>{props.title}</h1>
            <p>Overview: {props.overview}</p>
        </div>
    </div>
  )
}

export default MovieCard