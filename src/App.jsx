import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experiences from './Components/Experiences/Experiences'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experiences></Experiences>
    </div>
  )
}

export default App
