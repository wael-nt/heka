import React from 'react';
import ProfileImg from './ProfileImg';
import FooterDropdown from './FooterDropdown';
import NavLinks from './NavLinks';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ProfileImg />
      <NavLinks />
      <FooterDropdown />
    </div>
  );
}

export default Sidebar;                   