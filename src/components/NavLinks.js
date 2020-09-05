import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const LinkList = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 40vw;
max-width: 400px;
min-width: 350px;

/* TODO rather than apply this font size to each item, do it to each child of li */
.nav-item {
  font-size: 22pt;
  @media (max-width: 600px) {
    font-size: 14pt;
  }
}

.nav-item:hover {
  cursor: pointer;
  text-shadow: 2px 2px 3px #000000be;
  transition: text-shadow 0.2s ease-in-out;
}
`

function offsetScroll(element, offset) {
  const elementPosition = element.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });
}

function NavLinks() {
  return (
    <LinkList>
      <li className="nav-item">
        <Link smooth to="/#home" scroll={element => offsetScroll(element, 150)}>Home</Link>
      </li>
      <li className="nav-item">
        <Link smooth to="/#skills" scroll={element => offsetScroll(element, 150)}>Skills</Link>
      </li>
      <li className="nav-item">
        <Link smooth to="/#projects" scroll={element => offsetScroll(element, 150)}>Projects</Link>
      </li>
    </LinkList>
  );
}

export default NavLinks;
