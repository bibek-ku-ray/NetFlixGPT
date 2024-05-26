import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData, checkValidateName } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR, BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    if (isSignInForm) {
      const message = checkValidateData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);

      if (message) return;

      // Signed in logic from firebase docs
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      const nameMessage = checkValidateName(name.current.value);
      if (nameMessage) {
        setErrorMessage(nameMessage);
        return;
      }
      const message = checkValidateData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message) return;

      // Signed up logic from firebase docs
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //updating user
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen"
          src={BACKGROUND_IMAGE}
          alt="backgroundImage"
        />
      </div>
      <div className="absolute z-20 w-screen h-screen flex justify-center items-center">
        <form
          className=" w-3/12 absolute bg-black bg-opacity-90 text-white flex flex-col justify-center items-center mx-auto my-36 pb-6 right-0 left-0 rounded-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-3xl m-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 m-2 w-4/5 mb-3 rounded-md bg-gray-800"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 m-2 w-4/5 mb-3 rounded-md bg-gray-800"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-4/5 mb-3 rounded-md bg-gray-800"
          />
          <button
            className=" w-4/5 p-2 m-4 bg-red-600 rounded-md font-semibold"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="pb-2 w-4/5 text-red-600 font-semibold text-center">
            {errorMessage}
          </p>
          <p
            className="cursor-pointer text-slate-300 font-semibold"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up"
              : "Already Have Account? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
