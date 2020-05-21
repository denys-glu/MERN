import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

function PlayersDashboard(props) {


    return (
        <>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-3">
                        <Link to="/players/list"><h4>List</h4></Link>
                    </div>
                    <div className="col-3">
                        <Link to="/players/addplayer"><h4>Add Player</h4></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayersDashboard;