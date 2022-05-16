import React from "react";

import { NavLink } from "react-router-dom";

function FooterDropdown() {
  return (
    <div className="dropdown">
      <NavLink to="/signin">
        <i className='fa fa-fw fa-home'></i>Sign in
      </NavLink>
      <NavLink to="/signup">
        <i className='fa fa-fw fa-home'></i>Sign up
      </NavLink>
    </div>
  );
}

export default FooterDropdown;
