import React from "react";
import styles from "../../style";
import "../../components/css/styles.scss";
import UserImage from "../../assets/userimage.webp";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className={`flex md:flex-row flex-col about_section text-white justify-between items-center relative overflow-hidden sm:${styles.paddingY} ${styles.paddingX}`}
    >
      <div className="planet planet-1"></div>
      <div className="planet planet-2"></div>
      <div className="planet planet-3"></div>
      <div className="planet planet-4"></div>
      <div className="planet planet-5"></div>

      <div className="left_section relative flex justify-end w-[100%] items-center md:ml-10 sm:h-screen">
        <div className="relative w-fit" data-aos="fade-right">
          <img
            loading="lazy"
            src={UserImage}
            alt="Juhar Endris"
            width={400}
            height={300}
            className="object-contain rounded-xl"
          />
          <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl font-semibold text-white bg-black/50 px-4 py-1 rounded-full">
            Juhar Endris
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="right_section flex flex-col justify-center items-start w-[100%] mt-10 md:mt-0 z-10 "
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <h3 className="h5_headding_gradient">ABOUT ME</h3>
        <h2 className="text-[32px] font-bold mb-4 h1_headding_gradient">
          Who I Am
        </h2>
        <p className="text-[20px] leading-[28px] sm:w-[85%] text-start">
          I'm a passionate Full-Stack Developer with a strong focus on crafting
          efficient and scalable web solutions. I enjoy solving real-world
          problems through clean, maintainable code and seamless user
          experiences. With a deep understanding of both frontend and backend
          technologies, I strive to build applications that are not only
          functional but also elegant and user-friendly.
        </p>
        <Link
          to="/details"
          className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-full shadow-lg transition duration-300"
        >
          Read More...
        </Link>
      </div>
    </section>
  );
};

export default About;
