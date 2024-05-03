import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/0e1543b7-90c5-4c31-bd87-feb483138d31/NP-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7e744763-782a-4c73-bc73-3a7d048b93ab_small.jpg"
          alt="backgroundImage"
        />
      </div>
      <div className="absolute z-20 w-screen h-screen flex justify-center items-center">
        <form className=" w-3/12 absolute bg-black bg-opacity-90 text-white flex flex-col justify-center items-center mx-auto my-36 pb-6 right-0 left-0 rounded-lg">
          <h1 className="font-semibold text-3xl m-4">
            {isSignInForm ? "Sign Up" : "Sign In"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 m-2 w-4/5 mb-3 rounded-md bg-gray-800"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 m-2 w-4/5 mb-3 rounded-md bg-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-4/5 mb-3 rounded-md bg-gray-800"
          />
          <button className=" w-4/5 p-2 m-4 bg-red-600 rounded-md font-semibold">
            {isSignInForm ? "Sign Up" : "Sign In"}
          </button>
          <p
            className="cursor-pointer text-slate-300 font-semibold"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign In"
              : "Already Have Account? Sign Up"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
