import React from 'react';
import logo from '../../Assets/pngwinggreen.png'
import { NavLink } from 'react-router-dom';
import ProfileImg from './ProfileImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import FooterDropdown from './FooterDropdown';
import NavLinks from './NavLinks';




const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ProfileImg />
      <NavLinks/>
      <FooterDropdown />
    </div>
  );
}

export default Sidebar;                   