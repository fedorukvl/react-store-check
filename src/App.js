import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import StoreInfo from './Components/StoreInfo/StoreInfo';

function App() {
  return (
    <div className="app">
      <nav><Navigation/></nav>
      <Switch>
        <Route path="/store" component={StoreInfo}/>
      </Switch>
    </div>
  );
}

export default App;
