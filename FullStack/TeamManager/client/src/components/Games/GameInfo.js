import React, { useState } from 'react';
import AttendenceButton from './AttendenceButton';

function GameInfo({ players, currGame, callBack}) {
    const [statuses] = ["Playing", "NotPlaying", "Undecided"];
    
    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Player Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, i) => (
                            <tr key={i}>
                                <td>{player.name}</td>
                                {
                                    <td>
                                        <AttendenceButton 
                                            player={player} 
                                            value={"Playing"} 
                                            currGame={currGame}
                                            callBack={callBack}/>
                                        <AttendenceButton 
                                            player={player} 
                                            value={"Not Playing"} 
                                            currGame={currGame}
                                            callBack={callBack}/>
                                        <AttendenceButton 
                                            player={player} 
                                            value={"Undecided"} 
                                            currGame={currGame}
                                            callBack={callBack}/>
                                    </td>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default GameInfo;