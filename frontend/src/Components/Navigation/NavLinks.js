import React from "react";
import { NavLink } from "react-router-dom";
import '../Sass/NavbarStyle.css';
import Logo from "./Logo";


function NavLinks() {
  return (
    <ul className="nav-pills" id="menu">
      <NavLink to="/"><i className='fa fa-fw fa-home'></i>Home</NavLink>
      <NavLink to="/profile"><i className='fa fa-fw fa-user'></i>Profile</NavLink>
      <NavLink to="/ingredients">Ingredients</NavLink>
      <NavLink to="/recipes"><i className='fa fa-lemon-o'></i>Recipes</NavLink>
      <NavLink to="/contact"><i className='fa fa-fw fa-envelope'></i>Contact</NavLink>
      <Logo className="center"/>
    </ul>

  );
}

export default NavLinks