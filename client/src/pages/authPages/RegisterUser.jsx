import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineModeOfTravel } from "react-icons/md";

const RegisterUser = () => {
  // TODO - state for form data. 
  const [formData, setFormData] = useState({
    email: '',
    name:'',
    password:'',
  })
  // TODO - handleChange function for form data.
  // TODO - handle submit function with axios. 
  return (
    <div className="w-screen h-screen bg-body">
      {/* Form Wrapper */}
      <div className="w-full h-full bg-transparent flex justify-center items-center lg:flex-row lg:space-x-4 lg:justify-evenly">
        <form className="w-10/12 h-[80%] bg-body mt-24 rounded-md lg:w-1/3 flex flex-col items-center">
          <div>
            <h2 className="text-text font-qs text-2xl mt-4">
              <MdOutlineModeOfTravel size={30} className="mx-auto mb-4" />
              
              GoWithSoph
            </h2>
          </div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="text"
            name="email"
            required
            className="rounded-sm p-4 font-qs mb-4 w-3/4 my-4 focus:border-accentPrimary focus:ring-accentPrimary focus:ring-2 focus:outline-none text-text bg-body placeholder:text-text placeholder:italic border-b-2 border-accentPrimary"
            placeholder="Enter your email..."
          />
          <label htmlFor="Name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="email"
            required
            className="rounded-sm p-4 font-qs mb-4 w-3/4 my-4 focus:border-accentPrimary focus:ring-accentPrimary focus:ring-2 focus:outline-none text-text bg-body placeholder:text-text placeholder:italic border-b-2 border-accentPrimary"
            placeholder="Username"
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="rounded-sm p-4 font-qs mb-4 w-3/4 my-4 focus:border-accentPrimary focus:ring-accentPrimary focus:ring-2 focus:outline-none text-text bg-body placeholder:text-text placeholder:italic border-b-2 border-accentPrimary"
            placeholder="Password"
          />
          <button className="p-4 bg-accentPrimary rounded-md text-body hover:bg-gradient-to-r from-accentPrimary to-accentSecondary w-3/4 font-qs my-4 text-lg tracking-wider">
            {" "}
            Register
          </button>
          // TODO Link to loging page
          <p className="text-text font-qs">
            Already have an account?{" "}
            <Link className="font-qs text-accentPrimary hover:text-accentSecondary">
              Login
            </Link>{" "}
          </p>
        </form>
        {/* image div */}
        <div className="hidden lg:flex lg:mt-24 lg:w-1/3 lg:h-[80%]">
          <img
            src="./images/vernonFalls.jpg"
            alt="Vernon Falls"
            className="w-full h-full object-cover object-bottom rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
