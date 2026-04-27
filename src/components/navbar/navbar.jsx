import React, { useState, useEffect } from "react";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.webp";
import navLinks from "../../components/index.js";
import "../../components/css/styles.scss";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex justify-between items-center navbar z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "fixed top-0 left-0 py-3 shadow-xl backdrop-blur-xl bg-white/10"
          : "relative py-3 bg-transparent"
      }`}
    >
      <a href="/#">
        <img
          loading="lazy"
          src={logo}
          alt="logo"
          className="sm:ml-20 ml-5"
          width={100}
          height={50}
        />
      </a>

      <ul className="list-none sm:flex hidden justify-center items-center mr-8">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] transition-colors duration-300 ${
              active === nav.id ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.id)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          loading="lazy"
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-10 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6  absolute top-20 right-4 min-w-[240px] rounded-xl sidebar backdrop-blur-xl bg-black/30 border border-white/10`}
        >
          <ul className="list-none w-full flex justify-end items-start flex-col">
            {navLinks.map((nav, index) => (
              <a
                href={`#${nav.id}`}
                key={nav.id}
                className={`font-poppins py-1 group w-full border-b border-gray-900 font-medium cursor-pointer text-[16px] transition-colors duration-300 ${
                  active === nav.id ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.id);
                  setToggle(false);
                }}
              >
                <span className="inline-block group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                  {nav.title}
                </span>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
