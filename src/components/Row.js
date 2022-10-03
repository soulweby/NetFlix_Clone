import React from 'react'
import { useState, useEffect } from "react";
import "./Row.scss"
import axios from "axios";
export default function Row({title, fetchUrl, isPoster}) {

const [movies, setMovies] = useState([]);

useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results)
    } 
    fetchData();
}, []);

  return (
      <div className="row">
          <h2 className='rowTitle'>{title}</h2>
          <div className='rowImages'>
              {movies.map((movie) => (
                  <div key={movie.id}>
                  {isPoster ? (

                      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                       className='rowImage' alt={movie?.title || movie.name || movie?.original_title}
                      />
                  ) : (
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                       className='rowImage' alt={movie?.title || movie.name || movie?.original_title}
                      />
                  )}
                  </div>
              ))}
          </div>

      </div>
  )
}
