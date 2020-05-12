import React, { useEffect, useState } from 'react';
import axios from 'axios';

const People = ({id}) => {

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}/`)
        .then(response=>{
            console.log(response.data);
        }).catch(err => {
            console.log("formHandler -> err", err)
        })
    }, []); 

    return (
        <>
            <h1>People</h1>
        </>
    )
}

export default People;