import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render(){
        const { id, name, type, img } = this.props;
        return(
            <div className="Pokecard" key={id}>
                <p> { name } </p>
                <img src={img} alt="pokemon"/>
                <p> { type } </p>
            </div>
        )
    }
}

export default Pokecard;