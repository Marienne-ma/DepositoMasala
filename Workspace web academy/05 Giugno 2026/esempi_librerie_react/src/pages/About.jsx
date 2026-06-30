import { Outlet } from "react-router-dom";
import { Hello } from "../components/Hello";
import { HelloAbout } from "../components/HelloAbout";

export function About() {
  return (
    <>
      <Hello></Hello>
      <Outlet></Outlet>
      <HelloAbout></HelloAbout>
    </>
  );
}
