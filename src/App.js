import React from 'react';
import styled from 'styled-components';

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const SectionDivider = styled.hr`
  border-top: 2px solid #e35a00;
  color: #e35a00;
  margin: 50px auto;
  max-width: 1000px;
`

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
