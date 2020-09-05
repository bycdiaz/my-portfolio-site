import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Header from "./components/Header";
import Routes from "./components/Routes";
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #EDEAE0;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Routes />
    </div>
  );
}

export default App;
