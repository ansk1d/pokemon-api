import React, { useEffect, useState } from 'react';



export default (props) => {
    const [poke, setPoke] = useState([]);

    function feachPokemon(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response => response.json())
            .then(response => setPoke(response.results))
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