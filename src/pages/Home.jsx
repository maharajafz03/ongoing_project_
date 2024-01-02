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
      <div className='mt-20 '>
        {motors.map((motor,id) => (
          
         <ul>   
          <div>
          <div className=' bg-black/50  p-5 relative'>
            <img src={motor.Img} key={id} className='  h-[250px] w-[300px] p-9 mr-24'/>
            
            </div>
                      </div>
          </ul>
        ))}
       
      </div>
  
      </div>
      
    </div>
  )
}

export default Home