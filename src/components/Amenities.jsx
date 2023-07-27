import React from 'react'
import { amenities } from '../constants'
import {SectionWrapper} from '../hoc';

const AmenityCard = ({name,icon}) =>{
  return (
    <div className='w-[50px] h-[50px] border-solid border-black'>
      <p>{name}</p>
    </div>
  )
}

const Amenities = () => {
  return (
    <div className='amenities mt-5'>
      <h3 className='head_text'>Services Provided</h3>
      <div className='flex gap-2'>
        {amenities.map((amenity,index)=>(
          <AmenityCard {...amenity}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Amenities,"services");