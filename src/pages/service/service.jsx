import React from "react";
import styles from "../../style";
import "../../components/css/styles.scss";
import webIcon from "../../assets/web.webp";
import uiuxIcon from "../../assets/uiux.webp";
import apiIcon from "../../assets/api.webp";
import dbIcon from "../../assets/database.webp";
import seoIcon from "../../assets/seo.webp";
import HowWorks from "./howworks";

const services = [
  {
    icon: webIcon,
    title: "Web Development",
    description:
      "I build modern, responsive, and performance-optimized websites using the latest technologies like React, Tailwind, and more. Clean code and speed-focused delivery are my strengths.",
  },
  {
    icon: uiuxIcon,
    title: "UI/UX Design",
    description:
      "I design intuitive interfaces and seamless user experiences that are both aesthetically pleasing and functionally effective. Every component is user-first and pixel-perfect.",
  },
  {
    icon: apiIcon,
    title: "API Integration",
    description:
      "I connect apps with RESTful and third-party APIs to extend capabilities and improve efficiency. From authentication to payments, I handle integrations reliably and securely.",
  },
  {
    icon: dbIcon,
    title: "Database Solutions",
    description:
      "From schema design to performance tuning, I build robust and scalable database systems using MongoDB, PostgreSQL, or Firebase, tailored to your business needs.",
  },
  {
    icon: seoIcon,
    title: "SEO Optimization",
    description:
      "Using technical and on-page SEO techniques, I help improve your search engine rankings, page load speed, and content visibility for better organic reach and traffic.",
  },
];

const Service = () => {
  return (
    <section
      id="services"
      className={`services_section text-white relative overflow-hidden ${styles.paddingY} ${styles.paddingX}`}
    >
      {/* Section Headings */}
      <div className=" mb-12" data-aos="fade-right" data-aos-delay="300">
        <h3 className="h5_headding_gradient">SERVICES</h3>
        <h2 className="text-[38px] font-bold mb-4 h1_headding_gradient">
          What I Can Do For You
        </h2>
        <strong className="block text-[22px] font-normal text-gray-300">
          Empowering your ideas with efficient, elegant, and scalable solutions.
        </strong>
      </div>

      {/* Cards using Flexbox */}
      <div
        className="flex flex-wrap  gap-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br border border-pink-400/30 p-8 rounded-2xl shadow-lg w-full sm:w-[48%] lg:w-[31%] cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-row justify-between items-center gap-4">
              <img
                loading="lazy"
                src={service.icon}
                alt={service.title}
                className="w-20 h-20 mb-5 rounded-full"
              />
              <h3 className="text-2xl font-semibold mb-3 h3_heading_gradient">
                {service.title}
              </h3>
            </div>
            <p className="text-base ss:text-[20px] text-gray-300 leading-[28px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <HowWorks />
    </section>
  );
};

export default Service;
