import React, { useEffect, useState } from "react";
import logo from "../Images/logo_main.png";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../constants/RouteNames";
import MyProfileComponent from "./MyProfileComponent";

function Header() {
  const navigate = useNavigate();

  const [loggedUser, setLoggedUser] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("logintoken");
    if (token) {
      setLoggedUser(true);
    }
    if (!token && window.location.pathname !== "/register") {
      setLoggedUser(false);
      navigate("/");
    }
  }, [window.location.pathname]);
  return (
    <header className="bg-blue-700 sticky top-0 mx-auto !z-40 flex w-full items-center justify-between border-b border-gray-500 p-3 ">
      <div className="w-1/3">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 mr-2 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <h1 className="text-5xl text-center text-cyan-800 w-1/3  font-bold font-mono">
        QuePax
      </h1>

      <div className="w-1/3 flex justify-end items-center">
        {loggedUser ? (
          <MyProfileComponent />
        ) : (
          <>
            <p></p>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
