import React, { useEffect } from 'react';
import './App.css';
import { Router, Redirect } from '@reach/router';
import PlayersDashboard from './components/Players/PlayersDashboard';
import GamesDashboard from './components/Games/GamesDashboard';
import Navigation from './components/Navigation';
import ListOfPlayers from './components/Players/ListOfPlayers';
import AddPlayer from './components/Players/AddPlayer';

function App() {

    return (
        <div className="App">
            <Navigation />
            <Router>
                <PlayersDashboard path="/" >
                    <Redirect from="/" to="/players/list" />
                    <ListOfPlayers path="/players/list" />
                    <AddPlayer path="/players/addplayer" />
                </PlayersDashboard>
                <GamesDashboard path="/status/games/1">
                </GamesDashboard>
            </Router>
        </div>
    );
}

export default App;