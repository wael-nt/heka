import React from "react";

import { NavLink } from "react-router-dom";

function FooterDropdown() {
  return (
    <div className="dropdown pb-4">
      <NavLink to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
        <span className="d-none d-sm-inline mx-1">Wael</span>
      </NavLink>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><NavLink className="dropdown-item" to="/settings">Settings</NavLink></li>
        <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li><NavLink className="dropdown-item" to="/">Sign out</NavLink></li>
      </ul>
    </div>
  );
}

export default FooterDropdown;
