import React, { useContext } from 'react';
import MyContext from './MyContext';

const People = () => {
    const context = useContext(MyContext);
    const {name, height, birth_year, mass } = context.myObj;

    return (
        <div className="row">
            <div className="col-sm-5">
                <h1>{name}</h1>
                <ul>
                    <li>Height: {height}</li>
                    <li>Birth Year: {birth_year}</li>
                    <li>Mass: {mass}</li>
                </ul>
            </div>
        </div>
    )
}

export default People;