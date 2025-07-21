import React, { useState, useEffect } from "react";
import styles from "../../style";
import "../css/styles.scss";
import LottieAnimation from "../hero/lottie.jsx";
import Stats from "../hero/stats";
import CloseMe from "../../assets/close.svg";

const Hero = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    let timer;
    if (openSidebar) {
      timer = setTimeout(() => {
        setOpenSidebar(false);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [openSidebar]);

  return (
    <section
      id="home"
      className={`hero_section ${styles.paddingY} relative overflow-hidden`}
    >
      <div
        className={`fixed top-[60px] sidebar_gradient_background left-0 h-[500px] w-[400px] bg-primary text-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-xl font-bold">Hire Me</h2>
          <button onClick={() => setOpenSidebar(false)}>
            <img
              loading="lazy"
              src={CloseMe}
              alt="Close"
              className="w-[18px] h-[18px] object-contain cursor-pointer"
            />
          </button>
        </div>

        <div
          role="dialog"
          aria-labelledby="hire-title"
          aria-modal="true"
          className="p-6 space-y-4"
        >
          <h2 className="text-2xl font-bold">🚀 Let’s Work Together!</h2>
          <p className="text-base leading-6 text-gray-300">
            I'm currently available for freelance or full-time roles. If you're
            looking for a passionate developer who builds clean, performant, and
            beautiful web apps—I'm ready to join your team!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <a
            href="tel:+982648798"
            className="flex sm:hidden bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            📞 Quick Call
          </a>

          <a
            href="https://t.me/abderrehim"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            💬 Chat on Telegram
          </a>
        </div>
      </div>

      <div
        className={`flex md:flex-row flex-col justify-between items-center w-full ${styles.paddingX}`}
      >
        <div className="left_section flex-1 flex flex-col sm:mt-[-180px]">
          <h1
            className="font-poppins font-semibold ss:text-[52px] text-[38px] text-white ss:leading-[100.8px] leading-[60px]"
            data-aos="zoom-in"
          >
            <span className="inline-block animate-wave origin-[70%_70%]">
              👋
            </span>
            <span className="text-gradient">, I'm Juhar</span>
          </h1>

          <h2
            className="font-poppins text-gradient font-semibold ss:text-[35px] text-[28px] text-white ss:leading-[50.8px] leading-[60px]"
            data-aos="zoom-in"
          >
            Full Stack Developer
          </h2>

          <p
            className="font-poppins font-medium ss:text-[26px] text-[23px] text-white leading-[35px] mt-4"
            data-aos="fade-up"
          >
            I'm a Full-Stack Developer specializing in creating seamless user
            experiences and building high-performance web applications.
          </p>

          <div
            className="buttons flex sm:flex-row items-center gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button
              className="hire_me bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 cursor-pointer"
              onClick={() => setOpenSidebar(true)}
            >
              Hire Me
            </button>
            <a
              href="#contact"
              className="get_in_touch border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300 cursor-pointer"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 relative`}>
          <LottieAnimation />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>

      <div className="status">
        <Stats />
      </div>
    </section>
  );
};

export default Hero;
