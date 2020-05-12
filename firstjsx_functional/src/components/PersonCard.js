import React, { Component } from 'react';

const PersonCard = props => {
    return (
            <>
            <h1>{props.firstName} {props.lastName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            </>
        )
}

export default PersonCard;