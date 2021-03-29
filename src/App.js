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
        <Route path="/store" component={StoreInfo}/>
        <Route path="/about" component={About}/>
        <Route path="/route" component={RouteInfo}/>
      </Switch>
    </div>
  );
}

export default App;
