import React from 'react';
import './App.css';
import { Switch, Route} from "react-router-dom";
import { CitiesLists } from './components/CitiesLists';
import { GlobalContext } from './components/GlobalContext';
import Header from './components/Header';
import CityDetails from './components/CityDetails';
import styled from "styled-components";

function App() {
  return (
    <Container>
      <GlobalContext>
          <Header 
            title="Where in the world?" 
            label="Dark mode"
          />  
          <Switch>
            <Route exact path="/">
              <CitiesLists />
            </Route>
            <Route exact path="/:cityName">
              <CityDetails />
            </Route>
          </Switch>
      </GlobalContext>
    </Container>
  );
}

export default App;

const Container = styled.div `
  @media(min-width: 800px) {
    margin: auto;
    max-width: 1265px;
  }
`;

