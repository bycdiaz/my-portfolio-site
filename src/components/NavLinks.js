import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const LinkList = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 600px;
min-width: 320px;

> * {
  font-size: 22pt;
  @media (max-width: 600px) {
    font-size: 12pt;
  }
}

.nav-item:hover {
  cursor: pointer;
  text-shadow: 2px 2px 3px #000000be;
  transition: text-shadow 0.2s ease-in-out;
}

.underlined {
  border-bottom: 4px solid #e35a00;
  @media (max-width: 600px) {
    border-bottom: 3px solid #e35a00;
  }
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
  const defaultState = {
    about: true,
    skills: false,
    projects: false,
    contact: false
  }
  const [underline, setUnderline] = useState(defaultState);

  function handleClick(event) {
    setUnderline({
      about: false,
      skills: false,
      projects: false,
      contact: false
    });
    const clickedLinkName = event.target.text.toLowerCase();
    setUnderline({ [clickedLinkName]: true })
  }

  function underlined(stateValue) {
    return stateValue ? 'underlined' : '';
  }

  return (
    <LinkList>
      <li>
        <Link 
          to="/#about"
          scroll={element => offsetScroll(element, 115)}
          className={`override-default ${underlined(underline.about)}`}
          onClick={handleClick}
        >About</Link>
      </li>
      <li>
        <Link
          to="/#skills"
          scroll={element => offsetScroll(element, 115)}
          className={`override-default ${underlined(underline.skills)}`}
          onClick={handleClick}
        >Skills</Link>
      </li>
      <li>
        <Link
          to="/#projects"
          scroll={element => offsetScroll(element, 115)}
          className={`override-default ${underlined(underline.projects)}`}
          onClick={handleClick}
        >Past Work</Link>
      </li>
      <li>
        <Link
          to="/#contact"
          scroll={element => offsetScroll(element, 115)}
          className={`override-default ${underlined(underline.contact)}`}
          onClick={handleClick}
        >Contact</Link>
      </li>
    </LinkList>
  );
}

export default NavLinks;
