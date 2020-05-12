import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Palnet = ({id}) => {

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planet/${id}/`)
        .then(response=>{
            console.log(response.data);
        }).catch(err => {
            console.log("formHandler -> err", err)
        })
    }, []); 

    return (
        <>
            <h1>Palnet</h1>
        </>
    )
}

export default Palnet;