import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Paths from './Routes/Paths'
import Chatbot from './Pages/Chatbot'


const App = () => {
  return (
    <>
    <Navbar/>
    <Paths/>
    <Chatbot/>
    </>
  )
}

export default App