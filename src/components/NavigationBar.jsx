import React from "react";

const NavigationBar = () => {
  const HamburgerMenuIcon = () => {
    return (
      <div className="h-4 w-6 relative bg-body">
        <span className="absolute top-0 bg-accentPrimary h-[3px] w-full"></span>
        <span className="absolute top-[50%] bg-accentPrimary h-[3px] w-full"></span>
        <span className="absolute top-[50%] bg-accentPrimary h-[3px] w-full"></span>
        <span className="absolute top-[100%] bg-accentPrimary h-[3px] w-full"></span>
      </div>
    );
  };

  return (
    <div className="w-screen h-24 bg-body flex justify-between items-center p-6">
      <h1 className="text-text font-bold">GoWithSoph</h1>
      <HamburgerMenuIcon />
    </div>
  );
};

export default NavigationBar;
