import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../Navigation/Logo";
import "./Main.css";

function Main() {
  return (
      <main className="main">
        <Outlet />
      </main>
  );
}

export default Main;
