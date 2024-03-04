import React from "react";
import Qphoto from "../Assets/Images/Qbanner.jpg";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../constants/RouteNames";
import "../styles/AskQBanner.css";

function AskQBanner() {
  const Navigate = useNavigate();
  const handleAskQ = () => {
    Navigate(RouteNames.AskQuestion);
  };

  const handleQ = () => {
    Navigate(RouteNames.ViewQuestion);
  };
  return (
    <div className="banner-container">
      {/* <img src={Qphoto} alt="Banner" className="banner-img" /> */}
      <div className="banner-content">
        <h1 className="banner-title">Any Tech Question?</h1>
        <br />
        <h1 className="banner-title">Find your answer</h1>
        <div className="mt-8">
          <button className="banner-button" onClick={handleAskQ}>
            Ask Question
          </button>
          <button className="banner-button" onClick={handleQ}>
            All Questions
          </button>
        </div>
      </div>
    </div>
  );
}

export default AskQBanner;
