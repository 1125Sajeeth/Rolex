import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We craft elegant designs for a more stylish world </h1> 
            <p>Our masterful techniques and innovative designs empower clients with unique, custom-tailored garments that stand out in the world of fashion

            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>



        </div>

    </div>
  )
}

export default Hero