import React from 'react'
import './App.css'
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
    <div className=''>
      <Hero/>
      <About/>
     <Blog/>
    <Work/>
    </div>
    </>
  )
}

export default App;
