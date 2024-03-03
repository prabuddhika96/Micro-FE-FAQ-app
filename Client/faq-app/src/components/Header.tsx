import React from "react";
import MyProfileComponent from "./UserProfile";
import logo from "../Assets/Images/logo_main.png";
import { useNavigate } from "react-router-dom";
import { getRoute } from "../utility/function";
import { RouteNames } from "../constants/RouteNames";
import "../styles/Header_new.css"; // Import the CSS file

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <img
        src={logo}
        alt="logo"
        className="logo-img"
        onClick={() => {
          navigate(getRoute(RouteNames.Home));
        }}
      />
      <h1 className="logo-text">QuePax</h1>
      <MyProfileComponent />
    </header>
  );
};

export default Header;
