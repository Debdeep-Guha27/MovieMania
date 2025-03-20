import React from 'react'
import '../Css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext'

function MovieCard({movie}) {
  const{isfav,addfav,removefav}=useMovieContext()
  const favourite=isfav(movie.id)
  function onclickfav(e) {
    e.preventDefault()

    if(favourite) removefav(movie.id)
    else addfav(movie)
  }
  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className='movie-overlay'>
            <button className={`favourite-btn ${favourite ? "active": ""}`} onClick={onclickfav}>❤</button>
        </div>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard
