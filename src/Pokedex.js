import React, { Component } from 'react';
import './Pokedex.css'
import Pokecard from './Pokecard';


class Pokedex extends Component {
    
    render(){
        const { cards } = this.props;
        let exp = cards.map((card) => {
            return card.base_experience;
        }).reduce((exp, current) => {
            return exp + current;
        });
        
        return (
            <div className="Pokedex">
                {cards.map((p) => {
                    return <Pokecard key={p.id} id={p.id} img={p.img} type={p.type} name={p.name} exp={p.base_experience}/>
                })}
            </div>
        )
    }
}

export default Pokedex;
