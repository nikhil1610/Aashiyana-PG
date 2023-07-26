import React from 'react';

import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Places from './components/Places';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

import './App.css';


const App = () => {
  return (
    <div>
      <Hero/>
      <Amenities/>
      <Places/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App