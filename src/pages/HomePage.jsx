import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState,useEffect } from 'react';
import '../Css/Homepage.css'
import {SearchMovie,getPopularMovie} from '../services/Api';
function HomePage() {
  
  const [searchQuery, setsearchQuery] = useState("");
  const[movies,setMovies]=useState([]);
  const[error,setError]=useState(null);
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    const loadPopularMovies= async() => {
      try{
        const popularMovies= await getPopularMovie();
        setMovies(popularMovies);
      }
      catch(err) {
        console.log(err);
        setError("failed to load movies...");
      }
      finally {
        setLoading(false);
      }
    }
    loadPopularMovies();
  },[]);

  const handlesearch = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loading) return

    setLoading(true)
    try{
      const searchResults=await SearchMovie(searchQuery)
      setMovies(searchResults)
      setError(null)
    }
    catch(err) {
      console.log(err)
      setError("Failed to search movies...")
    }
    finally{
      setLoading(false)
    }
    setsearchQuery("");
  };
  return (
    <div className='home-page'>
      <form onSubmit={handlesearch} className='search-movie'>
        <input type="text" placeholder='search any movie'className='search-input' value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)}/>
        <button type='submit' className='search-btn'>Search</button>
      </form>
      {error && <div className='error-msg'>{error}</div>}
      {loading ? (<div className='loading'>Loading...</div>) : (<div className='movie-grid'>
        {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
      </div>)}  
    </div>
  );
}
export default HomePage;
