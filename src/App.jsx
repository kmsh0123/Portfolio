import React from 'react'
import './App.css'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Chatbot from './Pages/Chatbot'
import Hero from './components/Hero'
import Work from "./Pages/Work";
import About from './components/About'
import Blog from "./Pages/Blog";
import Contact from './Pages/Contact'
import Testimony from './components/Testimony'

const App = () => {
  return (
    <>
    <Navbar/>
    <Chatbot/>
      <Hero/>
      <About/>
      <Services/>
     <Work/>
     <Testimony/>
     <Blog/>
    <Contact/>
    </>
  )
}

export default App;
