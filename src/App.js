import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Header from "./components/Header";
import Routes from "./components/Routes";
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FEFEFA;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header
        name="Carlos Diaz"
        title="Web Developer"
      />
      <Routes />
    </div>
  );
}

export default App;
