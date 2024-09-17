import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuSun } from "react-icons/lu";

const NavigationBar = () => {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  // * useEffect to handle theme changes
  useEffect(() => {
    // If the user has selected an theme, get that theme
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, []);

  const [selectedColorScheme, setselectedColorScheme] = useState("light");

  const handleColorSchemeChange = () => {
    const newTheme = selectedColorScheme === "light" ? "dark" : "light";

    document.body.classList.remove(selectedColorScheme);

    document.body.classList.add(newTheme);

    setselectedColorScheme(newTheme);
  };
  const handleHamburgerMenu = () => {
    setOpenHamburgerMenu(!openHamburgerMenu);
  };
  const HamburgerMenuIcon = () => {
    return (
      <div
        className="h-4 w-6 relative bg-transparent cursor-pointer transition-all lg:hidden"
        onClick={handleHamburgerMenu}
      >
        {/* Top line (shrinks when menu is open) */}
        <span
          className={`absolute bg-text h-[3px] w-full top-0 ${
            openHamburgerMenu ? "opacity-0" : "opacity-100"
          }`}
        ></span>

        {/* Middle line (rotates to 45 degrees) */}
        <span
          className={`absolute bg-text h-[3px] w-full top-[50%] ${
            openHamburgerMenu ? "rotate-45" : "rotate-0"
          }`}
        ></span>

        {/* Bottom line (rotates to -45 degrees) */}
        <span
          className={`absolute bg-text h-[3px] w-full top-[50%] ${
            openHamburgerMenu ? "-rotate-45" : "rotate-0"
          }`}
        ></span>

        {/* Bottom-most line (shrinks when menu is open) */}
        <span
          className={`absolute bg-text h-[3px] w-full top-[100%] ${
            openHamburgerMenu ? "opacity-0" : "opacity-100"
          }`}
        ></span>
      </div>
    );
  };
  const NavLinks = () => {
    return (
      <>
        <Link className="p-4 text-2xl md:text-xl md:font-bold" to="/">
          Home
        </Link>
        <Link className="p-4 text-2xl md:text-xl md:font-bold" to="/blog">
          Blog
        </Link>
        <Link className="p-4 text-2xl md:text-xl md:font-bold" to="/about">
          About
        </Link>
        <Link className="p-4 text-2xl md:text-xl md:font-bold" to="/contact">
          Contact
        </Link>
        <Link
          className="p-4 text-2xl md:text-xl md:font-bold"
          to="/destinations"
        >
          Destinations
        </Link>
        <Link className="p-4 text-2xl md:text-xl md:font-bold" to="/register">
          Register
        </Link>
        <button
          className="rounded-full bg-text h-6 w-fit text-accentPrimary flex justify-center items-center p-4"
          onClick={handleColorSchemeChange}
        >
          Change Theme <LuSun className="pl-1" />
        </button>
      </>
    );
  };
  const MobileDropDownMenu = () => {
    return (
      <div
        className={`${
          openHamburgerMenu
            ? "max-h-[calc(100%-96px)] bg-body"
            : "max-h-0 bg-transparent"
        } w-screen absolute left-0 top-24 transition-all duration-500 ease-in-out`}
      >
        {openHamburgerMenu && (
          <div
            className="w-full flex flex-col gap-2 items-center justify-between pb-4 text-text font-qs bg-body opacity-90"
            onClick={handleHamburgerMenu}
          >
            <NavLinks />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="absolute top-0 w-screen h-24 bg-transparent flex justify-between items-center p-6">
      <h1 className="text-text font-bold font-qs">GoWithSoph</h1>
      <div className="hidden lg:flex justify-between items-center font-qs text-text">
        <NavLinks />
      </div>
      <HamburgerMenuIcon />
      <MobileDropDownMenu />
    </div>
  );
};

export default NavigationBar;
