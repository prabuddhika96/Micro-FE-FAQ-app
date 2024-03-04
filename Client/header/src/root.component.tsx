import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/tailwind.css";
import { RouteNames } from "./constants/RouteNames";

export default function Root(props) {
  return (
    <section>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={RouteNames.mainApp}>
            <Route path={RouteNames.Home} element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}
