import React from 'react'
import HomePage from './pages/HomePage'
import {Route,Routes} from 'react-router-dom'
import Favourite from './pages/Favourite'
import Navbar from './components/Navbar'
import './Css/app.css'
import { MovieProvider } from './contexts/MovieContext'
const App = () => {
  return (
    <MovieProvider>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/favourite' element={<Favourite/>}/>
        </Routes>
      </main>  
    </MovieProvider>
  )
}

export default App

