import React, { useState } from 'react';

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
                                <td>
                                    <button className="btn">Playing</button>
                                    <button className="btn">Not Playing</button>
                                    <button className="btn">Undecided</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default GameInfo;