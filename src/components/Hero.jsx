import React from 'react'
import main_pic from '../assets/main_pic.jpg'

const Hero = () => {
  return (
    <div>
        <div className='mt-24 ml-28'>
            <img src={main_pic} className='h-[45%] w-[50%] rounded-lg shadow-lg shadow-black '/>
        </div>
        <div className='ml-[70%] relative '>
            <h1 className='font-extrabold text-4xl text-purple-950 absolute bottom-60 '>feel your machine <br/>
            Empower your way
            </h1>
            <p className='absolute bottom-52'>Revitalize Your Ride, Renew Your Drive!</p>
        </div>
    </div>
  )
}

export default Hero