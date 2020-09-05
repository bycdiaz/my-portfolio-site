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

> * {
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
      <li>
        <Link 
          to="/#home"
          scroll={element => offsetScroll(element, 150)}
          className="override-default"
        >Home</Link>
      </li>
      <li>
        <Link
          to="/#skills"
          scroll={element => offsetScroll(element, 150)}
          className="override-default"
        >Skills</Link>
      </li>
      <li>
        <Link
          to="/#projects"
          scroll={element => offsetScroll(element, 150)}
          className="override-default"
        >Projects</Link>
      </li>
    </LinkList>
  );
}

export default NavLinks;
