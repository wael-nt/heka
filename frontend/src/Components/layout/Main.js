import React from "react";
import { Outlet } from "react-router-dom";
import RecipeProvider from "../../context/RecipeProvider";
import Logo from "../Navigation/Logo";

import "./Main.css";

function Main() {
  return (
    <RecipeProvider>
      <main className="main">
        <Outlet />
      </main>
    </RecipeProvider>

  );
}

export default Main;
