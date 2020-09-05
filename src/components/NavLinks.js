import React, { useState } from 'react';
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

.underlined {
  border-bottom: 5px solid white;
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
    home: true,
    skills: false,
    projects: false
  }
  const [underline, setUnderline] = useState(defaultState);

  // TODO Future improvement is to set underline on scroll.
  function handleClick(event) {
    setUnderline({
      home: false,
      skills: false,
      projects: false
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
          to="/#home"
          scroll={element => offsetScroll(element, 150)}
          className={`override-default ${underlined(underline.home)}`}
          onClick={handleClick}
        >Home</Link>
      </li>
      <li>
        <Link
          to="/#skills"
          scroll={element => offsetScroll(element, 150)}
          className={`override-default ${underlined(underline.skills)}`}
          onClick={handleClick}
        >Skills</Link>
      </li>
      <li>
        <Link
          to="/#projects"
          scroll={element => offsetScroll(element, 150)}
          className={`override-default ${underlined(underline.projects)}`}
          onClick={handleClick}
        >Projects</Link>
      </li>
    </LinkList>
  );
}

export default NavLinks;
