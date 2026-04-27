import React from "react";
import styles from "../../style";
import portfolios from "../../components/portfolio";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className={`flex md:flex-row flex-col text-white justify-between items-center relative overflow-hidden sm:${styles.paddingY} ${styles.paddingX}`}
    >
      <div className=" mb-12">
        <h3
          data-aos="fade-up"
          data-aos-delay="300"
          className="h5_headding_gradient uppercase tracking-[3px]"
        >
          Portfolio Showcase
        </h3>

        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-[38px] font-bold mb-4 h1_headding_gradient leading-tight"
        >
          Turning Ideas Into <br className="sm:block hidden" />
          Powerful Digital Experiences
        </h2>

        <strong
          data-aos="fade-up"
          data-aos-delay="300"
          className="block text-[22px] font-normal text-gray-300 leading-relaxed"
        >
          Explore a collection of projects crafted with creativity, precision,
          and modern technologies. From responsive websites to full-stack web
          applications, each project reflects my passion for building scalable,
          user-focused, and visually engaging solutions.
        </strong>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
        >
          {portfolios.map((portfolio, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 rounded-md border border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="w-full h-64 object-fit cursor-pointer transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-center px-3 py-6 transition-all duration-300 group-hover:bg-gray-950">
                <h2 className="font-serif cursor-pointer text-lg font-bold text-gray-300 mb-2 group-hover:text-blue-600 transition-colors">
                  {portfolio.title.slice(0, 15) + "..."}
                </h2>
                <Link
                  to={`/project/${portfolio.id}`}
                  className="font-serif cursor-pointer text-sm text-blue-500 font-extralight rounded-md px-3 py-1 border border-gray-800 group-hover:bg-gray-950 group-hover:text-white transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
