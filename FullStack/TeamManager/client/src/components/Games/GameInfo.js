import React, { useState } from 'react';
import AttendenceButton from './AttendenceButton';

function GameInfo(props) {
    const [players] = useState(props.players);

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
                                        {/* TODO: Move player to separate component */}
                                        <AttendenceButton attendance={player.attendance}/>
                                        <button className="btn ml-2 mr-2">Not Playing</button>
                                        <button className="btn">Undecided</button>
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