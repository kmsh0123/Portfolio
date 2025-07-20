import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsPlusCircle } from "react-icons/bs";
import portfolio_1 from "../img/portfolio_1.png";
import portfolio_2 from "../img/portfolio_2.png";
import portfolio_3 from "../img/portfolio_3.png";
import linkadepa_pos from "../img/linkadepa_pos.png";
import alpha_ui from "../img/alpha-ui.png";
import game_ui from "../img/game-ui.png";
import cblife_ui from "../img/cblife-ui.png";
import duno_asia_ui from "../img/duno-asia-ui.png";
import easy_bank_ui from "../img/easy-bank-ui.png";
import e_commerce_ui from "../img/e-commerce-ui.png";
import vanilla_ui from "../img/vanilla-ui.png";
import borntobeconsult from "../img/borntobeconsult.png";
import speakeasyspain from "../img/speakeasyspain.png";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div id="work">
      <section className=" flex flex-col justify-center items-center mb-16 sm:p-5">
        <h1 className=" text-3xl lg:text-5xl font-bold uppercase mb-3">
          Portfolio
        </h1>
        {/* <p className=" text-[#4e4e4e] mb-4 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p> */}
        <div className=" w-[40px] h-[5px] bg-portfolio-fill"></div>
      </section>
      <section className=" my-10 container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
        <div className=" card ">
          <div className=" overflow-hidden">
            <img src={linkadepa_pos} className=" " alt="" />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl text-[#1e1e1e] font-[500] mb-3 leading-5">
                Full Stack POS
              </h1>
              <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
                <span className="text-portfolio-base text-xl">POS Web App</span>
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <Link to="http://103.47.185.119:9002/login" target="_blank">
                <BsPlusCircle />
              </Link>
            </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
            <img src={alpha_ui} className=" " alt="" />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl text-[#1e1e1e] font-[500] mb-3 leading-5">
                Alpha Admin Dashboard(Next.Js)
              </h1>
              <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
                <span className="text-portfolio-base text-xl">
                  CRUD Operation
                </span>
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <Link to="https://admin.alpha.axra.app/en/login" target="_blank">
                <BsPlusCircle />
              </Link>
            </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
            <img src={game_ui} className="" alt="" />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl text-[#1e1e1e] font-[500] mb-3 leading-5">
                Full Stack Game_UI With RBAC
              </h1>
              <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
                <span className=" text-portfolio-base text-xl">Web App</span>
                {/* <span className="">18 Sep. 2018</span> */}
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <Link to="https://sweet-dusk-515e59.netlify.app/" target="_blank">
                <BsPlusCircle />
              </Link>
            </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
            <img src={cblife_ui} className="" alt="" />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl text-[#1e1e1e] font-[500] mb-3 leading-5">
                CBLife Admin Dashboard
              </h1>
              <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
                <span className=" text-portfolio-base text-xl">
                  CRUD Operation
                </span>
                {/* <span className="">18 Sep. 2018</span> */}
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <Link to="https://admin.cblife.axra.app/" target="_blank">
                <BsPlusCircle />
              </Link>
            </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
            <img src={portfolio_3} className="" alt="" />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl text-[#1e1e1e] font-[500] mb-3 leading-5">
                Premium Theme Admin Dashboard
              </h1>
              <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
                <span className=" text-portfolio-base text-xl">
                  Dashboard UI
                </span>
                {/* <span className="">18 Sep. 2018</span> */}
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <Link
                to="https://64af84836e26ce1831b85e49--classy-starlight-f92723.netlify.app/"
                target="_blank"
              >
                <BsPlusCircle />
              </Link>
            </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
            <img src={portfolio_2} className="" alt="" />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl text-[#1e1e1e] font-[500] mb-3 leading-5">
                Premium Theme E-commerce
              </h1>
              <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
                <span className=" text-portfolio-base text-xl">Web UI</span>
                {/* <span className="">18 Sep. 2018</span> */}
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <Link to="https://shopper-liard.vercel.app/" target="_blank">
                <BsPlusCircle />
              </Link>
            </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
            <img src={duno_asia_ui} className="" alt="" />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl text-[#1e1e1e] font-[500] mb-3 leading-5">
                Duno Asia Web UI
              </h1>
              <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
                <span className=" text-portfolio-base text-xl">Web UI</span>
                {/* <span className="">18 Sep. 2018</span> */}
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <Link
                to="https://mellifluous-kulfi-c288cd.netlify.app/"
                target="_blank"
              >
                <BsPlusCircle />
              </Link>
            </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
            <img src={borntobeconsult} className="" alt="" />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl text-[#1e1e1e] font-[500] mb-3 leading-5">
                School Information Website(Next.Js)
              </h1>
              <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
                <span className=" text-portfolio-base text-xl">Web UI</span>
                {/* <span className="">18 Sep. 2018</span> */}
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <Link to="https://borntobeconsultant.com/" target="_blank">
                <BsPlusCircle />
              </Link>
            </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
            <img src={speakeasyspain} className="" alt="" />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl text-[#1e1e1e] font-[500] mb-3 leading-5">
                School Information Website
              </h1>
              <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
                <span className=" text-portfolio-base text-xl">Web UI</span>
                {/* <span className="">18 Sep. 2018</span> */}
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <Link to="https://speakeasyspain.netlify.app/" target="_blank">
                <BsPlusCircle />
              </Link>
            </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
            <img src={easy_bank_ui} className="" alt="" />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl text-[#1e1e1e] font-[500] mb-3 leading-5">
                Easy Bank UI
              </h1>
              <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
                <span className=" text-portfolio-base text-xl">Web UI</span>
                {/* <span className="">18 Sep. 2018</span> */}
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <Link
                to="https://easy-bank-landing-pj.netlify.app/"
                target="_blank"
              >
                <BsPlusCircle />
              </Link>
            </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
            <img src={e_commerce_ui} className="" alt="" />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl text-[#1e1e1e] font-[500] mb-3 leading-5">
                E-commerce UI
              </h1>
              <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
                <span className=" text-portfolio-base text-xl">Web UI</span>
                {/* <span className="">18 Sep. 2018</span> */}
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <Link
                to="https://gleeful-palmier-8dfa10.netlify.app/"
                target="_blank"
              >
                <BsPlusCircle />
              </Link>
            </span>
          </div>
        </div>
        <div className=" card">
          <div className=" overflow-hidden">
            <img src={vanilla_ui} className="" alt="" />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-2xl text-[#1e1e1e] font-[500] mb-3 leading-5">
                Vanilla UI
              </h1>
              <div className=" text-[0.8rem] text-[#4e4e4e] font-normal">
                <span className=" text-portfolio-base text-xl">Web UI</span>
                {/* <span className="">18 Sep. 2018</span> */}
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <Link to="https://sage-blini-ce2002.netlify.app/" target="_blank">
                <BsPlusCircle />
              </Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
