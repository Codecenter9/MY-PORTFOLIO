import React, { useState } from "react";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.webp";
import navLinks from "../../components/index.js";
import "../../components/css/styles.scss";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex navbar_gradient_background  justify-between items-center navbar">
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
            className={`font-poppins font-normal cursor-pointer text-[18px] ${
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
          } p-6 sidebar_gradient absolute top-20 right-0 mt-[-20px] min-w-[240px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.id ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
