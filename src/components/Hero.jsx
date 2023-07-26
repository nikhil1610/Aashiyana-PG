import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col gap-3'>
      <nav className='flex justify-between items-center p-5'>
        <div className='flex justify-center items-center gap-2'>
          <p>Aashiyana PG | PG for Boys</p>
        </div>
        <div>
          <ul className='flex flex-col gap-2 sm:flex-row'>
            <li>Services</li>
            <li>Contact</li>
            <li>Get Directions</li>
          </ul>
        </div>
      </nav>
      <div className='banner w-full '>

      </div>

    </div>
  )
}

export default Hero