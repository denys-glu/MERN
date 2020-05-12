import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import NavWrapper from './components/NavWrapper';
import Complicated from './components/Complicated';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <NavWrapper path="/:param" />
        <Complicated path="/:word/:textColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;
