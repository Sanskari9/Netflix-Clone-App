import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"

const Row = ({title, fetchUrl, isLargeRow = false}) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row_posters">
      {movies.map((movie) =>
        ((isLargeRow && movie.poster_path ) || (!isLargeRow && movie.backdrop_path)) && (
            <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
        key={movie.id}
        src={`https://image.tmdb.org/t/p/original/${
            isLargeRow? movie.poster_path : movie.backdrop_path
        }`} alt={movie.name} />
        ))
        
      }
      </div>
    </div>
  )
}

export default Row
