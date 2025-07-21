import React from "react";
import "../../components/css/styles.scss";
const CTA1 = () => {
  return (
    <div
      className="cta1_section bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 sm:mt-[50px]  w-[90%] mx-auto p-8 shadow-lg rounded-xl text-white text-center"
      data-aos="zoom-in"
    >
      <strong className="text-[18px] md:text-[24px] font-semibold leading-relaxed">
        Ready to take your project to the next level? Let’s build something
        great together!
      </strong>
    </div>
  );
};

export default CTA1;
