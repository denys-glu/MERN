import React from 'react';

function AttendenceButton({ player, value, currGame, callBack }) {
    const currGamePlayerStatus = player.games.filter(game => game.name === currGame.name);
    let myClass = currGamePlayerStatus[0].Attendance;
    let myStyle = {}

    if (myClass !== value) {
        myClass = ""
    }
    if (value === "Not Playing" && myClass === value) {
        myClass = "NotPlaying"
        myStyle.marginLeft = "6px";
        myStyle.marginRight = "6px";
    }

    return (
        <>
            <button
                onClick={e => callBack(value, player, currGame.name)}
                style={myStyle}
                className={"btn " + myClass}>
                {value}
            </button>
        </>
    )
}
export default AttendenceButton;