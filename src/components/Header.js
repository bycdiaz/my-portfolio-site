import React from 'react';
import NavMenu from "./NavMenu";
import styled from 'styled-components';
const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 40px;

.name {
  font-size: 32pt;
  margin-bottom: 15px;
}

.title {
  font-size: 20pt;
  margin-bottom: 40px;
}

.fade-in {
  animation: fadeIn ease 2s;
  -webkit-animation: fadeIn ease 2s;
  -moz-animation: fadeIn ease 2s;
  -o-animation: fadeIn ease 2s;
  -ms-animation: fadeIn ease 2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`

function Header(props) {
  return (
    <HeaderContainer>
      <h1 className="name">
        {props.name}
      </h1>
      <h2 className="title fade-in">
        {props.title}
      </h2>
      <NavMenu />
    </HeaderContainer>
  );
}

export default Header;
