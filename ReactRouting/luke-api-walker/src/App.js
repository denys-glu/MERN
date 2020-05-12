import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App container">
      <Router>
        <Form path="/"/>
        <People path="/people/:id" />
        <Planet path="/planet/:id" />
      </Router>
    </div>
  );
}

export default App;
