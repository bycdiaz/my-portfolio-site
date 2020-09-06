import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header className="header"/>
      <div className="app-content">
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
