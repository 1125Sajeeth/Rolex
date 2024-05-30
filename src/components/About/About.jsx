import React from 'react'
import './About.css'
import about_image from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'



const About = ({setplaystate}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_image} alt="" className='about-image' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setplaystate(true)}}/>

      </div>  
      <div className="about-right">
        <h3>About Our Tailoring Shop</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative sartorial journey with our shop's exquisite craftsmanship. Our cutting-edge techniques are designed to empower clients with unique, custom-tailored garments that stand out in the world of fashion.</p>
        <p>With a focus on innovation, hands-on craftsmanship, and personalized attention, our services prepare aspiring fashion enthusiasts to make a meaningful impact in wardrobes, events, and communities.</p>
        <p>Whether you aspire to become a master tailor creating bespoke garments, a skilled seamstress perfecting every stitch, a fashion consultant offering expert advice, or a boutique owner curating unique collections, our diverse range of services offers the perfect pathway to achieve your dreams and unlock your full potential in shaping the future of style.</p>
      </div>
    </div>
  )
}

export default About