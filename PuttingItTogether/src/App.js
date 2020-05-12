import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard.js'

function App() {
  return (
    <div className="App">
      <>
        <PersonCard firstName="Becky" lastName="Betts" age={18} hairColor="brown"  />
        <PersonCard firstName="Hunter" lastName="Kam" age={-999} hairColor="bold"  />
        <PersonCard firstName="Song" lastName="Kim" age={"forever young"} hairColor="black"  />
      </>
    </div>
  );
}

export default App;
