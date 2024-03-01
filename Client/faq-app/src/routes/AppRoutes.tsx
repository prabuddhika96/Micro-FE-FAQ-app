import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteNames } from "../constants/RouteNames";
import Home from "../pages/Home";
import "../styles/styles.css";
import "../index.css";
import AskQuestionForm from "../components/AskQuestionForm";

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={RouteNames.mainApp}>
            <Route path={RouteNames.Home} element={<Home />} />
            <Route
              path={RouteNames.AskQuestion}
              element={<AskQuestionForm />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
