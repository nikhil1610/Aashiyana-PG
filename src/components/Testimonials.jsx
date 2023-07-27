import React from 'react'
import { SectionWrapper } from '../hoc'
import {testimonials} from '../constants'
import { motion } from 'framer-motion'
import {fadeIn} from "../utils/motion"

const Testimonial = ({index,testimonial,name,company,designation,image}) =>{
  return(
    <motion.div 
    variants={fadeIn("","spring",0.5*index,0.75)}
    className='bg-black p-10 rounded-3xl
     xs:w-[320px] w-[400px]'
    >
      <p className="text-white font-black text-[48px]">"</p>
      
      <div className="mt-1">
        <p className="text-white tracking-wider
        text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between
        items-center gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-white font-medium
            text-[16px]">
              <span className="blue-text-gradient">@
              </span>{name}</p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}</p>
          </div>

          <img src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full
             object-cover"/>
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
      <div className='testimonials flex flex-wrap gap-4'>
        {testimonials.map((testimonial,index)=>(
          <Testimonial key={index} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Testimonials,"");