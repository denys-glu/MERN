import React, { useState } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planet from './components/Planet';
import MyContext from './components/MyContext';

function App() {
    const [myObj, setMyObj] = useState({});

    return (
        <div className="App container">
            <MyContext.Provider value={{ myObj, setMyObj }}>
                <Form />
                <Router>
                    <People path="/people/:id" />
                    <Planet path="/planets/:id" />
                </Router>
            </MyContext.Provider>
        </div>
    );
}

export default App;
