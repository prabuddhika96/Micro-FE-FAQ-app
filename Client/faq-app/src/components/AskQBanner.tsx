import React from "react";
import Qphoto from "../Assets/Images/Qbanner.jpg";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../constants/RouteNames";

function AskQBanner() {
  const Navigate = useNavigate();
  const handleAskQ = () => {
    Navigate(RouteNames.AskQuestion);
  };

  const handleQ = () => {
    Navigate("/question-view");
  };
  return (
    <div className="relative">
      <img src={Qphoto} alt="Banner" className="w-full h-64 object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
        <h1 className="text-4xl font-bold text-white">Any Tech Question?</h1>
        <br />
        <h1 className="text-4xl font-bold text-white">Find your answer</h1>
        <div className="mt-8">
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 mr-2 hover:bg-red-900 rounded-md border-4 border-white"
            onClick={handleAskQ}
          >
            Click here
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 hover:bg-red-900 rounded-md border-4 border-white"
            onClick={handleQ}
          >
            All Questions
          </button>
        </div>
      </div>
    </div>
  );
}

export default AskQBanner;
