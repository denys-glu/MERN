import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Pokemons = props => {
    const [pokemons, setPokemons] = useState(null);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
             .then(res => {
             console.log("res", res)
                    setPokemons(res.data.results)
        })
    }, [])

    return (
        <>
        <ul>
            
            {
            pokemons?
             pokemons.map( (p, i) => 
                    <li key={ i }>{ p.name }</li>
                ):  ""
            }
        </ul>
        </>
    )
}

export default Pokemons