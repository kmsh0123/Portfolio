import React from 'react'
import TypingEffect from './TypingEffect'

const Hero = () => {
  return (
      <section className=' h-app hero-bg relative' id="home">
        <div className=' absolute h-full w-full hero-overlay'></div>
        <div className=' flex h-screen items-center justify-center'>
           <div className=' z-10 text-center text-white backdrop-blur'>
           <h1 className=' text-6xl font-semibold mb-3 lg:text-7xl text-portfolio-base'>I am Mauk Thein Kha</h1> 
           <TypingEffect/>
           </div>
        </div>
    </section>
  )
}

export default Hero