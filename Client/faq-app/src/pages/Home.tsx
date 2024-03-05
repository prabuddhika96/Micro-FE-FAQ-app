import React, { useEffect } from "react";
import AskQBanner from "../components/AskQBanner";
import FaqQuestions from "../components/FaqQuestions";
import { getData, sendRouteNames, state$ } from "@eyepax/utility";

function Home() {
  useEffect(() => {
    // console.log("react ->", getData());
    // console.log("routes ->", sendRouteNames().AskQuestion);
    const subscription = state$.subscribe((data: any) => {
      console.log("React rxjs->", data);
    });
    // state$.next({ data: "React Data" });
    // return () => {
    //   subscription.unsubscribe();
    // };
  }, []);
  return (
    <div>
      <AskQBanner />
      <FaqQuestions />
    </div>
  );
}

export default Home;
