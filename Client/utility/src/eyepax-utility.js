import { BehaviorSubject } from "rxjs";
import { RouteNames } from "./eyepax-routes";
// import { BehaviourSubject } from "rxjs";

// Anything exported from this file is importable by other in-browser modules.
export function getData() {
  return "hello";
}

export function sendRouteNames() {
  return RouteNames;
}

export const state$ = new BehaviorSubject({});
