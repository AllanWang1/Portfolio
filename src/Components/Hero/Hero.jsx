import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.PNG'

const Hero = () => {
  return (
    <div className='hero'>
      <div class="circle">
        <img className='profile' src={ profile_img } alt="A picture of Allan Wang" />
      </div>
      
      <h1><span>I'm Allan Wang, </span>Third Year Computer Science Student At UBC</h1>
      <p>I am a third-year Computer Science and Statistics student 
        at UBC with a strong passion for creating practical, 
        impactful applications and tackling challenges through 
        data-driven solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
