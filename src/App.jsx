import React from 'react';

import { Hero, Amenities, Places,Testimonials,
Contact } from './components';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className='main'>
        <Hero/>
        <Amenities/>
        <Places/>
        <Testimonials/>
        <Contact/>
      </div>
    </BrowserRouter>
  )
}

export default App