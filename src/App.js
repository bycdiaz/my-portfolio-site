import React from 'react';
import styled from 'styled-components';

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const AppContainer = styled.div`
.app-content {
  background-color: #fff9ef;
  border-radius: 10px 10px 10px 10px; 
  margin: 0px 30px;
  padding: 5px 20px;
  @media (max-width: 600px) {
    margin: 0px 10px;
    border-radius: 0px 0px 0px 0px;
    padding: 5px 10px;
    background-color: #fff9ef;
  }
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
`

const SectionDivider = styled.hr`
  border-top: 2px solid;
  color: #f26464;
  margin: 50px auto;
  max-width: 1000px;
`

function App() {
  return (
    <AppContainer>
      <Header className="header"/>
      <div className="app-content">
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </div>
    </AppContainer>
  );
}

export default App;
