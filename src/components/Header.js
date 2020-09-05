import React from 'react';
import styled from 'styled-components';

import NavLinks from "./NavLinks";

const NavContainer = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;

.name {
  font-size: 32pt;
}

.title {
  font-size: 20pt;
}
`

function Header() {
  return (
    <NavContainer>
      <div className="nav-left">
        <h1 className="name">Carlos Diaz</h1>
        <h2 className="title">Web Developer</h2>
      </div>
      <NavLinks className="nav-right"/>
    </NavContainer>
  );
}

export default Header;
