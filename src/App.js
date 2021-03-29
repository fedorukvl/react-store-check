import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import About from './Components/About/About';
import Navigation from './Components/Navigation/Navigation';
import RouteInfo from './Components/RouteInfo/RouteInfo';
import StoreInfo from './Components/StoreInfo/StoreInfo';

function App() {
  return (
    <div className="app">
      <nav><Navigation/></nav>
      <Switch>
        <Route path="/store">
          <StoreInfo/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/route">
          <RouteInfo/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
