import React from 'react';
import { createGlobalStyle } from 'styled-components'

import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    background-color: #EDEAE0;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
