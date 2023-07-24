import React from 'react'
import './App.css'
import Services from './components/Services'
import Testimony from './components/Testimony'
import Navbar from './components/Navbar'
import Paths from './Routes/Paths'
import Chatbot from './Pages/Chatbot'
import Work from './pages/Work'
import Hero from './components/Hero'
import About from './components/About'
import Blog from "./pages/Blog";

const App = () => {
  return (
    <>
    <Navbar/>
    <Paths/>
    <Chatbot/>
      <Hero/>
      <About/>
     <Blog/>
      <Services/>
      <Testimony/>
      <Work/>
    </>
  )
}

export default App;
