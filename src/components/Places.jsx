import React from 'react'
import { nearPlaces, photos } from '../constants'
import { SectionWrapper } from '../hoc'

const PlacesCard = ({name,link}) =>{
  return (
    <div className='flex flex-col rounded-xl w-[250px]
    bg-slate-300'>
      <img src={link} alt="gallery_image" 
      className='w-full rounded-md h-[235px]'/>
      <div className='w-full py-2 px-3'>
        <p className=''>{name}</p>
      </div>
    </div>
  )
}

const Places = () => {
  return (
    <div>
      <div>
        <h3 className='head_text'>Nearby Places</h3>
        <div className='mt-5 flex flex-wrap gap-4'>
        {nearPlaces.map((photo,index)=>(
          <PlacesCard key={index} {...photo}/>
        ))}
        </div>
      </div>
      <div className='gallery'>
        <h3 className='head_text'>Gallery</h3>
        <div className='flex flex-wrap gap-2'>
        {/* {photos.map((photo,index)=>(
          <GalleryCard key={index} {...photo}/>
        ))} */}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Places,""); 