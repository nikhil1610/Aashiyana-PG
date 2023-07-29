import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { close, menu } from '../assets'

const Hero = () => {

  const [ toggle, setToggle] = useState(false);

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
        <div className='sm:block hidden'>

          <ul className='font-satoshi font-bold text-black text-[16px] list-none flex gap-2 cursor-pointer'>
            <li><a href='#services'>Services</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a href='#contact'>Get Directions</a></li>
          </ul>
        </div>

    {/* For Mobile Devices*/}

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          className='w-[28px] h-[28px] object-contain cursor-pointer
          '
          src={toggle ? close : menu } 
          alt='menu' 
          onClick={()=> setToggle(!toggle)}/>

          <div className={`${toggle? 'flex' : 'hidden'} p-6 black-gradient absolute
          top-20 right-0 mx-4 my-4 min-w-[140px] z-10 rounded-xl`}>
            <ul className='font-satoshi font-bold text-black
            text-[16px] list-none flex flex-col gap-2 cursor-pointer'>
              <li onClick={()=> setToggle(!toggle)}><a href='#services'>Services</a></li>
              <li onClick={()=> setToggle(!toggle)}><a href='#contact'>Contact</a></li>
              <li onClick={()=> setToggle(!toggle)}><a href='#contact'>Get Directions</a></li>
            </ul>
          </div>
        </div>

      </nav>
      <div className='banner mx-auto max-w-7xl w-full sm:h-[500px] h-[400px] '>
        <p className='absolute text-2xl sm:text-5xl font-bold
         font-sans text-center top-[50%] left-[50%]'
         style={{
          transform: 'translate(-50%,-50%)'
         }}>
          AASHIYANA PG <span className=' pink-text-gradient'> <br/> A HOME AWAY FROM HOME </span>
        </p>
      </div>
    </div>
  )
}

export default Hero