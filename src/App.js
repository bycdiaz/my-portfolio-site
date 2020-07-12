import React from 'react';
import Header from "./components/Header";
import Routes from "./components/Routes";

function App() {
  return (
    <div>
      <Header
        name="Carlos Diaz"
        title="Web Developer"
      />
      <Routes />
    </div>
  );
}

export default App;
