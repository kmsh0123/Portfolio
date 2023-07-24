import React, { useRef } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {RiGpsFill} from "react-icons/ri";
import {AiOutlineMobile,AiOutlineMail} from "react-icons/ai"
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedinIn} from "react-icons/fa"
import emailjs from '@emailjs/browser';
import Footer from './Footer';


const Contact = () => {
  const text = "Data sent successfully to mgmauktheinkha";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j772jlp', 'template_stdwn7k', form.current, 'dPZZg7qCdXFTlCSGw')
      .then((result) => {
        toast(result.text=text);
          // alert(result.text);
          // console.log("Hello Ok");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div >
      <div className='bg-[#0078ff] h-screen relative z-10 mt-16 overflow-auto md:overflow-hidden'>
      <div className='absolute z-[-1] opacity-50 bg-image background-container w-full h-[0%] pt-16 mb-3rem'/>
        <div className='absolute top-16 w-full '>
          <div className=' flex justify-between container mx-auto pt-16'>
            <div className="bg-white m-2 md:mx-[1%] lg:mx-[4.25rem] w-full flex flex-col md:flex-row justify-between">
            <form ref={form} onSubmit={sendEmail} className='pt-10 px-3 lg:p-10 w-full'>
              <h1 className='mb-6 text-[2rem] font-semibold b'>Send Message Us</h1>
              <div className="mb-6">
                <input type="text" name="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
              </div>
              <div className="mb-6">
                <input type="email" name="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
              </div>
              <div className="mb-6">
                <input type="text" name="user_subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject" required />
              </div>
              <div className="mb-6">
                <textarea rows="4" type="text" name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" required />
              </div>
              <button onClick={()=>toast()} type="submit" value="Send" className="text-white bg-[#0078ff] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block mx-auto text-xl">Send Message</button>
            </form>
            <form className='pt-10 pb-10 lg:pb-0 px-3 lg:p-10 lg:pr-10 w-full'>
              <h1 className='mb-6 text-[2rem] font-semibold c'>Get in Touch</h1>
              <p className='text-xl font-[300] mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
              <div className="">
                <div className="flex items-center gap-3 text-xl font-[300]">
                <RiGpsFill/>
                  <p className=''>No.13/(A)Pyinmapin,Mingalardon<br/>Yangon,Myanmar</p>
                </div>
                <div className="flex items-center gap-3 my-3 text-xl font-[300]">
                <AiOutlineMobile/>
                <p>+959962255530</p>
                </div>
                <div className="flex items-center gap-3 my-3 text-xl font-[300]">
                <AiOutlineMail/>
                <p>mgmauktheinkha@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-3 cursor-pointer">
                <span className='border-[3px] border-[#0078ff] hover:bg-[#0078ff] hover:border-[#cde1f8] hover:text-white w-12 h-12 rounded-full transition-all duration-300'>
                  <FaFacebook className='text-xl  block mx-auto mt-[7px]'/>
                </span>
                <span className='border-[3px] border-[#0078ff] hover:bg-[#0078ff] hover:border-[#cde1f8] hover:text-white w-12 h-12 rounded-full transition-all duratio   n-300'>
                  <FaInstagram className='text-xl  block mx-auto mt-[7px]'/>
                </span>
                <span className='border-[3px] border-[#0078ff] hover:bg-[#0078ff] hover:border-[#cde1f8] hover:text-white w-12 h-12 rounded-full transition-all duratio   n-300'>
                  <FaTwitter className='text-xl  block mx-auto mt-[7px]'/>
                </span>
                <span className='border-[3px] border-[#0078ff] hover:bg-[#0078ff] hover:border-[#cde1f8] hover:text-white w-12 h-12 rounded-full transition-all duratio   n-300'>
                  <FaLinkedinIn className='text-xl  block mx-auto mt-[7px]'/>
                </span>
              </div>

            </form>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Contact