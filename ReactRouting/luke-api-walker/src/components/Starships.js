import React, { useContext } from 'react';
import MyContext from './MyContext';

const Starships = () => {
    const context = useContext(MyContext);
    const {MGLT, consumables, crew, length, name, max_atmosphering_speed, starship_class, manufacturer } = context.myObj;
    
    return (
        <div className="row">
            <div className="col-sm-5">
                <h1>{name}</h1>
                <ul>
                    <li><strong>Name</strong>: {name}</li>
                    <li><strong>Length</strong>: {length}</li>
                    <li><strong>Manufacturer</strong>: {manufacturer}</li>
                    <li><strong>Max atmosphering speed</strong>: {max_atmosphering_speed}</li>
                    <li><strong>Starship class</strong>: {starship_class}</li>
                    <li><strong>Crew</strong>: {crew}</li>
                    <li><strong>Consumables</strong>: {consumables}</li>
                    <li><strong>MGLT</strong>: {MGLT}</li>
                    <li><strong>Pilots IDs</strong>: TODO: </li>
                </ul>
            </div>
        </div>
    )
}

export default Starships;
// JSON example
// MGLT: "70"
// cargo_capacity: "70000"
// consumables: "1 month"
// cost_in_credits: "unknown"
// created: "2014-12-15T13:00:56.332000Z"
// crew: "1"
// edited: "2014-12-20T21:23:49.897000Z"
// films: ["http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/5/"]
// hyperdrive_rating: "3.0"
// length: "21.5"
// manufacturer: "Kuat Systems Engineering"
// max_atmosphering_speed: "1000"
// model: "Firespray-31-class patrol and attack"
// name: "Slave 1"
// passengers: "6"
// pilots: ["http://swapi.dev/api/people/22/"]
// starship_class: "Patrol craft"
// url: "http://swapi.dev/api/starships/21/"