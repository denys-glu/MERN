import React, { useState, useEffect } from 'react';
import GameInfo from './GameInfo';
import axios from 'axios';

function GamesDashboard() {
    const [games, setGames] = useState([]);
    const [currGame, setCurrGame] = useState({});
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getGames()
    }, [])

    function getGames() {
        axios.get('http://localhost:8001/api/games')
            .then(res => {
                setGames(res.data.allGames)
                getPlayers()
            })
            .catch(err => console.log("getGames -> err", err))
    }

    function getPlayers() {
        axios.get('http://localhost:8001/api/players')
            .then(res => {
                setPlayers(res.data.allPlayers)
                setLoaded(true)
            })
            .catch(err => console.log("getPlayers -> err", err))
    }

    

    return (
        <>
            <div className="container">
                <div className="row mb-5 ">
                    <div className="col text-center">
                        <h2>Games Dashboard - !GAME NAME!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="d-flex flex-wrap">
                            {
                                games.map((game, i) => (
                                    <li className="btn btn-outline-dark mr-1" key={i}>{game.name}</li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
                <div className="row">
                    {loaded?
                        <GameInfo players={ players } />:
                        <div className="loader">Loading...</div>
                    }
                </div>
            </div>
        </>
    )
}

export default GamesDashboard;