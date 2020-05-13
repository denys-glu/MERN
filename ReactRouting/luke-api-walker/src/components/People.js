import React, { useContext } from 'react';
import { Link, navigate } from '@reach/router';
import MyContext from './MyContext';

const People = () => {
    const context = useContext(MyContext);
    const {name, height, birth_year, mass, homeworldId, homeworldName } = context.myObj;
    
    const handlePlanet = () => {
        navigate(`/planets/${homeworldId}`);
    }
    return (
        <div className="row">
            <div className="col-sm-5">
                <h1>{name}</h1>
                <ul>
                    <li><strong>Height</strong>: {height}</li>
                    <li><strong>Birth Year</strong>: {birth_year}</li>
                    <li><strong>Mass</strong>: {mass}</li>
                    <li><strong>Homeworld</strong>: <Link onClick={ handlePlanet } to={"/planets/" + homeworldId}>{ homeworldName }</Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default People;
// JSON example
// birth_year: "31.5BBY"
// created: "2014-12-15T12:49:32.457000Z"
// edited: "2014-12-20T21:17:50.349000Z"
// eye_color: "brown"
// films: ["http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/5/"]
// gender: "male"
// hair_color: "black"
// height: "183"
// homeworld: "http://swapi.dev/api/planets/10/"
// mass: "78.2"
// name: "Boba Fett"
// skin_color: "fair"
// species: []
// starships: ["http://swapi.dev/api/starships/21/"]
// url: "http://swapi.dev/api/people/22/"
// vehicles: []