import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'

const App = () => {

  const[playstate, setplaystate] = useState(false);

  return (
    <div>
      
      <Navbar/>
      <Hero/>  
      <div className='container'>
        <Title subtitle='OUR SERVICES' title='What We Offer'/>
        <Program/>
        <About setplaystate={setplaystate}/>
        <Title subtitle='Gallery' title='Shop Photos'/>
        <Campus/>
        <Title subtitle='Reviews' title='What Client Say'/>
        <Testimonials/>
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>  
      </div>
      <Videoplayer playstate={playstate} setplaystate={setplaystate}/>
      

      
    </div>
    
    
  )
}

export default App

