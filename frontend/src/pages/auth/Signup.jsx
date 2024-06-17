import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsMeta } from "react-icons/bs";
import { Link } from "react-router-dom";
import UserForm from "./signupForm/SignUpFormHandler";

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
