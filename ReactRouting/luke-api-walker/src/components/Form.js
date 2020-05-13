import React, { useState, useContext } from 'react';
import { navigate } from '@reach/router'
import axios from 'axios';
import MyContext from './MyContext';

const Form = props => {
    const context = useContext(MyContext)
    const dropDown = ["people", "planets"];
    const [searchFor, setSeatchFor] = useState(dropDown[0]);
    const [idValue, setIdValue] = useState("");

    const formHandler = (e) => {
        e.preventDefault();

        axios.get(`https://swapi.dev/api/${searchFor}/${idValue}/`)
        .then(response=>{
            context.setMyObj(response.data)
            console.log("formHandler -> response.data", response.data)
            navigate(`/${searchFor}/${idValue}`)
        }).catch(err => {
            console.log("formHandler -> err", err)
            navigate(`/disaster`)

        })

    }

    const selectHandler = val => {
        setSeatchFor(val)
    }

    const idHandler = val => {
        setIdValue(val)
    }

    return (
        <>
            <div className="row mt-5">
                <div className="col-sm-6">
                    <form onSubmit={ formHandler } className="form-inline">
                        <div className="form-group">
                            <label htmlFor="dropDown">Search For: </label>
                            <select id="dropDown" onChange={ e => selectHandler(e.target.value) } className="form-control ml-3" name="searchFor">
                                {
                                    dropDown.map((name, i) => 
                                        <option value={ name } key={ i }>{ name }</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="form-group ml-3">
                            <label htmlFor="typeId">ID: </label>
                            <input className="form-control ml-3" onChange={ e => idHandler(e.target.value)} type="number" name="typeId" id="typeId"/>
                        </div>
                        <button className="btn btn-primary ml-3" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form;