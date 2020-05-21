import React, { useState, useEffect } from 'react';
import GameInfo from './GameInfo';
import GameTabButton from './GameTabButton';
import axios from 'axios';

function GamesDashboard() {
    const [games, setGames] = useState([]);
    const [currGame, setCurrGame] = useState({ name: "" });
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getGames()
    }, [])

    function getGames() {
        axios.get('http://localhost:8001/api/games')
            .then(res => {
                setGames(res.data.allGames)
                setCurrGame(res.data.allGames[0])
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

    function changePlayerStatus(value, player, gameName) {
        player.games.map(game => {
            if (game.name === gameName) {
                game.Attendance = value
            }
        })
        
        axios.put(`http://localhost:8001/api/players/update/${player._id}`, player)
            .then(res => {
                getGames()
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="container">
                <div className="row mb-5 ">
                    <div className="col text-center">
                        <h2>Games Dashboard - {currGame.name}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="d-flex flex-wrap">
                            {
                                games.map((game, i) => (
                                    <GameTabButton key={i}
                                        game={game}
                                        setCurrGame={setCurrGame} />
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {loaded ?
                        <GameInfo players={players} currGame={currGame} callBack={changePlayerStatus} /> :
                        <div className="loader">Loading...</div>
                    }
                </div>
            </div>
        </>
    )
}

export default GamesDashboard;