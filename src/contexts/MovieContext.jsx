import { createContext,useState,useContext,useEffect } from "react";
const Moviecontext=createContext();
export const useMovieContext=() => useContext(Moviecontext)
export const MovieProvider= ({children}) => {
    const [favourites,setFavourites]=useState([])

    useEffect(()=>{
        const storedfavs=localStorage.getItem("favourites")
        if(storedfavs) setFavourites(JSON.parse(storedfavs))
         
    },[])
    useEffect(()=>{
        localStorage.setItem('favourites',JSON.stringify(favourites)) 
    },[favourites])
    const addfav=(movie)=>{
        setFavourites(prev=>[...prev,movie])
    }
    const removefav=(movieid) => {
        setFavourites(prev => prev.filter(movie=>movie.id !== movieid))
    }
    const isfav =(movieid) => {
        return favourites.some(movie=>movie.id===movieid)
    }
    const value={
        favourites,
        addfav,
        removefav,
        isfav
    }
    return <Moviecontext.Provider value={value}>
        {children}
    </Moviecontext.Provider>
}