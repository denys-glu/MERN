import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteButton from '../DeleteButton';

function ListOfPlayers(props) {
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        getPlayers()
    },[])

    function getPlayers() {
        axios.get('http://localhost:8001/api/players')
            .then(res => {
                setPlayers(res.data.allPlayers)
            })
    }

    function deletePlayer(id) {
        axios.delete(`http://localhost:8001/api/players/delete/${id}`,{id})
        .then(res => {
            getPlayers();
            console.log(res)
        })
        .catch(err => console.log(err))
    }
    
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Player Name</th>
                        <th scope="col">Preferred Position</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, i) => (
                            <tr key={i}>
                                <th scope="row">{player.name}</th>
                                <td>{player.position}</td>
                                <td>
                                    <DeleteButton item={ player } deleteHandler={ deletePlayer }/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListOfPlayers;