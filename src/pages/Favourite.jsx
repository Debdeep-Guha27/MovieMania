import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'
import '../Css/Favourite.css'
function Favourite() {
  const {favourites}=useMovieContext()
  if(favourites)
  {
    return(
      <div className='favourite'>
        <div className='movie-grid'>{favourites.map((movie)=>(<MovieCard movie={movie} key={movie.id}/>))}</div>
      </div>
      
    )
  }
  return (
    <div className='Favourites'>
      <h2>No Favourite Movies yet</h2>
    </div>
  )
}

export default Favourite;
