import React from 'react';
import styled from 'styled-components';

import NavLinks from "./NavLinks";

const NavContainer = styled.nav`
position: sticky;
top: 0;
z-index: 2;

display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
padding: 20px 0px;
background-color: #ff6500;

.name {
  font-size: 32pt;
  @media (max-width: 600px) {
    font-size: 28pt;
  }
  background-color: #ff6500;
}

.title {
  font-size: 20pt;
  @media (max-width: 600px) {
    display: none;
  }
  background-color: #ff6500;
}
`

function Header() {
  return (
    <NavContainer>
      <div>
        <h1 className="name">Carlos Diaz</h1>
        <h2 className="title">Web Developer</h2>
      </div>
      <NavLinks />
    </NavContainer>
  );
}

export default Header;
