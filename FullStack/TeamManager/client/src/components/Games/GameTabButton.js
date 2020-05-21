import React, { useState } from 'react';

function GameTabButton({ game, setCurrGame }) {

    return (
        <>
            <li onClick={e => setCurrGame(game)}
                className="btn btn-outline-dark mr-1" >
                {game.name}
            </li>
        </>
    )
}

export default GameTabButton;