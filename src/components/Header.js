import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full py-1 px-4 z-10 flex justify-between">
      <img
        className="w-56"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex p-2 justify-center items-center">
          <img className="w-10 h-10 mr-2" src={user?.photoURL} alt="profile" />
          <button
            className="bg-red-600 py-2 px-4 rounded-sm font-semibold text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
