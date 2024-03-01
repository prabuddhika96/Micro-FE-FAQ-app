import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteNames } from "../constants/RouteNames";
import Home from "../pages/Home";
import "../styles/styles.css";
import "../index.css";
import AskQuestionForm from "../components/AskQuestionForm";
import QuestionView from "../pages/QuestionView";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnswerView from "../pages/AnswerView";

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={RouteNames.mainApp}>
            <Route path={RouteNames.Home} element={<Home />} />
            <Route
              path={RouteNames.AskQuestion}
              element={<AskQuestionForm />}
            />
            <Route path={RouteNames.ViewQuestion} element={<QuestionView />} />

            <Route path={RouteNames.ViewAnswer} element={<AnswerView />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
