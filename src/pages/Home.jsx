import React from 'react'
import {  motors } from '../constant/data'
import Hero from '../components/Hero'


// Import css files
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

const Home = () => {


  return (
    <div >
    <div>
    
       <Hero/>
       </div>

       <div className='bg-white/50 w-96 animate-pulse shadow-lg shadow-black rounded-lg p-2 ml-16 mt-28'>
        <h2 className='text-2xl ml-8'>we are working in this brands</h2>
       </div>
       
    <div className='  '>
      <h>Powered by eth
      </h>
      </div>
      
    </div>
  )
}

export default Home