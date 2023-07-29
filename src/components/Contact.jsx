import React from 'react'
import { SectionWrapper } from '../hoc'

const Contact = () => {
  return (
  <div className='mb-16'>
    <h3 className='head_text'>Contact Us!</h3>
    {/* <div className='mt-5 flex flex-col-reverse gap-3 justify-center items-center'> */}
      <div className='mt-5 directions w-full h-[250px] sm:h-[450px] rounded-full'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.7586973440266!2d77.03046607528809!3d28.607014975678595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM2JzI1LjMiTiA3N8KwMDEnNTkuMCJF!5e0!3m2!1sen!2sin!4v1690355292332!5m2!1sen!2sin"
          width="90%"
          height="100%"
          className='rounded-md'
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>

      </div>
      <div className='mt-5 contact_details flex '>
        <button><a href='tel:+1234567890'>Call Us</a></button>
      </div>

    {/* </div> */}
    </div>
  )
}

export default SectionWrapper(Contact,"contact")