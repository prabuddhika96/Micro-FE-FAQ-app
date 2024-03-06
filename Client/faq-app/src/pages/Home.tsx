import React, { useEffect } from "react";
import AskQBanner from "../components/AskQBanner";
import FaqQuestions from "../components/FaqQuestions";
import { state$ } from "@eyepax/utility";

function Home() {
  useEffect(() => {
    const subscription = state$.subscribe((data: any) => {
      console.log("React rxjs->", data?.userToken);
      if (data?.userToken) {
        localStorage.setItem("logintoken", data?.userToken);
      }
    });
  }, []);
  return (
    <div>
      <AskQBanner />
      <FaqQuestions />
    </div>
  );
}

export default Home;
