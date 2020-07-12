import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
const NavList = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
width: 50vw;
max-width: 400px;

.nav-item {
  font-size: 22pt;
}

.nav-item:hover {
  cursor: pointer;
  text-shadow: 2px 2px 3px #000000be;
  transition: text-shadow 0.2s ease-in-out;
}
`

function NavMenu() {
  return (
    <NavList>
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/skills">Skills</Link>
      </li>
      <li className="nav-item">
        <Link to="/projects">Projects</Link>
      </li>
    </NavList>
  );
}

export default NavMenu;
