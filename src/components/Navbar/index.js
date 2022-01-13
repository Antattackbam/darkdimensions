import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './navbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/investigations' activeStyle>
            Investigations
          </NavLink>
          <NavLink to='/members' activeStyle>
            Team Members
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;