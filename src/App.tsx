import React from 'react';
import './App.css';
import { Switch, Route} from "react-router-dom";
import { CitiesLists } from './components/CitiesLists';
import { GlobalContext } from './components/GlobalContext';
import Header from './components/Header';
import CityDetails from './components/CityDetails';

function App() {
  return (
    <GlobalContext>
        <Header title="Where in the world?" />  
        <Switch>
          <Route exact path="/">
            <CitiesLists />
          </Route>
          <Route exact path="/:cityName">
            <CityDetails />
          </Route>
        </Switch>
    </GlobalContext>
  );
}

export default App;
