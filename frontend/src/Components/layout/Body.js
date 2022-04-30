import React from "react";
import Main from "./Main"; 
import "./Body.css"
import Sidebar from "../Navigation/Sidebar";

function Body() {
  return (
    <div className="body">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="container">  
            <Main />
      </div>
    </div>
  );
}

export default Body;