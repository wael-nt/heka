import React from 'react'

import ProfileImg from './ProfileImg';
import NavLinks from './NavLinks';
import FooterDropdown from './FooterDropdown';

function Navbar() {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <ProfileImg />
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </a>
        <NavLinks />
        <FooterDropdown />
      </div>
    </div>
  );
}

export default Navbar
