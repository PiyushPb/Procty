import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsMeta } from "react-icons/bs";
import { Link } from "react-router-dom";
import UserForm from "./signupForm/UserForm/UserForm";

const Signup = () => {
  const [step, setStep] = useState(1);

  function nextStep() {
    if (step < 5) setStep((lastStep) => lastStep + 1);
  }

  function back() {
    if (step > 1) setStep((lastStep) => lastStep - 1);
  }



  
  return (
    <div className="flex h-screen">
      <div className="p-10 flex-1 hidden xl:flex">
        <div className="h-full w-full bg-red-300">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="md:max-w-[750px] w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute p-10">
          <h2 className="text-2xl font-bold">Create Your Account</h2>
          <p>Lets create your profile to access exams!</p>

          {/* social login */}

          <div className="flex justify-between items-center mt-3 gap-3 flex-col sm:flex-row">
            <button className="student-login-btn w-full">
              <FcGoogle /> Continue with Google
            </button>
            <button className="student-login-btn w-full">
              <BsMeta />
              Continue with Meta
            </button>
          </div>

          {/* divider */}

          <div className="flex justify-center items-center gap-5 my-5">
            <div className="border-t-[2px] flex-1"></div>
            <p className="text-[12px] md:text-[15px]">or</p>
            <div className="border-t-[2px] flex-1"></div>
          </div>

          {/* Signup Form */}

          <UserForm />
          
          {/* <form autoComplete="off">
            <div className="flex flex-col my-5">
              <label
                className="text-[12px] md:text-[15px] font-semiBold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="border-[1px] border-gray-300 text-[12px] md:text-[15px] px-3 py-2 rounded-md outline-1 mt-2 outline-[#3645dc]/50"
              />
            </div>
            <div className="flex flex-col my-5">
              <label
                className="text-[12px] md:text-[15px] font-semiBold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="youremail@domain.com"
                className="border-[1px] border-gray-300 text-[12px] md:text-[15px] px-3 py-2 rounded-md outline-1 mt-2 outline-[#3645dc]/50"
              />
            </div>
            <div className="flex gap-5 my-5 flex-col sm:flex-row">
              <div className="flex flex-col flex-1">
                <label
                  className="text-[12px] md:text-[15px] font-semiBold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="border-[1px] border-gray-300 text-[12px] md:text-[15px] px-3 py-2 rounded-md outline-1 mt-2 outline-[#3645dc]/50"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label
                  className="text-[12px] md:text-[15px] font-semiBold"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="text"
                  placeholder="Confirm password"
                  className="border-[1px] border-gray-300 text-[12px] md:text-[15px] px-3 py-2 rounded-md outline-1 mt-2 outline-[#3645dc]/50"
                />
              </div>
            </div>
            <div className="flex gap-2 justify-start items-center my-5 text-[14px] md:text-[15px]">
              <input type="checkbox" name="" id="terms" className="" />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>
            <button className="student-login-btn w-full bg-[#3645dc] text-white hover:bg-[#3645dc]/90 text-[14px] md:text-[15px] py-3">
              Sign Up
            </button>
          </form> */}

          {/* Already have an account */}
          <div className="mt-3 text-[14px] md:text-[15px]">
            Allready have an account?{" "}
            <Link to="/login" className="text-[#3645dc] font-semibold">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
