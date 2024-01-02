import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {

const [button, setbutton] = useState('contact')

const handleclick=() => {
setbutton('oops this is dummy site')

}

  return (
    <div className=' bg-black/50 shadow-lg shadow-white/30 p-3 '>
    <div className='absolute mt-3 '>
        <h3 className='text-lg font-mono relative ml-3 text-white'>Apex Car Clinic</h3>
    </div>
    <div className='flex justify-end space-x-3 gap-5 mr-36 p-1 '>
        <Link to='/' className=' text-black hover:bg-black hover:text-white rounded-lg scale-1 p-2' >Home</Link> 
        <Link to='/services' className=' text-black hover:bg-black hover:text-white rounded-lg scale-1 p-2'>Services</Link>
        <Link to='/tuining' className=' text-black hover:bg-black hover:text-white rounded-lg scale-1 p-2'>Tuining</Link>
        <Link to='/about' className=' text-black hover:bg-black hover:text-white rounded-lg scale-1 p-2'>About</Link>
        <button className= 'transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-blue-500 bg-gradient-to-r from-indigo-400 to-pink-500 text-white p-2  font-semibold rounded-lg text-lg hover:'
        onClick={handleclick}
        >{button}</button>
        </div>
    </div>
  )
}

//transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">


export default Nav