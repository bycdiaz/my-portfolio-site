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
margin: 50px 30px;
padding: 20px 0px;
border-bottom: 2px solid #e35a00;
background-color: #fff9ef;
border-radius: 10px 10px 0px 0px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

@media (max-width: 600px) {
  margin: 0px 0px;
}

.name-title {
  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
}

.name {
  font-size: 32pt;
  @media (max-width: 600px) {
    font-size: 28pt;
  }
}

.title {
  font-size: 20pt;
  @media (max-width: 600px) {
    display: none;
  }
}
`

function Header() {
  return (
    <NavContainer>
      <div className="name-title">
        <h1 className="name">Carlos Diaz</h1>
        <h2 className="title">Web Developer</h2>
      </div>
      <NavLinks />
    </NavContainer>
  );
}

export default Header;
