import React from "react";
import "../../components/css/styles.scss";

const CTA1 = () => {
  return (
    <section
      className="cta1_section relative overflow-hidden  mx-auto sm:mt-[70px] my-[50px] px-6 sm:px-10 py-16 sm:py-24 text-center text-white shadow-2xl bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
      data-aos="zoom-in-up"
    >
      {/* Glow Background */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-[800px] mx-auto">
        <span className="uppercase tracking-[4px] text-sm font-medium text-white/80">
          Let’s Work Together
        </span>

        <h2 className="mt-4 text-[24px] sm:text-[42px] font-bold leading-tight">
          Ready to Turn Your Vision Into Reality?
        </h2>

        <p className="mt-4 text-[16px] sm:text-[18px] text-white/90 leading-relaxed">
          I build modern, fast, and scalable websites that help brands grow,
          attract customers, and stand out in the digital world.
        </p>

        <div className="mt-8 flex flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="hire_me bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 cursor-pointer"
          >
            Start Your Project
          </a>

          <a
            href="#portfolio"
            className="get_in_touch border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold py-2 px-6 rounded-full transition duration-300 cursor-pointer"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA1;
