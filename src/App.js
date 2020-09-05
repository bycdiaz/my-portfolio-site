import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header className="header"/>
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
