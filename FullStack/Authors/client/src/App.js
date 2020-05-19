import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import ShowAllAuthors from './components/ShowAllAuthors';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
    return (
        <div className="App container">
            <div className="row">
                <div className="col-sm">
                    <h1>Favorite Authors</h1>
                    <Link to="/">Go Home!</Link>
                </div>
            </div>
            <Router>
                <ShowAllAuthors path="/" />
                <AddAuthor path="/new" />
                <EditAuthor path="/edit/:id" />
            </Router>
        </div>
    );
}

export default App;
