import React, { useContext, useEffect } from 'react';
import MyContext from './MyContext';

const Planet = () => {
    const context = useContext(MyContext);
    let {name, climate, gravity, population} = context.myObj;
    
    useEffect(() => {
        if(context.myObj.fromPeople) {
            context.setMyObj(context.myObj.homeworldData)
        } 
    }, []);
    
    return (
        <div className="row">
            <div className="col-sm-5">
                <h1>{name}</h1>
                <ul>
                    <li><strong>Climate</strong>: {climate}</li>
                    <li><strong>Gravity</strong>: {gravity}</li>
                    <li><strong>Population</strong>: {population}</li>
                </ul>
            </div>
        </div>
    )
}

export default Planet;
// JSON example
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