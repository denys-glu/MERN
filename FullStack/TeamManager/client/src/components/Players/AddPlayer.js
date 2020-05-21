import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

function AddPlayer() {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [errors, setErrors] = useState({});

    function submitHandler(e) {
        e.preventDefault();
        axios.post("http://localhost:8001/api/players/new", {
            name,
            position
        })
        .then(res => {
            navigate("/players/list")
            cleanForm()
        })
        .catch(err => {
            console.log(err)
        })

    }

    function nameHandler({ name, value }) {
        setName(value)
        let dummy = { ...errors }
        if (value.length < 3) {
            dummy[name] = "More letters needed!"
        } else {
            dummy[name] = ""
            setDisabled(false)
        }
        setErrors(dummy)
    }

    function cleanForm(){
        setName("")
        setPosition("")
        setDisabled(true)
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Name: </label>
                    {errors.name && <span className="text-danger">{errors.name}</span>}
                    <input type="text" className="form-control" name="name"
                        value={name} onChange={e => nameHandler(e.target)} />
                </div>
                <div className="form-group">
                    <label>Prefferd Position: </label>
                    <input type="text" className="form-control"
                        value={position} onChange={e => setPosition(e.target.value)} />
                </div>
                <button disabled={disabled} className="btn btn-success" type="submit">Add Player</button>
            </form>
        </>
    )
}

export default AddPlayer;