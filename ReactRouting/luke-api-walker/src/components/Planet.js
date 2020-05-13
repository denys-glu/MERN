import React, { useContext } from 'react';
import MyContext from './MyContext';

const Planet = () => {
    const context = useContext(MyContext);
    const {name, climate, gravity, population} = context.myObj;
    return (
        <div className="row">
            <div className="col-sm-5">
                <h1>{name}</h1>
                <ul>
                    <li>Climate: {climate}</li>
                    <li>Gravity: {gravity}</li>
                    <li>Population: {population}</li>
                </ul>
            </div>
        </div>
    )
}

export default Planet;

// climate: "temperate, tropical"
// created: "2014-12-10T11:37:19.144000Z"
// diameter: "10200"
// edited: "2014-12-20T20:58:18.421000Z"
// films: ["http://swapi.dev/api/films/1/"]
// gravity: "1 standard"
// name: "Yavin IV"
// orbital_period: "4818"
// population: "1000"
// residents: []
// rotation_period: "24"
// surface_water: "8"
// terrain: "jungle, rainforests"
// url: "http://swapi.dev/api/planets/3/"