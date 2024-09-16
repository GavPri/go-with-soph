import React, { useState } from "react";

const NavigationBar = () => {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  const handleHamburgerMenu = () => {
    setOpenHamburgerMenu(!openHamburgerMenu);
  };
  const HamburgerMenuIcon = () => {
    return (
      <div
        className="h-4 w-6 relative bg-body cursor-pointer transition-all"
        onClick={handleHamburgerMenu}
      >
        {/* Top line (shrinks when menu is open) */}
        <span
          className={`absolute bg-accentPrimary h-[3px] w-full top-0 ${
            openHamburgerMenu ? "opacity-0" : "opacity-100"
          }`}
        ></span>

        {/* Middle line (rotates to 45 degrees) */}
        <span
          className={`absolute bg-accentPrimary h-[3px] w-full top-[50%] ${
            openHamburgerMenu ? "rotate-45" : "rotate-0"
          }`}
        ></span>

        {/* Bottom line (rotates to -45 degrees) */}
        <span
          className={`absolute bg-accentPrimary h-[3px] w-full top-[50%] ${
            openHamburgerMenu ? "-rotate-45" : "rotate-0"
          }`}
        ></span>

        {/* Bottom-most line (shrinks when menu is open) */}
        <span
          className={`absolute bg-accentPrimary h-[3px] w-full top-[100%] ${
            openHamburgerMenu ? "opacity-0" : "opacity-100"
          }`}
        ></span>
      </div>
    );
  };
  const MobileDropDownMenu = () => {
    return (
      <div
        className={`${
          openHamburgerMenu
            ? "max-h-[calc(100%-96px)] bg-body"
            : "max-h-0 bg-transparent"
        } w-screen bg-body absolute left-0 top-24 transition-all duration-500 ease-in-out`}
      ></div>
    );
  };

  return (
    <div className="w-screen h-24 bg-body flex justify-between items-center p-6">
      <h1 className="text-text font-bold">GoWithSoph</h1>
      <HamburgerMenuIcon />
      <MobileDropDownMenu />
    </div>
  );
};

export default NavigationBar;
