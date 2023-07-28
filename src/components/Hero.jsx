import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col gap-3'>
      <nav className='navbar w-full flex justify-between items-center px-5 py-3
       fixed top-0 z-20 bg-white'>
        <div className='flex justify-center items-center gap-2'>
          <Link
          to={"/"}
          onClick={()=>{
            window.scrollTo(0,0)
          }}
          >
            <p className='font-satoshi font-extrabold text-xl '>Aashiyana PG &nbsp;<span className='sm:inline-block hidden font-extrabold'>| PG for Boys</span></p>
          </Link>
        </div>
        <div>
          <ul className='font-satoshi font-bold text-black text-[16px] list-none flex gap-2 cursor-pointer'>
            <li><a href='#services'>Services</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a href='#contact'>Get Directions</a></li>
          </ul>
        </div>
      </nav>
      <div className='banner'>
        <p className='text-xl font-bold
         font-sans'>
          AASHIYANA PG | A HOME AWAY FROM HOME
        </p>
      </div>
    </div>
  )
}

export default Hero