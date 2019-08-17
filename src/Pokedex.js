import React, { Component } from 'react';
import './Pokedex.css'
import Pokecard from './Pokecard';
import pokemons from './pokemons';


class Pokedex extends Component {
    render(){
        return (
            <div className="Pokedex">
                {pokemons.map((pokemon) => {
                    return <Pokecard 
                        name={pokemon.name}
                        type={pokemon.type}
                        key={pokemon.id}
                        img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    />
                })}
            </div>
        )
    }
}

export default Pokedex;