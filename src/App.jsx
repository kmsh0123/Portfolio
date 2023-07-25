import React, { useState } from 'react'
import './App.css'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Chatbot from './Pages/Chatbot'
import Hero from './components/Hero'
import Work from "./Pages/Work";
import About from './components/About'
import Blog from "./Pages/Blog";
import Contact from './Pages/Contact'
import {AiTwotoneSetting } from "react-icons/ai"
import Testimony from './components/Testimony'
import Footer from './Pages/Footer'

const App = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle((pre) => !pre);
  };
  const [themeColor, setThemeColor] = useState("theme-default");
  return (
   
       <div className={themeColor} >
    <Navbar/>
    <Chatbot/>
      <Hero/>
      <div className="">
        <button
          onClick={handleClick}
          className={
            toggle
              ? " transition-all duration-[0.5s] translate-x-[2rem] fixed top-[4.625rem] flex items-center justify-center h-[3rem] w-[3rem] right-[2rem] bg-white shadow-xl rounded-sm"
              : "fixed top-[4.625rem] flex items-center justify-center h-[3rem] w-[3rem] transition-all duration-[0.5s] right-[18rem] bg-white shadow-xl rounded-sm"
          }
        >
          <AiTwotoneSetting className="text-xl setting absolute top-[50%] left-[50%]" />
        </button>

        <div
          className={
            toggle
              ? "bar transition-all duration-[0.5s] translate-x-[18rem] h-full bg-[#f5f5f5] w-72 shadow-xl fixed top-0 right-0"
              : "bar h-full bg-[#f5f5f5] w-72 shadow-xl fixed top-0 right-0 transition-all duration-[0.5s] delay-75"
          }
        >
          <div className=" bg-white p-5 text-start text-[#a7aeb8] font-bold shadow">
            Theme Customizer
          </div>
          <div className=" p-5">
            <div className=" mb-3">
              <span className=" text-[#6c737d] text-sm italic">
                Try a pre-built swatch!
              </span>
            </div>
            <div className="">
              <div>
                <div
                  className={` py-4 px-5 bg-gradient-to-r text-sm font-semibold from-[#0061f2] to-[#6900c7]  pointer-events-auto rounded-md mb-3 text-white`}
                  onClick={() => setThemeColor("theme-default")}
                >
                  Default
                </div>
                <div
                  className=" py-4 px-5 text-sm font-semibold bg-gradient-to-r from-[#1da1f5] to-[#8039da] rounded-md mb-3 text-white cursor-pointer"
                  onClick={() => setThemeColor("theme-flat")}
                >
                  Flat
                </div>
                <div
                  className="py-4 px-5 text-sm font-semibold bg-gradient-to-r from-[#f53b57] to-[#ff793f] rounded-md mb-3 text-white cursor-pointer"
                  onClick={() => setThemeColor("theme-sunset")}
                >
                  Sunset
                </div>
                <button
                  className="py-4 w-[100%] px-5 text-sm font-semibold bg-gradient-to-r from-[#6eabc2] to-[#506c6a] rounded-md mb-3 text-white cursor-pointer "
                  onClick={() => setThemeColor("theme-subtle")}
                >
                  Subtle
                </button>

                {/* <button className="p-2 bg-red-500 rounded-2xl shadow-xl active:bg-blue-500 focus:bg-red-500">
                  Click Me
                </button> */}
                <div
                  className="py-4 px-5 text-sm font-semibold bg-gradient-to-r from-[#06794f] to-[#0fa28b] rounded-md mb-3 text-white cursor-pointer"
                  onClick={() => setThemeColor("theme-seafoam")}
                >
                  Seafoam
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About theme={themeColor}/>
      <Services/>
     <Blog/>
     <Testimony/>
    <Work/>
    <Contact theme={themeColor}/>
    <Footer/>
    </div>
  )
}

export default App;
