import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {BsPlusCircle} from "react-icons/bs";

const Work = () => {
  return (
    <div>
    <section className=" flex flex-col justify-center items-center mb-16 sm:p-5">
        <h1 className=" text-3xl lg:text-5xl font-bold uppercase mb-3">Portfolio</h1>
        <p className=" text-[#4e4e4e] mb-4 text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className=" w-[40px] h-[5px] bg-portfolio-fill">

        </div>
      </section>
      <section className=" my-10 container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
        <div className=" card ">
          <div className=" overflow-hidden">
          <img
            src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg"
            className=" "
            alt=""
          />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
          <div className="">
          <h1 className=" text-[1.2rem] text-[#1e1e1e] font-[500] mb-3 leading-5">Lorem impsum dolor</h1>
          <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
            <span className=" text-portfolio-base">Web Design</span> /{" "}
            <span className="">18 Sep. 2018</span>
          </div>
          </div>
          <span className="text-portfolio-base text-[2.5rem]">
            <BsPlusCircle/>
          </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
          <img
            src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-2.jpg"
            className=" "
            alt=""
          />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
          <div className="">
          <h1 className=" text-[1.2rem] text-[#1e1e1e] font-[500] mb-3 leading-5">Loreda Cuno Nere</h1>
          <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
            <span className=" text-portfolio-base">Web Design</span> /{" "}
            <span className="">18 Sep. 2018</span>
          </div>
          </div>
          <span className="text-portfolio-base text-[2.5rem]">
            <BsPlusCircle/>
          </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
          <img
            src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-3.jpg"
            className=""
            alt=""
          />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
          <div className="">
          <h1 className=" text-[1.2rem] text-[#1e1e1e] font-[500] mb-3 leading-5">Mavrito Lana Dere</h1>
          <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
            <span className=" text-portfolio-base">Web Design</span> /{" "}
            <span className="">18 Sep. 2018</span>
          </div>
          </div>
          <span className="text-portfolio-base text-[2.5rem]">
            <BsPlusCircle/>
          </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
          <img
            src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-4.jpg"
            className=""
            alt=""
          />
          </div>
          <div className=" px-4 pt-7 pb-6 flex justify-between items-center">
          <div className="">
          <h1 className=" text-[1.2rem] text-[#1e1e1e] font-[500] mb-3 leading-5">Bindo Laro Cado</h1>
          <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
            <span className=" text-portfolio-base">Web Design</span> /{" "}
            <span className="">18 Sep. 2018</span>
          </div>
          </div>
          <span className="text-portfolio-base text-[2.5rem]">
            <BsPlusCircle/>
          </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
          <img
            src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-5.jpg"
            className=""
            alt=""
          />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
          <div className="">
          <h1 className=" text-[1.2rem] text-[#1e1e1e] font-[500] mb-3 leading-5">Studio Lena Mado</h1>
          <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
            <span className=" text-portfolio-base">Web Design</span> /{" "}
            <span className="">18 Sep. 2018</span>
          </div>
          </div>
          <span className="text-portfolio-base text-[2.5rem]">
            <BsPlusCircle/>
          </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
          <img
            src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-6.jpg"
            className=" "
            alt=""
          />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
          <div className="">
          <h1 className=" text-[1.2rem] text-[#1e1e1e] font-[500] mb-3 leading-5">Studio Big Bang</h1>
          <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
            <span className=" text-portfolio-base">Web Design</span> /{" "}
            <span className="">18 Sep. 2018</span>
          </div>
          </div>
          <span className="text-portfolio-base text-[2.5rem]">
            <BsPlusCircle/>
          </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
