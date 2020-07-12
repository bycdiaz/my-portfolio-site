import React from 'react';
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
const RoutesContainer = styled.div`
margin-top: 30px;
max-width: 60vw;
`
const AppContainer = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");
font-family: "Roboto Slab", serif;
width: 80vw;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`

function Routes() {
  return (
    <AppContainer>
      <RoutesContainer>
        <Switch>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </RoutesContainer>
    </AppContainer>
  );
}

export default Routes;
