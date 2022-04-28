import React from "react";
import Main from "./Main"; 
import "./Body.css"
import Sidebar from "../Navigation/Sidebar";

function Body() {
  return (
    <div className="body">
      <div className="container-fluid">
          <Sidebar/>
          <div className="col py-3">
            <Main />
          </div>
      </div>
    </div>
  );
}

export default Body;