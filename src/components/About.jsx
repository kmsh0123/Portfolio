import React from "react";
import myImage from "../img/myImage.jpg";

const About = () => {
  return (
    <div className=" py-20 bg-white" id="about">
      <div className=" container mx-auto px-2 sm:px-7 md:px-4 lg:px-20">
        <div className=" flex flex-col md:flex-row custom-shadow gap-6 px-5 py-12 sm:p-16">
          <div className=" w-full sm:w-11/12 md:w-1/2 ">
            <div className=" flex flex-col items-start sm:flex-row">
              <img
                src={myImage}
                alt=""
                className=" rounded w-[150px] md:h-[120px] lg:h-auto"
              />
              <div className=" mt-7 px-3 sm:mt-0 flex flex-wrap flex-col">
                <div className=" flex flex-wrap items-center">
                  <span className=" text-lg font-semibold me-2">Name: </span>
                  <span className=" text-slate-500 md:text-sm lg:text-base">
                    Mauk Thein Kha
                  </span>
                </div>
                <div className=" my-4 flex flex-wrap items-center">
                  <span className=" text-lg font-semibold me-2">Profile: </span>
                  <span className=" text-slate-500 md:text-sm lg:text-base">
                    ReactJs Front-End Developer
                  </span>
                </div>
                <div className="flex flex-wrap items-center  mb-4">
                  <span className=" text-lg font-semibold me-2">Email: </span>
                  <span className=" text-slate-500 md:text-sm lg:text-base">
                    mgmauktheinkha@gmail.com
                  </span>
                </div>
                <div className=" flex max-w-full flex-wrap items-center">
                  <span className=" text-lg font-semibold me-2">Phone: </span>
                  <span className=" text-slate-500 md:text-sm lg:text-base">
                    09962255530
                  </span>
                </div>
              </div>
            </div>
            {/* progress bar */}
            <div className=" mt-8 ">
              <p className=" font-semibold text-lg">Skills</p>
              <div className=" mt-6">
                <p className=" uppercase text-gray-800 text-base mb-2">
                  html 85%
                </p>
                <div className=" bg-[#CDE1F8] h-3">
                  <div className=" w-5/6 bg-portfolio-fill h-full"></div>
                </div>
              </div>
              <div className=" my-5">
                <p className=" uppercase text-gray-800 text-base mb-2">css 85%</p>
                <div className=" bg-[#CDE1F8] h-3">
                  <div className=" w-5/6 bg-portfolio-fill h-full"></div>
                </div>
              </div>
              <div>
                <p className=" uppercase text-gray-800 text-base mb-2">js 85%</p>
                <div className=" bg-[#CDE1F8] h-3">
                  <div className=" w-5/6 bg-portfolio-fill h-full"></div>
                </div>
              </div>
              <div className=" mt-6">
                <p className=" uppercase text-gray-800 text-base mb-2">
                  react 85%
                </p>
                <div className=" bg-[#CDE1F8] h-3">
                  <div className=" w-5/6 bg-portfolio-fill h-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full mt-12 md:mt-0 md:w-1/2">
            <div className=" mb-[15px]">
              <p className=" text-3xl font-semibold mb-5">About me</p>
              <div className=" w-[100px] h-[4px] bg-portfolio-fill"></div>
            </div>
            <p className=" text-xl text-gray-600 tracking-wide font-semibold">
            My name is <span className="text-portfolio-base font-semibold">Mauk Thein Kha.</span>
            I attended high school in <span className="text-portfolio-base font-semibold">2016</span>.
            </p>
            <p className=" text-xl text-gray-600 tracking-wide py-4 font-semibold">
            From <span className="text-portfolio-base font-semibold">December 2016 to February 2020</span>,I studied <span className="text-portfolio-base font-semibold">Physic major</span> at <span className="text-portfolio-base font-semibold">Bago University</span> until <span className="text-portfolio-base font-semibold">third year</span>. I started studying developer in 2017, but I will actually enter it in 2022.
            </p>
            <p className=" text-xl text-gray-600 tracking-wide font-semibold">
            <span className="text-portfolio-base font-semibold">2023 June to 2023 August</span> If I join the <span className="text-portfolio-base font-semibold">WorkShop program at MMSIT</span>,I will work with my team members on up to <span  className="text-portfolio-base font-semibold">3 projects</span>.
            There are <span className="text-portfolio-base font-semibold">Contact App</span>,<span className="text-portfolio-base font-semibold"> Premium Theme Design</span> and <span className="text-portfolio-base font-semibold">Admin Dashboard</span>.
            </p>
            <p className=" text-xl text-gray-600 tracking-wide pt-4 font-semibold">
            I am still showing my <span  className="text-portfolio-base font-semibold">capabilities</span> to companies that will work with me in the future.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;