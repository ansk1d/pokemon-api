import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default (props) => {
    const [poke, setPoke] = useState([]);

    const feachPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response => setPoke(response.data.results));
    };


    return (
        
        <div className="nav">
            <button onClick={feachPokemon}>Feach Pokemon</button>

            <div>
            {poke.length > 0 && poke.map((poke, i)=>{
                return (<div key={i}>{poke.name}</div>)
            })}
        </div>
        </div>
    );
}