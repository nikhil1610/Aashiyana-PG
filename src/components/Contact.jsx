import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='directions'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.7586973440266!2d77.03046607528809!3d28.607014975678595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM2JzI1LjMiTiA3N8KwMDEnNTkuMCJF!5e0!3m2!1sen!2sin!4v1690355292332!5m2!1sen!2sin"
          width="600"
          height="450"
          className='rounded-sm'
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>

      </div>
    </div>
  )
}

export default Contact