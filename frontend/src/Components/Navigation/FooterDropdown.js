import React from "react";

import { NavLink } from "react-router-dom";

function FooterDropdown() {
  return (
    <div className="dropdown">
      <>
      {
        !window.localStorage.getItem('cred')?
        <NavLink to="/signin">
        <i className='fa fa-fw fa-home'></i>Sign in
      </NavLink>
        :
      <NavLink to="/" onClick={()=>{
        window.localStorage.removeItem('cred');
        document.location.reload();
      }}>
        <i className='fa fa-fw fa-home'></i>Log out
      </NavLink>
      }
      </>
     
    </div>
  );
}

export default FooterDropdown;
