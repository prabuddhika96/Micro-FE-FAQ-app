import React from "react";
import { useNavigate } from "react-router";
import { RouteNames } from "../../constants/RouteNames";
import logo from "../../Assets/Images/logo_main.png";

function Header() {
  useEffect(() => {
    // Define the custom element
    customElements.define("common-header", HeaderElement);
  }, []);

  const navigate = useNavigate();

  class HeaderElement extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="bg-sky-200 sticky top-0 mx-auto !z-40 flex w-full items-center justify-between border-b border-gray-500 p-3">
          <img
            src="${logo}"
            alt="logo"
            class="w-10 h-10 mr-2 cursor-pointer"
            onClick="window.customElements.get('common-header').navigate('${getRoute(
              RouteNames.Home
            )}')"
          />
          <h1 class="text-5xl text-cyan-800 font-bold font-mono">QuePax</h1>
          <my-profile-component></my-profile-component>
        </header>
      `;
    }

    navigate(route) {
      navigate(route);
    }
  }

  return (
    <div id="header-root">
      <common-header></common-header>
    </div>
  );
}

export default Header;

function useEffect(arg0: () => void, arg1: undefined[]) {
  throw new Error("Function not implemented.");
}

function getRoute(Home: any) {
  throw new Error("Function not implemented.");
}
