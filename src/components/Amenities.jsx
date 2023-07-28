import React from 'react'
import { amenities } from '../constants'
import {SectionWrapper} from '../hoc';

const AmenityCard = (name,Icon) =>{
  return (
    <div className='w-[120px] bg-gray-400 flex flex-col 
    justify-between items-center p-2 pt-3 gap-4 rounded-xl'>
      <Icon className="w-[30px] h-[30px]"/>
      <p className='w-full mb-1 text-center text-black text-[16px] 
      font-semibold whitespace-break-spaces'>
        {name}</p>

    </div>
  )
}

const Amenities = () => {
  return (
    <div className='amenities mt-7'>
      <h3 className='head_text'>Services Provided</h3>
      <div className='mt-5 flex gap-5 flex-wrap'>
        {amenities.map((amenity,index)=>(
          AmenityCard(amenity.name,amenity.icon)
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Amenities,"services");