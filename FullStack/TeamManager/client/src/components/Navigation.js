import React from 'react';
import { Link } from '@reach/router';

function Navigation() {

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <Link className="navbar-brand" to="/">Team Manager</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/players/list">Manage Players</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/status/games/1">Manage Player Status</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;