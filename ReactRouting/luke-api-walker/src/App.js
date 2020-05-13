import React, { useState } from 'react';
import { Router } from '@reach/router';
import './App.css';
import MyContext from './components/MyContext';
import Form from './components/Form';
import People from './components/People';
import Planet from './components/Planet';
import Starships from './components/Starships';
import Error from './components/Error';

function App() {
    const [myObj, setMyObj] = useState({});

    return (
        <div className="App container">
            <MyContext.Provider value={{ myObj, setMyObj }}>
                <Form />
                <Router>
                    <People path="/people/:id" />
                    <Planet path="/planets/:id" />
                    <Starships path="/starships/:id" />
                    <Error path="/disaster" />
                </Router>
            </MyContext.Provider>
        </div>
    );
}

export default App;
