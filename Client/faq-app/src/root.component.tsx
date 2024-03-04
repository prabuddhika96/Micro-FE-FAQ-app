import React, { useEffect } from "react";
import { getData } from "@eyepax/utility";
import AppRoutes from "./routes/AppRoutes";
import "./styles/styles.css";
import "./styles/tailwind.css";

export default function Root(props) {
  useEffect(() => {
    console.log("react ->", getData());
  }, []);
  return (
    <>
      <AppRoutes />
    </>
  );
}
