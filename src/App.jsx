import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Tuining from './pages/Tuining'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-green-500/80 to-pink-500  bg-black/50'>
      <Nav />

      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/services' element = {<Services/>}></Route>
        <Route path='/tuining' element = {<Tuining/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App