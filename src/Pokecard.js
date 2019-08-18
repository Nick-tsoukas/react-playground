import React, { Component } from 'react';
import './Pokecard.css';
const imageAPI = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`


class Pokecard extends Component {
    render(){
        const { id, name, type, exp } = this.props;
        return(
            <div className="Pokecard" key={id}>
                <p> { name } </p>
                <img src={`${imageAPI}${id}.png`} alt="pokemon"/>
                <p> { type } </p>
                <p> { exp }</p>
            </div>
        )
    }
}

export default Pokecard;