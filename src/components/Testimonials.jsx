import React from 'react'
import { SectionWrapper } from '../hoc'
import {testimonials} from '../constants'
import { motion } from 'framer-motion'
import {fadeIn} from "../utils/motion"
import { FaStar } from "react-icons/fa"

const Testimonial = ({index,testimonial,name,stars,time,image}) =>{
  return(
    <motion.div 
    variants={fadeIn("","spring",0.5*index,0.75)}
    className='bg-black p-7 rounded-3xl
     xs:w-[320px] w-[400px]'
    >
      <div className='flex justify-between'>
        <p className='text-[#f3d22f] flex gap-1'>
          {[...Array(stars)].map((e,i)=>(
            <FaStar key={i}/>
          ))}
          </p>
        <p className='text-gray-400'>{time}</p>
      </div>
      <p className="text-white font-black text-[48px]">"</p>
      
      <div className="-mt-5">
        <p className="text-white tracking-wider
        text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-start
        items-center gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-white font-medium
            text-[16px]">
              <span className="blue-text-gradient">@
              </span>{name}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
const Testimonials = () => {
  return (
    <div>
      <h3 className='head_text'>Testimonials</h3>
      <p className='desc'>
        See What others have to say about us!
      </p>
      <div className='mt-5 testimonials flex flex-wrap gap-4'>
        {testimonials.map((testimonial,index)=>(
          <Testimonial key={index} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Testimonials,"");