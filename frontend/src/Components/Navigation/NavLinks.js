import React from "react";
import { NavLink } from "react-router-dom";
function NavLinks() {
  return (
    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
      <li className="nav-item">
        <a href="/" className="nav-link align-middle px-0">
          <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
        </a>
      </li>
      <li>
        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
          <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Profile</span> </a>
        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
          <li className="w-100">
            <NavLink to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/nutrition" className="nav-link px-0 align-middle">
          <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Nutrition</span></NavLink>
      </li>
      <li>
        <a href="/#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
          <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Recipes</span></a>
        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
          <li className="w-100">
            <NavLink to='/' className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default NavLinks