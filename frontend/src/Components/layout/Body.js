import React from "react";

import Main from "./Main";
import Navbar from "../Navigation/Navbar";

import "./Body.css"

function Body() {
  return (
    <div className="body">
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Navbar />
          <div className="col py-3">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;