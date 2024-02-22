import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevPosition, setPrevisionPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setPrevisionPosition(window.scrollY);

    const handleScroll = () => {
      const currentPostion = window.scrollY;
      setIsVisible(prevPosition > currentPostion || currentPostion < 10);
      setPrevisionPosition(currentPostion);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevPosition]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed text-zinc-100 font-['montserrat'] w-full bg-zinc-900 transition-all duration-300 ${
        isVisible ? "" : "-translate-y-full"
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        <div className="">
          <Link
            activeClass="active cursor-pointer"
            to="introduction"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            <img
              className="md:h-16 h-12 bg-cover object-center  rounded-full "
              src="assets/img/logo.png"
              alt=""
            />
          </Link>
        </div>

        {/* menu hamburg */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <GiHamburgerMenu className="h-6 w-6 filler" />
          </button>
        </div>

        <div className="hidden md:flex gap-10 md:text-lg mx-10 md:items-center md:justify-center">
          <Link
            activeClass="active underline "
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer"
          >
            About
          </Link>
          <Link
            activeClass="active underline"
            to="skill"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer"
          >
            Skills
          </Link>
          <Link
            activeClass="active underline"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer"
          >
            Projects
          </Link>
          <Link
            activeClass="active underline"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "flex flex-col gap-2 w-full bg-zinc-900 md:hidden"
            : "hidden"
        }`}
      >
        <ul className=" w-full text-lg">
          <li className="bg-zinc-800 px-4 py-2 w-full  ">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="bg-zinc-800 px-4 py-2">
            <Link
              activeClass="active"
              to="Skill"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li className="bg-zinc-800 px-4 py-2">
            <Link
              activeClass="active "
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li className="bg-zinc-800 px-4 py-2">
            <Link
              activeClass="active "
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
